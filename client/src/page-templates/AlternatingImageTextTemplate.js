import React from 'react'
import { Link } from 'react-router-dom'

import { splitLines, formatParagraph } from '../helper-files/helperFunctions'

import TitleText from '../components-reusable/TitleText'
import SectionDivider from '../components-reusable/SectionDivider'

import { general } from '../helper-files/images'
const { fallbackImg } = general

import {
  Image,
  Row,
  Col,
} from 'antd'

import {
  colorLGray,
  colorMGray,
  colorLOrange,
  colorWhite,
} from '../helper-files/colors'

const ImageColumn = ({ item, lr }) => (
  <Col className='aitt-img-col'>
    <Image
      className='aitt-img'
      src={item.imgSrc}
      fallback={fallbackImg}
    />
  </Col>
)

const titleStyle = (bColor) => {
  return {
    textAlign: 'left',
    fontSize: '1.6rem',
    color: [colorMGray].includes(bColor) && '#ffffff'
  }
}

const textStyle = (bColor) => {
  return {
    textAlign: 'justify',
    lineHeight: '30px',
    fontSize: '1rem',
    fontWeight: '300',
    margin: 0,
    color: [colorMGray].includes(bColor) && colorWhite
  }
}

const underlineStyle = (bColor) => {
  return {
    backgroundColor: [].includes(bColor) && colorLGray
  }
}

const linkStyle = (bColor) => {
  return {
    color: [].includes(bColor) && colorLGray
  }
}

const getColClassName = (imgExists, lr) => {
  if (imgExists) {
    return 'aitt-content-col'
  } else {
    return 'aitt-content-col-text-only'
  }
}

const ContentColumn = ({ item, lr, bColor }) => (
  <Col className={getColClassName(item.imgSrc, lr)}>
    <TitleText
      title={item.title}
      titleStyle={titleStyle(bColor)}
      text={
        splitLines(item.text).map((paragraph, j) =>
          <span key={j}>
            {formatParagraph(paragraph)}
          </span>
        )
      }
      textStyle={textStyle(bColor)}
      underlineStyle={underlineStyle(bColor)}
    />
    {(item.link) &&
      <Link className='aitt-link' style={linkStyle(bColor)} to={item.link.path}>{item.link.text}</Link>
    }
  </Col>
)

const colors = [
  colorLGray,
  colorMGray,
  colorLOrange,
]

const getRowLengths = (i, rowLengthType) => {
  switch (rowLengthType) {
    /* All rows are the same length (long) */
    case (0):
      return { width: '90%' }
    /* Rows alternate between long and short */
    case (1):
      return i % 2 === 0 ? { width: '90%' } : { width: '70%' }
    /* Rows alternate between short and long */
    case (2):
      return i % 2 === 0 ? { width: '70%' } : { width: '90%' }
  }
}

const getRowLayout = (i, rowLayout) => {
  switch (rowLayout) {
    /* Standard layout: no margins */
    case (0):
      break
    /* Alternate between left and right */
    case (1): {
      return i % 2 === 0
        ? { margin: '60px 0', justifyContent: 'flex-start' }
        : { margin: '60px 0', justifyContent: 'flex-end' }
    }
    /* Alternate between right and left */
    case (2): {
      return i % 2 === 0
        ? { margin: '60px 0', justifyContent: 'flex-end' }
        : { margin: '60px 0', justifyContent: 'flex-start' }
    }
    case (3): {
      /* All left */
      return { margin: '60px 0', justifyContent: 'flex-start' }
    }
    case (4): {
      /* All right */
      return { margin: '60px 0', justifyContent: 'flex-end' }
    }
    case (5): {
      /* All right */
      return { margin: '0', justifyContent: 'center' }
    }
  }
}

const getColorLayout = (i, primaryColor, colorLayout) => {
  switch (colorLayout) {
    /* All rows are the same color */
    case (0):
      return { backgroundColor: colors[primaryColor] }
    /* Rows alternate between white and primaryColor */
    case (1):
      return { backgroundColor: i % 2 === 0 ? colorWhite : colors[primaryColor] }
    /* Rows alternate between primaryColor and white */
    case (2):
      return { backgroundColor: i % 2 === 0 ? colors[primaryColor] : colorWhite }
    /* Rows alternate between all colors */
    case (3): {
      const rotatedPrimaryColor = (primaryColor + i) % colors.length
      return { backgroundColor: colors[rotatedPrimaryColor] }
    }
  }
}

const getImgTextLayout = (i, item, imgTextLayout, bColor) => {
  switch (imgTextLayout) {
    case (0):
      if (i % 2 === 0) {
        return (<>
          <ImageColumn item={item} lr='imgText' />
          <ContentColumn item={item} lr='imgText' bColor={bColor} />
        </>)
      } else {
        return (<>
          <ContentColumn item={item} lr='textImg' bColor={bColor} />
          <ImageColumn item={item} lr='textImg' />
        </>)
      }
    case (1):
      if (i % 2 === 0) {
        return (<>
          <ContentColumn item={item} lr='textImg' />
          <ImageColumn item={item} lr='textImg' />
        </>)
      } else {
        return (<>
          <ImageColumn item={item} lr='imgText' />
          <ContentColumn item={item} lr='imgText' />
        </>)
      }
    case (2):
      return (<>
        <ImageColumn item={item} lr='imgText' />
        <ContentColumn item={item} lr='imgText' />
      </>)
    case (3):
      return (<>
        <ContentColumn item={item} lr='textImg' />
        <ImageColumn item={item} lr='textImg' />
      </>)
  }
}

/**
 * primaryColor: 0-2
 * colorLayout: 0-3
 * rowLengthType: 0-2
 * rowLayout: 0-4
 * imgTextLayout: 0-3
 * divider: true/false
 */
const AlternatingImageText = (props) => {
  const {
    data,
    rowLengthType,
    rowLayout,
    imgTextLayout,
    primaryColor,
    colorLayout,
    divider,
  } = props

  return (
    <div style={divider && { padding: '30px 3%' }}>
      {data.map((item, i) =>
        <div key={i}>
          <div style={{ display: 'flex', ...getRowLayout(i, rowLayout) }}>
            <Row
              className='aitt-row'
              style={{
                ...getColorLayout(i, primaryColor, colorLayout),
                ...getRowLengths(i, rowLengthType)
              }}>
              {(() => {
                const bColor = getColorLayout(i, primaryColor, colorLayout).backgroundColor
                // console.log(bColor)
                return getImgTextLayout(i, item, imgTextLayout, bColor)
              })()}
            </Row>
          </div>
          {divider && i !== data.length - 1
            && <SectionDivider />}
        </div>
      )}
    </div>
  )
}

export default AlternatingImageText
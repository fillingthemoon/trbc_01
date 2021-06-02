import React from 'react'
import { Link } from 'react-router-dom'

import { splitLines, formatParagraph } from '../helper-files/helperFunctions'

import TitleText from '../components-reusable/TitleText'

import {
  Image,
  Row,
  Col,
  Divider,
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
      fallback="data:image/png;base64,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"
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
    return lr === 'imgText' ? 'aitt-content-col-img-text' : 'aitt-content-col-text-img'
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
    <div style={divider && { padding: '80px' }}>
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
          {divider && i !== data.length - 1 && <Divider style={{ width: '100px' }} />}
        </div>
      )}
    </div>
  )
}

export default AlternatingImageText
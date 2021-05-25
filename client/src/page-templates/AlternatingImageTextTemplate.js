import React from 'react'
import { Link } from 'react-router-dom'

import TitleText from '../components-reusable/TitleText'

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
} from '../colors'

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

const ContentColumn = ({ item, lr, bColor }) => (
  <Col className={lr === 'imgText' ? 'aitt-content-col-img-text' : 'aitt-content-col-text-img'}>
    <TitleText
      title={item.title}
      titleStyle={titleStyle(bColor)}
      text={item.text}
      textStyle={textStyle(bColor)}
      underlineStyle={underlineStyle(bColor)}
    />
    {(item.linkPath && item.linkText) &&
      <Link className='aitt-link' style={linkStyle(bColor)} to={item.linkPath}>{item.linkText}</Link>
    }
  </Col>
)

const colors = [
  colorMGray,
  colorLGray,
  colorLOrange,
]

const getBackgroundColor = (rowType, i, primaryColor) => {
  switch (rowType) {
    case (1):
      return i % 2 === 0 ? '#ffffff' : colors[primaryColor]
    case (2):
      return i % 2 === 0 ? colors[primaryColor] : '#ffffff'
    case (3): {
      const rotatedColorScheme = (primaryColor + (i % colors.length)) % colors.length
      return colors[rotatedColorScheme]
    }
  }
}

const marginLayout = (marginLayoutType, i) => {
  switch (marginLayoutType) {
    case (1): {
      return i % 2 === 0 ? '60px 15% 60px 0' : '60px 0 60px 15%'
    }
    case (2): {
      return i % 2 === 0 ? '60px 0 60px 15%' : '60px 15% 60px 0'
    }
    case (3): {
      // return '60px 15% 60px 0'
      return i % 2 === 0 ? '60px 30% 60px 0' : '60px 15% 60px 0'
    }
    case (4): {
      // return '60px 0 60px 15%'
      return i % 2 === 0 ? '60px 0 60px 30%' : '60px 0 60px 15%'
    }
  }
}

const rowLayout = (i, rowType, primaryColor) => {
  switch (rowType) {
    case (1):
    case (2):
    case (3):
      return {
        backgroundColor: getBackgroundColor(rowType, i, primaryColor),
      }
    case (4):
    case (8):
    case (12):
      return {
        backgroundColor: colors[primaryColor],
        margin: marginLayout(rowType / 4, i),
      }
    case (5):
    case (6):
    case (7):
      return {
        backgroundColor: getBackgroundColor(rowType - 4, i, primaryColor),
        margin: marginLayout(1, i),
      }
    case (9):
    case (10):
    case (11):
      return {
        backgroundColor: getBackgroundColor(rowType - 8, i, primaryColor),
        margin: marginLayout(2, i),
      }
    case (13):
    case (14):
    case (15):
      return {
        backgroundColor: getBackgroundColor(rowType - 12, i, primaryColor),
        margin: marginLayout(3, i),
      }
  }
}

const imgTextLayout = (i, item, imgTextType, bColor) => {
  switch (imgTextType) {
    case (1):
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
    case (2):
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
    case (3):
      return (<>
        <ImageColumn item={item} lr='imgText' />
        <ContentColumn item={item} lr='imgText' />
      </>)
    case (4):
      return (<>
        <ContentColumn item={item} lr='textImg' />
        <ImageColumn item={item} lr='textImg' />
      </>)
  }
}

/**
 * rowType: 1-15
 * imgTextType: 1-4
 * colorScheme: 0-2
 */
const AlternatingImageText = ({ data, rowType, imgTextType, primaryColor }) => {
  return (
    <div>
      {data.map((item, i) =>
        <Row key={i} className='aitt-row' style={rowLayout(i, rowType, primaryColor)}>
          {(() => {
            const bColor = rowLayout(i, rowType, primaryColor).backgroundColor
            // console.log(bColor)
            return imgTextLayout(i, item, imgTextType, bColor)
          })()}
        </Row>
      )}
    </div>
  )
}

export default AlternatingImageText
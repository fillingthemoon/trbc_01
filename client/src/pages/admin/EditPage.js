import React, { useState } from 'react'

import { Typography, Row, Col, Card, Input, Button, Upload, Carousel } from 'antd'
import {
  ClockCircleOutlined,
  PushpinOutlined,
  UserOutlined,
} from '@ant-design/icons'

import { UploadOutlined } from '@ant-design/icons'
import Banner from '../../components-reusable/Banner'

import { general } from '../../helper-files/images'
const { churchWide } = general

import axios from 'axios'

// Event Page, with props given from parent component ChurchWide.
function EditPage(props) {
  // const { Title } = Typography;
  const { TextArea } = Input
  var styles = {
    contentStyle: {
      height: '160px',
      color: 'black',
      lineHeight: '160px',
      textAlign: 'center',
      background: '#F2F2F2',
    },
  }

  var fileList = [
    {
      uid: '-1',
      name: 'xxx.png',
      status: 'done',
      url:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
      thumbUrl:
        'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
    },
    {
      uid: '-2',
      name: 'yyy.png',
      status: 'error',
    },
  ]

  const {
    location: { state },
  } = props
  console.log('edit page')
  console.log(props)
  console.log(state)

  fileList = state.images.map((i) => {
    return {
      uid: i,
      name: 'Click here to View',
      status: 'done',
      url: i,
      thumbUrl: i,
    }
  })
  const [record, setRecord] = useState()
  const onCreateImage = (event) => {
    const MAX_IMAGE_SIZE = 1000000


    let reader = new FileReader()

    reader.onload = (e) => {

      console.log('length: ', e.target.result.includes('data:image/jpeg'))
      if (!e.target.result.includes('data:image/jpeg')) {
        if (!e.target.result.includes('data:image/png')) {
          return alert('Wrong file type - JPG only.')
        }
      }
      if (e.target.result.length > MAX_IMAGE_SIZE) {
        return alert('Image is loo large.')
      }


      axios.post('http://localhost:8080/mission/upload', {
        name: 'mission:' + state.key + fileList.length + 1,
        image: e.target.result,
      })
    }
    reader.readAsDataURL(event.target.files[0])
  }


  return (
    <>
      <Banner imageTitlePairs={[{ title: state.type, image: churchWide }]} />

      <div className="main-container">
        <br />
        <br />
        <Row gutter={[60, 60]}>
          <Col sm={24} lg={12}>
            <div width="300px">
              <Carousel
                images={state.images.map((i) => {
                  return {
                    src: i,
                  }
                })}
                shouldMaximizeOnClick={true}
                playIcon={false}
                hasIndexBoard={false}
              />
            </div>

            <br />
            <br />
            <Upload
              listType="picture"
              defaultFileList={[...fileList]}
              className="upload-list-inline"
              onChange={(e) => {
                onCreateImage(e)
              }}
            >
              <Button icon={<UploadOutlined />}>Upload</Button>
            </Upload>
            <input
              type="file"
              name="image"
              onChange={(e) => {
                console.log(e)
                onCreateImage(e)
              }}
            />
            <br></br>
          </Col>
          <Col sm={24} lg={12}>
            {/* <Title style={{ textAlign: "left" }}>{state.key}</Title> */}
            Title
            <Input defaultValue={state.key} />
            <hr align="left" className="thick-line"></hr>
            {/* <p style={{ textAlign: "left" }}>{state.writeup}</p> */}
            Summary
            <TextArea
              rows={4}
              defaultValue={state.summary}
              onChange={(e) => {
                console.log(e.target.value)
                setRecord(e.target.value)
              }}
            />
            Write up
            <TextArea
              rows={10}
              defaultValue={state.writeup}
              onChange={(e) => {
                console.log(e.target.value)
                setRecord(e.target.value)
              }}
            />
            <Button
              type="primary"
              onClick={() => {
                console.log(record)
              }}
            >
              Primary Button
            </Button>
            {(state.type === 'Community') | (state.type === 'Interest Groups') | (state.type === 'Children') ? (
              <Card
                bodyStyle={{
                  backgroundColor: '#F2F2F2',
                  textAlign: 'left',
                }}
              >
                <p>
                  <ClockCircleOutlined style={{ color: '#f37021' }} /> {'    '}
                  {state.time}
                </p>
                <p>
                  <PushpinOutlined style={{ color: '#f37021' }} /> {'    '}
                  {state.location}
                </p>
                <p>
                  <UserOutlined style={{ color: '#f37021' }} />
                  {'   '}
                  {state.leader}
                </p>
              </Card>
            ) : null}
          </Col>
        </Row>
      </div>
      <Carousel autoplay>
        <div>
          <h3 style={styles.contentStyle}>1</h3>
        </div>
        <div>
          <h3 style={styles.contentStyle}>2</h3>
        </div>
        <div>
          <h3 style={styles.contentStyle}>3</h3>
        </div>
        <div>
          <h3 style={styles.contentStyle}>4</h3>
        </div>
      </Carousel>
    </>
  )
}

export default EditPage

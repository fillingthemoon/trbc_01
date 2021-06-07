import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import TitleText from '../../components-reusable/TitleText'

import { flattenNestedObject, convertName } from '../../helper-files/helperFunctions'
import { getWord } from '../../helper-files/navBarPagesEnChWords'

import {
  Input,
  Form,
  Button,
  Modal,
  Row,
  Col,
} from 'antd'

const { TextArea } = Input

const FormField = ({ title, language }) => {
  const fieldsWithDefaultValues = [
    'pageEn', 'pageSectionEn',
    'pageCh', 'pageSectionCh',
  ]

  const inputNode = () => {
    if (fieldsWithDefaultValues.includes(title)) {
      return <Input disabled />
    } else {
      return <TextArea />
    }
  }

  // Return either the Form inputs or cell content
  return (
    <Form.Item
      name={`${title}-${language}`}
      label={convertName('camel', 'proper', title)}
      rules={[{ required: true, message: 'This field is required.' }]}
    >
      {inputNode()}
    </Form.Item>
  )
}

const TitleTextLang = ({ title }) =>
  <TitleText
    title={title}
    titleStyle={{ fontSize: '1.5rem' }}
    style={{ margin: '20px 0' }}
  />

const AddNewRowBtn = ({ section }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const language = useSelector(state => state.language)

  const showModal = () => {
    setIsModalVisible(true)
  }

  const handleSubmit = () => {
    console.log('hello')
    setIsModalVisible(false)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
  }

  const hiddenFormFields = [
    'id', 'itemId',
    'page', 'pageSection',
    // 'pageEn', 'pageSectionEn', 'pageCh', 'pageSectionCh'
  ]
  const flattenedSection = flattenNestedObject(section[0])
  // fields for current language
  const formFieldsPrimary = Object.keys(flattenedSection)
    .filter(formField => !hiddenFormFields.includes(formField))
  // fields for other language
  const formFieldsOther = formFieldsPrimary.map(formField => {
    if (['En', 'Ch'].includes(formField.slice(-2))) {
      return `${formField.substring(0, formField.length - 2)}${language === 'en' ? 'Ch' : 'En'}`
    } else {
      return formField
    }
  })

  // Assigns primary/other to their respective languages
  const formFieldsEn = language === 'en' ? formFieldsPrimary : formFieldsOther
  const formFieldsCh = language === 'ch' ? formFieldsPrimary : formFieldsOther
  const formFields = {
    'en': formFieldsEn,
    'ch': formFieldsCh,
  }

  // Initial Form values
  const initialFormValues = {
    'page': section[0].page,
    'pageSection': section[0].pageSection,
    'pageEn-en': section[0].page,
    'pageSectionEn-en': section[0].pageSection,
    'imgSrc-en': 'https://raw.githubusercontent.com/fillingthemoon/trbc_01/main/client/src/imgs/general/mountain.jpg',
    'pageCh-ch': section[0].page,
    'pageSectionCh-ch': getWord(convertName('dashed', 'proper', section[0].pageSection), 'ch'),
    'imgSrc-ch': 'https://raw.githubusercontent.com/fillingthemoon/trbc_01/main/client/src/imgs/general/mountain.jpg',
  }

  return (
    <>
      <Button type="primary" onClick={showModal}>
        Add New Row
      </Button>
      <Modal
        title="Add New Row"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[]}
        width='80%'
      >
        <Form initialValues={initialFormValues} onFinish={handleSubmit}>
          <Row gutter={30}>
            {['page', 'pageSection'].map((title, i) =>
              (<Col key={i}>
                <Form.Item
                  name={title}
                  label={convertName('camel', 'proper', title)}
                  rules={[{ required: true, message: 'This field is required.' }]}
                >
                  <Input disabled />
                </Form.Item>
              </Col>)
            )}
          </Row>
          <Row gutter={30}>
            {/* Form fields for English and Chinese */}
            {['en', 'ch'].map((lang, i) =>
              (<Col key={i} span={12}>
                <TitleTextLang title={`${lang === 'en' ? 'English' : 'Chinese'} Language Data`} />
                {formFields[lang].map((formField, i) =>
                  <FormField
                    key={i}
                    language={lang}
                    title={formField} flattenedSection={flattenedSection} />
                )}
              </Col>)
            )}
          </Row>
          <Row>
            <Col span={24} style={{ textAlign: 'right' }}>
              <Button htmlType="submit" type="primary">
                Submit
              </Button>
            </Col>
          </Row>
        </Form>
      </Modal>
    </>
  )
}

export default AddNewRowBtn
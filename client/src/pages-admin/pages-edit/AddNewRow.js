import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import TitleText from '../../components-reusable/TitleText'

import { flattenNestedObject, convertName } from '../../helper-files/helperFunctions'
import { getWord } from '../../helper-files/navBarPagesEnChWords'

import { createUpcomingSermon } from '../../reducers/upcomingSermonsReducer'

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

const AddNewRow = ({ section }) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const language = useSelector(state => state.language)

  const dispatch = useDispatch()

  const showModal = () => {
    setIsModalVisible(true)
  }

  // Should be kept updated with itemModel.js's details object fields
  const detailsFields = ['date', 'time', 'location', 'person', 'passage']

  const handleSubmitNewRow = (values) => {
    setIsModalVisible(false)

    const nestedFlattenedObject = { itemEn: {}, itemCh: {} }
    Object.keys(values).forEach(field => {
      // If the field contains a -en or -ch at the back
      if (['en', 'ch'].includes(field.slice(-2))) {

        // Get the field name with -en or -ch at the back
        const fieldWithoutLang = field.substring(0, field.length - 3)

        // Get the capitalised version of 'en' and 'ch'; 'En' and 'Ch'
        const capitalisedLang = `${field.slice(-2)[0].toUpperCase()}${field.slice(-2)[1]}`

        // If the field is a 'detail'
        if (detailsFields.includes(fieldWithoutLang)) {

          // If the 'details' key-value pair is not already in nestedFlattenedObject, then create it.
          if (!Object.keys(nestedFlattenedObject[`item${capitalisedLang}`]).includes('details')) {
            nestedFlattenedObject[`item${capitalisedLang}`]['details'] = { [fieldWithoutLang]: values[field] }
          } else {
            nestedFlattenedObject[`item${capitalisedLang}`]['details'][fieldWithoutLang] = values[field]
          }
        } else {
          nestedFlattenedObject[`item${capitalisedLang}`][fieldWithoutLang] = values[field]
        }
      } else {
        nestedFlattenedObject[field] = values[field]
      }
    })

    dispatch(createUpcomingSermon(nestedFlattenedObject, language))
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

    // temporary
    'title-en': 'Title test',
    'text-en': 'Text test',
    'date-en': 'Date test',
    'time-en': 'Time test',
    'person-en': 'Person test',
    'passage-en': 'Passage test',
    'title-ch': 'Title test (ch)',
    'text-ch': 'Text test (ch)',
    'date-ch': 'Date test (ch)',
    'time-ch': 'Time test (ch)',
    'person-ch': 'Person test (ch)',
    'passage-ch': 'Passage test (ch)',
  }

  return (
    <>
      <Button type="primary" onClick={showModal} style={{ marginBottom: '20px' }}>
        Add New Row
      </Button>
      <Modal
        title="Add New Row"
        visible={isModalVisible}
        onCancel={handleCancel}
        footer={[]}
        width='80%'
      >
        <Form initialValues={initialFormValues} onFinish={handleSubmitNewRow}>
          <Row gutter={30}>
            {['page', 'pageSection'].map((title, i) => {
              return (
                <Col key={i}>
                  <Form.Item
                    name={title}
                    label={convertName('camel', 'proper', title)}
                    rules={[{ required: true, message: 'This field is required.' }]}
                  >
                    <Input disabled />
                  </Form.Item>
                </Col>
              )
            })}
          </Row>
          <Row gutter={30}>
            {/* Form fields for English and Chinese */}
            {['en', 'ch'].map((lang, i) => {
              return (
                <Col key={i} span={12}>
                  <TitleTextLang title={`${lang === 'en' ? 'English' : 'Chinese'} Language Data`} />
                  {formFields[lang].map((formField, i) =>
                    <FormField
                      key={i}
                      language={lang}
                      title={formField} flattenedSection={flattenedSection} />
                  )}
                </Col>
              )
            })}
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

export default AddNewRow
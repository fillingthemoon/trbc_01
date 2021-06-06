const dictionaryEnToCh = {
  'Home': '主页',

  'About Us': '认识教会',
  'Mission & Vision': '使命与异象',
  'Our History': '教会历史',
  'Our Team': '教会同工',
  'Statement of Faith': '信仰宣言',

  'Services': '崇拜聚会',

  'I\'m New': '我是新来的',

  'Ministries': '教会性事工',
  'Outreach': '外展事工',
  'Missions': '宣教事工',
  'Discipleship': '门徒训练',

  'Resources': '资源',
  'Resource Library': '资源库',
  'Facility Booking': '设施预订',

  'Admin': '行政人员',
  'Admin Portal': '管理门户',
}

const getWord = (word, language) => {
  return language === 'en' ? word : dictionaryEnToCh[word]
}

export {
  getWord
}
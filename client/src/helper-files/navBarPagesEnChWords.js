const dictionaryEnToCh = {
  'Home': '主页',

  'Announcements': '公告',
  'Events': '事件',
  'Upcoming Sermons': '即将举行的布道',

  'Cec': 'cec',
  'Children\'s Enrichment Camp': '儿童营会',

  'About Us': '认识教会',
  'Mission & Vision': '使命与异象',
  'Our History': '教会历史',

  'Our Team': '教会同工',
  'Pastoral': '教牧',
  'Ministry': '事工人员',
  'Administrative': '行政人员',

  'Statement of Faith': '信仰宣言',

  'Services': '崇拜聚会',
  'Attitude of Worship': '敬拜的态度',
  '3 Elements of Worship': '3 崇拜的要素',
  'God is spirit, and his worshipers must worship in the Spirit and in truth. - John 4:24 (NIV)':
    '24 神 是 個 靈 （ 或 無 個 字 ） ， 所 以 拜 他 的 必 須 用 心 靈 和 誠 實 拜 他 。 」 - 約 翰 福 音 4:24',
  'Service Details': '崇拜聚会细节',

  'English Service': '主日崇拜',
  'Teo Chew/Chinese Service': '潮华华语崇拜',
  'Sunset Service (English/Mandarin)': '夕阳崇拜',

  'Join Us': 'Join Us (ch)',

  'I\'m New': '我是新来的',

  'Ministries': '教会性事工',
  'Outreach': '外展事工',
  'Children': '孩子们',
  'Interest Groups': '利益集团',
  'Community': '社区',

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
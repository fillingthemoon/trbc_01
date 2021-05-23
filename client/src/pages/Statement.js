import React from 'react'
import Banner from '../components/Banner'
import TitleText from '../components/TitleText'

import { Card } from 'antd'

import { general } from '../images'
const { churchWide } = general

const statementData = [
  {
    title: 'We Believe',
    text:
      `We believe that the whole Bible, comprising both Old and New Testaments, was written under the inspiration of God. The Bible is the basis of our faith, and a guide for our lives.

      We believe that God is the everlasting Triune God, who is united in the Father, the Son and the Holy Spirit, who are equal in power and position.
      
      We believe that man was made in the image of God, but bear the consequence of Adam’s Original Sin, which is spiritual separation from God. All men are thus born with sin, and are sinful in their speech, conduct and thought.
      
      We believe that Jesus Christ is the only Son of God, born through the virgin Mary, conceived of the Holy Spirit, and who possesses the qualities of both God and man.
      
      We believe that Jesus Christ our Lord died on the cross for our sins. Whosoever confesses and repents of his sins, believing that the blood of Jesus can take away sin, will be called righteous before God.
      
      We believe that our Lord Jesus Christ was crucified, died, and on the third day, he rose from the dead. He ascended to heaven, and now executes the duty of High Priest before God and prays for us.
      
      We believe that by God’s grace we shall be saved, through faith, and not through works. Those who repent of their sins and accept Jesus Christ as their personal Saviour, will be born again through the Holy Spirit, and become children of God.
      
      We believe that our Lord Jesus Christ will come again in person to judge the world. Those who are saved will be with Him eternally, and those who are not saved will be punished forever.
      
      We believe that Christ instituted the twin Ordinances of Baptism, and The Lord’s Supper, for all believers. He commanded the churches to observe these two ordinances until His return.
      
      We believe that those who are saved by the blood of Jesus Christ are united with Him in spirit. We also believe that the church of Christ should keep to the purity of faith in accordance to biblical doctrine, and be committed to the task of accomplishing the Great Commission.`
    ,
    language: 'english',
  },
  {
    title: '信仰宣言',
    text:
      `我们相信，新旧约全部的圣经乃神所默示, 是我们信仰与生活的 无上准则。

      我们相信圣父、圣子、圣灵、乃三位一体，同位同权，独一的永生神。
      
      我们相信, 世人乃照神形象而造成,惟因亚当犯罪而堕落,故我们也犯了罪,招致肉身和灵性的死亡,与神隔绝.且人类既巳带罪而生, 故在言行思想上俱皆有罪.
      
      我们相信，神独生儿子耶稣基督，乃因圣灵感孕，由童贞女马利亚所生，有完全之神、人二性。
      
      我们相信，主耶稣基督依照圣经所载，为我们之罪受死于十字架；凡悔改认罪信靠耶稣宝血除罪之人，在神面前皆得称义。
      
      我们相信，我主耶稣基督被钉, 受死,第三日复活，如今在神面前执行大祭司职份，为我们代求。
      
      我们相信，得救乃本乎恩，亦因着信，而非出于行为。凡悔改接受耶稣基督为个人的之救主者，即藉圣灵重生，成为神的儿女。
      
      我们相信，我主耶稣基督必再亲身降临，审判全地。我们相信，得救者，身体将来复活，享受永远的福乐。灭亡者，也必复活，却 受永刑。
      
      我们相信，基督为信者设立浸礼及主餐，吩咐教会施行此二礼仪，至主再来。
      
      我们相信，凡靠基督宝血得蒙救赎之人，才能在圣灵里与基督真正的联合，且信基督教会应依照圣经教训在信仰与生活上持守纯洁，并委身于完成主的大使命。`
    ,
    language: 'english',
  }
]

const sectionTitleStyle = {
  display: 'flex',
  justifyContent: 'center',
}

const Statement = () => {
  return (
    <div>
      <Banner titleStyle={{ textAlign: 'justify' }} imageTitlePairs={[{ title: 'Statement of Faith', image: churchWide }]} />
      <div className='all-statement-container'>
        {statementData.map((statement, i) =>
          <div key={i} className='statement-container'>
            <TitleText
              titleUnderlineStyle={sectionTitleStyle}
              title={statement.title}
              underlineAlign='center'
            ></TitleText>
            <div className='statement'>
              {statement.text}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Statement

import React from 'react'
import { useSelector } from 'react-redux'
import ReactMarkdown from 'react-markdown'
import gfm from 'remark-gfm'

import Banner from '../components-reusable/Banner'

import { getWord } from '../helper-files/translate'

import { general } from '../helper-files/images'
const { lock, pdpaEnquiry } = general

const markdown = `
# Dear members, friends and visitors,

The Singapore government has
enacted the Personal Data Privacy Act (2012), and as such, we would
like to inform you of a few things as you visit us both online and
offline, in our many places of worship. God has certainly worked
wonders in these last few years, and we can be found in many places,
such as:

- at our physical location – 45 Thomson Road, Singapore 307584, or
- at our virtual location – http://www.trbc.org.sg, or
- online [1] on Facebook at these various groups [2], with the group IC noted in brackets
  - https://www.facebook.com/groups/TRBC.Singapore/ [May-Ann – EC, Chong Nim – SS, Isaac Wong – TC]
  - https://www.facebook.com/groups/trbc.eng/ [May-Ann, EC]
  - https://www.facebook.com/groups/31988768931/ [Pastor Goh PG, TC]
  - https://www.facebook.com/groups/cec.trbc/ [May-Ann, EC]

This document serves as TRBC’s data protection policies and practices document. We have prepared this document to let you know of our personal data privacy policies, and how we are managing your personal information. We will update the date stamp if there have been changes made.

If you have any complaints, please direct them to the TRBC Secretary Mr Isaac Wong, c/o the TRBC PDPA Committee at privacy@trbc.org.sg, or call +65-62562277 to leave a message for him.

Your servants in Christ,  
**TRBC PDPA Committee 2015**  
Isaac Wong (Teochew/Chinese Congregation)  
Beverly Poon (Sunset Congregation)  
Yeo Chong Nim (Sunset Congregation)  
Toh Minghui (English Congregation)  
Lim May-Ann (English Congregation)  
&nbsp; 

**This document was last updated on 28 Mar 2015.**

&nbsp; 

## 1. Consent Obligation

We will only collect, use or disclose personal data for purposes for which an individual has given his or her consent. This consent can be implicit (e.g. registration for a camp or other activity where personal data has been requested), or explicit (e.g. we inform you that we are collecting information for an event/activity.)

In all cases, we allow you to withdraw consent, with reasonable notice, and inform you of the likely consequences of withdrawal (e.g. if you withhold your passport number, then we can’t register you for a mission trip visa.) Upon withdrawal of consent to the collection, use or disclosure for any purpose, we will cease the collection, use or disclosure of the individual’s personal data.

## 2. Purpose Limitation Obligation

As an organisation, TRBC may collect, use or disclose personal data about an individual for the purposes that a reasonable person would consider appropriate in the circumstances and for which the individual has given consent. (e.g. like in the example above, if you sign up for a camp or an event, then we may use your mobile phone number to contact you.)

## 3. Notification Obligation

Wherever possible, we will notify you of the purposes for which TRBC is intending to collect, use or disclose their personal data on or before such collection, use or disclosure of personal data. (e.g. we use CCTV cameras for security and surveillance reasons, and there is a sign at all entrances of the church to inform you that you are being recorded for those purposes.)

## 4. Access and Correction Obligation

If you so request, your personal data and information about the ways in which your personal data has been or may have been used or disclosed may be provided to you, within a year of the request. However, we reserve the right to refuse individual access to your own data under the following circumstances: if the provision of your personal data or other information could reasonably be expected to:

cause immediate or grave harm to the individual’s safety or physical or mental health;
threaten the safety or physical or mental health of another individual;
reveal personal data about another individual;
reveal the identity of another individual who has provided the personal data, and the individual has not consented to the disclosure of his or her identity; or
be contrary to national interest.
If so requested, TRBC will also correct any error or omission in an individual’s personal data upon request, within a year of the request, unless it is deemed by the Deacons’ Board that on reasonable grounds that the correction should not be made. With your consent, we will also send the corrected data to other organisations to which your personal data was disclosed within a year before the correction is made (or, with your consent, only to selected organisations).

## 5. Accuracy Obligation

We will make all effort to ensure that all personal data collected by or on behalf of TRBC is accurate and complete, if it is likely to be used to make a decision that affects the individual, or if it is likely to be disclosed to another organisation.

## 6. Protection Obligation

We have made reasonable security arrangements to protect the personal data that TRBC possesses or controls to prevent unauthorised access, collection, use, disclosure or similar risks.

## 7. Retention Limitation Obligation

We will cease retention of personal data or remove the means by which the personal data can be associated with particular individuals when it is no longer necessary for any business or legal purpose.

## 8. Transfer Limitation Obligation

We rarely, if ever, transfer personal data to another country. However, if we do transfer personal data to another country, we will do so only according to the requirements prescribed under the PDPA regulations, to ensure that the standard of protection provided to the personal data so transferred will be comparable to the protection under the PDPA, unless exempted by the PDPC.

## 9. Openness Obligation

The TRBC PDPA committee will make information about TRBC’s data protection policies, practices and complaints process available on request.

## 10. Enquiry and Investigation Resolution Process

Despite our best efforts, there may be queries and a need for investigation of the violation of personal data privacy. TRBC has set out an enquiry and investigation process, which starts with contacting the Data Protection Officer at privacy@trbc.org.sg A more detailed flowchart is appended for your reference.

![](${pdpaEnquiry})

---
&nbsp;  
[1] There may be other online groups which have been set up that bear TRBC’s name, but these are not endorsed, and will not be covered under the TRBC PDPA Compliance Policies.

[2] If you wish to be endorsed, please let the TRBC PDPA Committee know via privacy@trbc.org.sg
`

const PrivacyPolicy = () => {
  const language = useSelector((state) => state.language)

  return (
    <div>
      <Banner
        imageTitlePairs={[
          {
            title: getWord('Privacy Policy', language),
            image: lock,
          },
        ]}
      />
      <div className="privacy-policy-container">
        <ReactMarkdown remarkPlugins={[gfm]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  )
}

export default PrivacyPolicy

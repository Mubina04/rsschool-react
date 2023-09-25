import { SmallCard } from '@/components'
import { homeStyles } from '@/styles'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { FaCheckCircle } from 'react-icons/fa'

const AboutUs = ({ dir }: any) => {
  const { t } = useTranslation();

  return (
    <div>
      <div className={`container ${homeStyles.why_us}`}>
        <div className={homeStyles.why_us__left_side}>
          <span className={homeStyles.section_name}>{t("HOME.ABOUT_US_SECOND.SECTION_NAME")}</span>
          <h2 className={homeStyles.section_heading}>
            {t("HOME.ABOUT_US_SECOND.SUBTITLE_1")}
            <span className={homeStyles.blue_text}> 25+</span>
            {t("HOME.ABOUT_US_SECOND.SUBTITLE_2")}

          </h2>
          <ul className={homeStyles.about_us_list}>
            <li><FaCheckCircle className={homeStyles.about_us_list__icons} />{t("HOME.ABOUT_US_SECOND.LIST_ITEM_1")}</li>
            <li><FaCheckCircle className={homeStyles.about_us_list__icons} />{t("HOME.ABOUT_US_SECOND.LIST_ITEM_2")}</li>
            <li><FaCheckCircle className={homeStyles.about_us_list__icons} />{t("HOME.ABOUT_US_SECOND.LIST_ITEM_3")}</li>
            <li><FaCheckCircle className={homeStyles.about_us_list__icons} />{t("HOME.ABOUT_US_SECOND.LIST_ITEM_4")}</li>
          </ul>
        </div>
        <div className={homeStyles.why_us__right_side}>
          <img src="/images/Images.png" alt="Collague" />
        </div>
      </div>
      <div className={`container ${homeStyles.about_us_second}`}>
        <h2 className={homeStyles.section_heading}>{t("HOME.ABOUT_US_SECOND.SUBTITLE_3")}</h2>
        <div className='flex  flex-wrap lg:flex-nowrap justify-center gap-5 mt-10 mb-14 lg:my-[65px]'>
          <SmallCard title_num={50} source_img="/images/teacher01.svg" title_img="teacher's icon" title={t("HOME.ABOUT_US_SECOND.CARD_TITLE_1")} />
          <SmallCard title_num={1000} source_img="/images/notepad.svg" title_img="icon" title={t("HOME.ABOUT_US_SECOND.CARD_TITLE_2")}  />
          <SmallCard title_num={25} source_img="/images/arrow-up.svg" title_img=" chart's icon" title={t("HOME.ABOUT_US_SECOND.CARD_TITLE_3")} />
          <SmallCard title_num={10} source_img="/images/user.svg" title_img="user's icon" title={t("HOME.ABOUT_US_SECOND.CARD_TITLE_4")} />

        </div>
      </div>
    </div>
  )
}

export default AboutUs
import { homeStyles } from '@/styles'
import React from 'react'
import { useTranslation } from 'react-i18next'

const News = ({dir}:any) => {
    const {t} = useTranslation()
    return (
        <div className={homeStyles.news} id='news'>
            <div className='text-center container'>
                <span className={homeStyles.section_name}>{t("HOME.NEWS.SECTION_NAME")}</span>
                <h2 className={homeStyles.section_heading}>{t("HOME.NEWS.SUBTITLE")}</h2>
                <div className={homeStyles.news_line}></div>
            </div>
            <div className={`container ${homeStyles.news__wrapper}`}></div>
        </div>
    )
}

export default News
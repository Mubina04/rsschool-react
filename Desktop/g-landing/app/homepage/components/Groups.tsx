import { homeStyles } from '@/styles'
import React from 'react'
import { FaArrowDown } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'


const Groups = ({ dir }: any) => {
    const { t } = useTranslation()
    return (
        <div id='about-us' className={homeStyles.groups}>
            <div className={`container ${homeStyles.groups_wrapper}`}>
                <div className={homeStyles.group_left_side}>
                    <img src="/images/friends.png" alt="freinds" />
                </div>
                <div className={homeStyles.group_right_side}>

                    <span className={homeStyles.section_name}>{t('HOME.ABOUT_US.SECTION_NAME')}</span>

                    <h2 className={homeStyles.section_heading}>{t('HOME.ABOUT_US.SUBTITLE')}</h2>
                    <p className={homeStyles.group_right_side__paragraph}>{t('HOME.ABOUT_US.TEXT')}</p>
                    <a href="https://docs.google.com/presentation/d/1245FC3eohBuy0YM6Qlaxf6HJCW6hSCQw/export/pdf" className={homeStyles.btn}>
                        <FaArrowDown className={homeStyles.arrow_down} />
                        {t('HOME.ABOUT_US.BUTTON')}
                    </a>


                </div>
            </div>
        </div>
    )
}

export default Groups
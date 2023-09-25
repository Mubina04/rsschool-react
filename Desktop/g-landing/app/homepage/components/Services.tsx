import { Card } from '@/components'
import { homeStyles } from '@/styles'
import React from 'react'
import { useTranslation } from 'react-i18next'

const Services = ({ dir }: any) => {
    const { t } = useTranslation()
    return (
        <div className={`container ${homeStyles.services}`} id='services'>
            <div className={homeStyles.services__heading}>
                <span className={homeStyles.section_name}>{t("HOME.SERVICES.SECTION_NAME")}</span>
                <h2 className={homeStyles.section_heading}>{t("HOME.SERVICES.SUBTITLE")}</h2>
            </div>
            <div className={homeStyles.services_wrapper}>
                <Card card_links={t("HOME.SERVICES.CARD_LINK")} card_id='for_resident' icon_source='/images/frame_1.svg' icon_title="icon" card_title={t("HOME.SERVICES.CARD_TITLE_1")} rates_link="/park_rates" />
                <Card card_links={t("HOME.SERVICES.CARD_LINK")} card_id='for_production' icon_source='/images/frame_12.svg' icon_title="icon" card_title={t("HOME.SERVICES.CARD_TITLE_2")}  rates_link='/product' />
                <Card card_links={t("HOME.SERVICES.CARD_LINK")} card_id="for_wholesale" icon_source='/images/frame_13.svg' icon_title="icon" card_title={t("HOME.SERVICES.CARD_TITLE_3")}  rates_link='/whole_sale' />
                <Card card_links={t("HOME.SERVICES.CARD_LINK")} card_id="for_catering" icon_source='/images/frame_14.svg' icon_title="icon"card_title={t("HOME.SERVICES.CARD_TITLE_4")} rates_link='/public_catering' />
                <Card card_links={t("HOME.SERVICES.CARD_LINK")} card_id="for_enterprises" icon_source='/images/frame_15.svg' icon_title="icon" card_title={t("HOME.SERVICES.CARD_TITLE_5")} rates_link='/services_table' />
                <Card card_links={t("HOME.SERVICES.CARD_LINK")} card_id="for_other_services" icon_source='/images/frame_1.svg' icon_title="icon"card_title={t("HOME.SERVICES.CARD_TITLE_6")} rates_link='/other_services' />
            </div>

        </div>
    )
}

export default Services
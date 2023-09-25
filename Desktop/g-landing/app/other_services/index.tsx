import { Table } from '@/components'
import React from 'react'
import { homeStyles } from '@/styles'
import { useTranslation } from 'react-i18next'

const OtherServices = () => {
    const { t } = useTranslation()

    return (
       <div className={homeStyles.tables_wrapper}>
         <div className='container py-20'>
            <div>
                <div className='my-14'>
                    <span className={homeStyles.section_name}>{t("HOME.SERVICES.SECTION_NAME")}</span>
                    <h2 className={`${homeStyles.section_heading} mt-6`}>{t("HOME.OTHER_SERVICES_TABLE.TARIFF_NAME")}</h2>
                </div>
                <p className={homeStyles.rates_text}>{t("HOME.TARIFFS.TARIFF_SENTENCE")}</p>
            </div>
            <div className='overflow-x-auto'>
            <table className='min-w-full bg-white'>
                <thead className='text-lg'>
                    <tr className='border border-zinc-300 p-4'>
                        <th className='p-4 border border-zinc-300'>No</th>
                        <th className='p-4 border border-zinc-300'>{t("HOME.OTHER_SERVICES_TABLE.THEAD_1")}</th>
                        <th className='p-4 border border-zinc-300'>{t("HOME.OTHER_SERVICES_TABLE.THEAD_2")}</th>
                    </tr>
                </thead>
                <tbody className='text-lg table-auto'>
                    <tr className='border border-zinc-300 p-4'>
                        <td  className='p-4 border border-zinc-300'>1</td>
                        <td  className='p-4 border border-zinc-300'>{t("HOME.OTHER_SERVICES_TABLE.DATA_1_1")}</td>
                        <td  className='p-4 border border-zinc-300'>{t("HOME.OTHER_SERVICES_TABLE.DATA_1_2")}</td>
                    </tr>
                    <tr className='border border-zinc-300 p-4'>
                        <td  className='p-4 border border-zinc-300'>2</td>
                        <td  className='p-4 border border-zinc-300'>{t("HOME.OTHER_SERVICES_TABLE.DATA_2_1")}</td>
                        <td  className='p-4 border border-zinc-300'>{t("HOME.OTHER_SERVICES_TABLE.DATA_2_2")}</td>
                    </tr>
                    <tr className='border border-zinc-300 p-4'>
                        <td  className='p-4 border border-zinc-300'>3</td>
                        <td  className='p-4 border border-zinc-300'>{t("HOME.OTHER_SERVICES_TABLE.DATA_3_1")}</td>
                        <td  className='p-4 border border-zinc-300'>{t("HOME.OTHER_SERVICES_TABLE.DATA_3_2")}</td>
                    </tr>
                    <tr className='border border-zinc-300 p-4'>
                        <td  className='p-4 border border-zinc-300'>4</td>
                        <td  className='p-4 border border-zinc-300'>{t("HOME.OTHER_SERVICES_TABLE.DATA_4_1")}</td>
                        <td  className='p-4 border border-zinc-300'>{t("HOME.OTHER_SERVICES_TABLE.DATA_4_2")}</td>
                    </tr>
                    <tr className='border border-zinc-300 p-4'>
                        <td  className='p-4 border border-zinc-300'>5</td>
                        <td  className='p-4 border border-zinc-300'>{t("HOME.OTHER_SERVICES_TABLE.DATA_5_1")}</td>
                        <td  className='p-4 border border-zinc-300'>{t("HOME.OTHER_SERVICES_TABLE.DATA_5_2")}</td>
                    </tr>
                    <tr className='border border-zinc-300 p-4'>
                        <td  className='p-4 border border-zinc-300'>6</td>
                        <td  className='p-4 border border-zinc-300'>{t("HOME.OTHER_SERVICES_TABLE.DATA_6_1")}</td>
                        <td  className='p-4 border border-zinc-300'>{t("HOME.OTHER_SERVICES_TABLE.DATA_6_2")}</td>
                    </tr>
                    <tr className='border border-zinc-300 p-4'>
                        <td  className='p-4 border border-zinc-300'>7</td>
                        <td  className='p-4 border border-zinc-300'>{t("HOME.OTHER_SERVICES_TABLE.DATA_7_1")}</td>
                        <td  className='p-4 border border-zinc-300'>{t("HOME.OTHER_SERVICES_TABLE.DATA_7_2")}</td>
                    </tr>
                    <tr className='border border-zinc-300 p-4'>
                        <td  className='p-4 border border-zinc-300'>8</td>
                        <td  className='p-4 border border-zinc-300'>{t("HOME.OTHER_SERVICES_TABLE.DATA_8_1")}</td>
                        <td  className='p-4 border border-zinc-300'>{t("HOME.OTHER_SERVICES_TABLE.DATA_8_2")}</td>
                    </tr>
                    <tr className='border border-zinc-300 p-4'>
                        <td  className='p-4 border border-zinc-300'>9</td>
                        <td  className='p-4 border border-zinc-300'>{t("HOME.OTHER_SERVICES_TABLE.DATA_9_1")}</td>
                        <td  className='p-4 border border-zinc-300'>{t("HOME.OTHER_SERVICES_TABLE.DATA_9_2")}</td>
                    </tr>
                </tbody>
            </table>
            </div>
        </div>
       </div>
    )
}

export default OtherServices
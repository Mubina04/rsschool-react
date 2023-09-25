import {homeStyles} from '@/styles'
import React, {FC, useEffect, useState} from 'react'
import {tHeaders, tBodys, tFoots} from './services_data';
import {Table} from '@/components';
import {getRates} from '@/api/getrates';
import { useTranslation } from 'react-i18next';

const ServicesTabe: FC<{ res?: any }> = ({res}) => {
	const {t} = useTranslation()
	const [rates, setRates] = useState([]);
	const [amount, setAmount] = useState([]);

	useEffect(() => {
		const rData = res?.products?.map((item: any, index: number) => {
			return [index + 1,
				item.name,
				item.get_field_1_display,
				item.get_field_2_display,
				item.get_field_3_display,
				item.get_field_4_display,
			]

		})
		setRates(rData);
		const rFoot = ["", "ИТОГО стоимость в месяц", res?.final_field_1, res?.final_field_2, res?.final_field_3, res?.final_field_4]
		setAmount([rFoot] as any)
	}, [res]);

	return (
		<div className='container py-20'>
		<div>
			<div className='my-14'>
				<span className={homeStyles.section_name}>{t("HOME.SERVICES.SECTION_NAME")}</span>
				<h2 className={`${homeStyles.section_heading} mt-6`}>{t("HOME.TARIFFS.TARIFF_TYPE_5")}</h2>
			</div>
			<p className={homeStyles.rates_text}>{t("HOME.TARIFFS.TARIFF_SENTENCE")}</p>
		</div>
		<Table headers={tHeaders} tbody={rates} tfoot={amount}/>
	</div>
	)
}

export default ServicesTabe

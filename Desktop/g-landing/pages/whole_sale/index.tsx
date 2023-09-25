import {WholeSale} from '@/app'
import {homeStyles} from '@/styles'
import React, {FC} from 'react'
import {getRates} from "@/api/getrates";
import process from "process";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const WholeSalePage: FC<{ data?: any }> = ({data}) => {
	return (
		<div className={homeStyles.tables_wrapper}>
			<WholeSale res={data}/>
		</div>
	)
}

export default WholeSalePage

export async function getServerSideProps(context: any) {
	const { locale } = context;

	try {
		const data = await getRates({id: 3}, process.env.FRONT_URL);
		return {
			props: {
				data,
				...(await serverSideTranslations(locale)),
			},
		};
	} catch (e) {
		return {
			props: {
				ok: false,
			},
		};
	}
}

import {ParkRates} from '@/app'
import {homeStyles} from '@/styles'
import React, {FC} from 'react'
import {getRates} from "@/api/getrates";
import * as process from "process";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ITParkRates: FC<{ data?: any }> = ({data}) => {

	return (
		<div className={homeStyles.tables_wrapper}>
			<ParkRates res={data} />
		</div>
	)
}

export default ITParkRates

export async function getServerSideProps(context: any) {
	const { locale } = context;

	try {
		const data = await getRates({id: 1}, process.env.FRONT_URL);
		return {
			props: {
				data,
				...(await serverSideTranslations(locale))
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

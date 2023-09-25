import { OtherServices } from '@/app';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import React from 'react'

const OtherServicesTable = () => {
  return (
    <div>
        <OtherServices/>
    </div>
  )
}
export default OtherServicesTable

export async function getServerSideProps(context: any) {
	const { locale } = context;

	try {
		return {
			props: {
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

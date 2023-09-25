import { Inter } from 'next/font/google'
import HomePage from '@/app/homepage'
import { FC } from "react";
import { getNews } from "@/api/getnews";
import process from "process";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const inter = Inter({ subsets: ['latin'] })

const Home: FC<{ data?: any }> = ({ data }) => {
	return (
		<>
			<HomePage dataNews={data} />
		</>
	)
}

export default Home;

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

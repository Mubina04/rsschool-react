import instance from ".";

export const getNews = async (
	params?: any,
	url?: string,
): Promise<any> => {
	try {
		const res = await instance.post(
			"/",
			{
				url: `/news`,
				method: "GET",
			},
			{baseURL: url ?? ""},
		);
		return res.data;
	} catch (err: any) {
		throw err;
	}
};

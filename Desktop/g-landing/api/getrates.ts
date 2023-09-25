import instance from ".";

export const getRates = async (
	params?: any,
	url?: string,
): Promise<any> => {
	try {
		const res = await instance.post(
			"/",
			{
				url: `/tarif-product/${params?.id}`,
				method: "GET",
			},
			{baseURL: url ?? ""},
		);
		return res.data;
	} catch (err: any) {
		throw err;
	}
};


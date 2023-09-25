import axios from "axios";
import type {NextApiRequest, NextApiResponse} from "next";
import env from "utils/env";
import * as process from "process";

export default async function handler(
	req: NextApiRequest,
	res: NextApiResponse,
) {
	// console.log();
	delete req.headers.host;
	delete req.headers.origin;
	delete req.headers.referer;

	const method = req.body.method;
	const url = req.body.url;
	const body = req.body?.body;

	const token = {
		"api-token": env.token,
		Authorization: req.headers["authorization"],
	};

	try {
		let data;
		switch (method) {
			case "POST":
				data = await axios.post(`${env.api}${url}`, body, {
					headers: {
						...token,
					},
				});
				break;
			case "PUT":
				data = await axios.put(`${env.api}${url}`, body, {
					headers: {
						...token,
					},
				});
				break;
			case "DELETE":
				data = await axios.delete(`${env.api}${url}`, {
					headers: {
						...token,
					},
					data: body,
				});
				break;
			case "GET":
			default:
				data = await axios.get(`${env.api}${url}`, {
					headers: {...token},
					data: body,
				});
				break;
		}
		res.status(data?.status).json(data.data);
	} catch (e: any) {
		if (
			e.message === 'Invalid character in header content ["user-authorization"]'
		) {
			return res
				.status(401)
				.json({ok: false, status_code: 401, message: "Token error"});
		} else res.status(e.response?.status || 500).json(e.response?.data);
	}
}

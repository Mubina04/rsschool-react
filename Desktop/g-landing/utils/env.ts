import * as process from "process";

export default {
	api: process.env.NEXT_PUBLIC_BASE_URL,
	token: process.env.NEXT_PUBLIC_API_TOKEN,
};

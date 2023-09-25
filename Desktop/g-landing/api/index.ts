import axios from "axios";

const instance = axios.create({
	baseURL: `/api/v1`,
});

instance.interceptors.request.use(
	async (config: any) => {
		config.meta = config.meta || {};
		config.meta.requestStartedAt = new Date().getTime();
		config.headers = {
			"Content-Type": "application/json",
			...config.headers,
			timeout: 10000,
		};
		return config;
	},
	(error) => Promise.reject(error.response),
);

instance.interceptors.response.use(
	(response: any) => {
		return response;
	},
	(error) => {
		if (error.response?.status === 401) {
			try {
			} catch (e) {
			}
		}
		return Promise.reject(error.response);
	},
);

export default instance;

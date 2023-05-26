import axios, { AxiosResponse, Method } from 'axios'

export const axiosFetcher = async <T>(url: string, method: Method = 'GET', data?: any): Promise<T> => {
	const response: AxiosResponse<T> = await axios({
		url,
		method,
		data,
	})

	return response.data
}

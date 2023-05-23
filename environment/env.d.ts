/* eslint-disable no-unused-vars */
namespace NodeJS {
	interface ProcessEnv {
		NEXT_PUBLIC_API_URL: string

		// firebase
		NEXT_PUBLIC_FB_API_KEY: string;
		NEXT_PUBLIC_FB_AUTH_DOMAIN: string
		NEXT_PUBLIC_FB_PROJECT_ID: string
		NEXT_PUBLIC_FB_STORAGE_BUCKET: string
		NEXT_PUBLIC_FB_MSG_SENDER_ID: string
		NEXT_PUBLIC_FB_APP_ID: string
	}
}

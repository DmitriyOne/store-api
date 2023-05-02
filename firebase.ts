import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
	apiKey: 'AIzaSyAY2XHHVix_89j0Nl-TX30-1KY1ulReJEE',
	authDomain: process.env.FB_AUTH_DOMAIN,
	projectId: process.env.FB_PROJECT_ID,
	storageBucket: process.env.FB_STORAGE_BUCKET,
	messagingSenderId: process.env.FB_MSG_SENDER_ID,
	appId: process.env.FB_APP_ID,
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

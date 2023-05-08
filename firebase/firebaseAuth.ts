import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
	apiKey: 'AIzaSyAY2XHHVix_89j0Nl-TX30-1KY1ulReJEE',
	authDomain: 'store-api-4baea.firebaseapp.com',
	projectId: 'store-api-4baea',
	storageBucket: 'store-api-4baea.appspot.com',
	messagingSenderId: '209633066913',
	appId: '1:209633066913:web:c15cbc19b2b5b7aa5395e0',
}

export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const storage = getStorage(app)

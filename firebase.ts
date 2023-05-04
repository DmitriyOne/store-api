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

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const storage = getStorage(app)











/*
// Custom Hook
export function useAuth2() {
	const [currentUser, setCurrentUser] = useState<any>()

	useEffect(() => {
		const unsub = onAuthStateChanged(auth, user => setCurrentUser(user))
		return unsub
	}, [])

	return currentUser
}

// Storage
export async function upload(file: any, currentUser: any, setLoading: any) {
	const fileRef = ref(storage, file.name + '.jpg')

	setLoading(true)

	console.log(currentUser)
	console.log(file)

	const snapshot = await uploadBytes(fileRef, file)
	const photoURL = await getDownloadURL(fileRef)

	updateProfile(currentUser, { photoURL }).then((e) => {
		console.log(e)
	})

	setLoading(false)
}
*/

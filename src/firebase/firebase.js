// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import 'firebase/analytics'
import 'firebase/database'
import 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

const database = firebase.database()
const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export { firebase, googleAuthProvider, database as default }

// const logExpenses = (snapshot) => {
//   const expenses = []

//   snapshot.forEach((childSnapshot) => {
//     expenses.push({
//       id: childSnapshot.key,
//       ...childSnapshot.val(),
//     })
//   })

//   console.log(expenses)
// }

// database.ref('expenses').on('value', logExpenses)

// database.ref('expenses').on('child_removed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val())
// })

// database.ref('expenses').once('value').then(logExpenses)

// const expenses = [
//   {
//     description: 'Rent',
//     note: 'January',
//     amount: 150000,
//     createdAt: Date.now(),
//   },
//   {
//     description: 'Car',
//     note: 'January',
//     amount: 50000,
//     createdAt: Date.now(),
//   },
//   {
//     description: 'Insurance',
//     note: 'January',
//     amount: 15000,
//     createdAt: Date.now(),
//   },
// ]

// expenses.forEach((expense) => {
//   database.ref('expenses').push(expense)
// })

// const onValueChange = database.ref().on('value', (snapshot) => {
//   const value = snapshot.val()
//   console.log(
//     `${value?.name} is a ${value?.job?.title} at ${value?.job?.company}.`
//   )
// })

// const runner = async () => {
//   try {
//     const snapshot = await database.ref().once('value')
//     const value = snapshot.val()
//     console.log(value)
//   } catch (e) {
//     console.log('error fetching data', e)
//   }
// }
// runner()

// database
//   .ref()
//   .set({
//     name: 'Curtis Bridges',
//     age: 47,
//     stressLevel: 6,
//     job: {
//       title: 'Software Developer',
//       company: 'Google',
//     },
//     location: {
//       city: 'Auburn',
//       country: 'United States',
//     },
//   })
//   .then(() => {
//     console.log('Data saved')
//   })
//   .catch((e) => {
//     console.err('user info write failed', e)
//   })

// database.ref().update({
//   'job/company': 'Amazon',
//   stressLevel: 9,
//   'location/city': 'Seattle',
// })

// // attributes
// database
//   .ref('attrbiutes')
//   .set({
//     height: 72,
//     weight: 199.3,
//   })
//   .then(() => {
//     console.log('attributes saved')
//   })
//   .catch((e) => {
//     console.err('Attribute write failed', e)
//   })

// database
//   .ref('isSingle')
//   .remove()
//   .then(() => {
//     console.log('data removed')
//   })
//   .catch((e) => {
//     console.err('error removing isSingle', e)
//   })

// Firebase App (the core Firebase SDK) is always required and must be listed first
import firebase from 'firebase/app'
// If you are using v7 or any earlier version of the JS SDK, you should import firebase using namespace import
// import * as firebase from "firebase/app"

// If you enabled Analytics in your project, add the Firebase SDK for Analytics
// import 'firebase/analytics'
import 'firebase/database'

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCwk13WFKliIGWvKw0fMdNnS5vmdrItWR4',
  authDomain: 'expensify-cmb.firebaseapp.com',
  databaseURL: 'https://expensify-cmb-default-rtdb.firebaseio.com',
  projectId: 'expensify-cmb',
  storageBucket: 'expensify-cmb.appspot.com',
  messagingSenderId: '863153455799',
  appId: '1:863153455799:web:b0ad93cfe44d3969f68332',
  measurementId: 'G-E8JNT34534',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const database = firebase.database()

export { firebase, database as default }

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

// import { boot } from 'quasar/wrappers'
import firebase from 'firebase/app'

import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAw1zyJs5mnZNfxdFot0mxwob3xpe9PJVk',
  authDomain: 'auto-backoffice.firebaseapp.com',
  projectId: 'auto-backoffice',
  storageBucket: 'auto-backoffice.appspot.com',
  messagingSenderId: '1093356353709',
  appId: '1:1093356353709:web:7960202e973025a0316e24',
  measurementId: 'G-5WT64XPRV9'
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
firebase.analytics()

export const db = firebase
  .firestore()

export const auth = firebase.auth()

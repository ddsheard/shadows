import firebase from 'firebase';

importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/4.1.1/firebase-messaging.js')

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
firebase.initializeApp({
  'messagingSenderId': 'YOUR-SENDER-ID'
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

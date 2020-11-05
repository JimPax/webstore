import { initializeApp } from 'firebase';

const app = initializeApp ({
    apiKey: "AIzaSyALK9LZ4p9tEjStymFjeLEaz1SGWd5AW_E",
    authDomain: "vue-store-94b2a.firebaseapp.com",
    databaseURL: "https://vue-store-94b2a.firebaseio.com",
    projectId: "vue-store-94b2a",
    storageBucket: "vue-store-94b2a.appspot.com",
    messagingSenderId: "791672888349",
    appId: "1:791672888349:web:7400d15a426f492d31baf4",
    measurementId: "G-W5QZB0EMJ4"
});

export const db = app.database();

export const productsRef = db.ref('products');
import {initializeApp} from 'firebase/app';


export function firebaseConfig (){
    initializeApp({
        apiKey:'',
        authDomain:'',
        databaseURL:'',
        proejctID:'',
        storageBucket:'',
        messagingSenderId:'',
        appId:'',
        measurementId:''
    })
}
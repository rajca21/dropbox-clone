import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBLNsMaz2akzf-NMgIyhvJgbSLiQB7NCB4',
  authDomain: 'dropbox-2011c.firebaseapp.com',
  projectId: 'dropbox-2011c',
  storageBucket: 'dropbox-2011c.appspot.com',
  messagingSenderId: '700648372086',
  appId: '1:700648372086:web:de9a116b0acee0d373ac57',
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage };

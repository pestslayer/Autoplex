
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { ReCaptchaEnterpriseProvider, initializeAppCheck } from "firebase/app-check";

const firebaseConfig = {
  apiKey: "AIzaSyCu-_jxRJgOYaU7ts3BG4hTXLtL4WwKM5E",
  authDomain: "autoplex-d9f3d.firebaseapp.com",
  projectId: "autoplex-d9f3d",
  storageBucket: "autoplex-d9f3d.appspot.com",
  messagingSenderId: "891335982011",
  appId: "1:891335982011:web:a4c89ff22cf1102573229e",
  measurementId: "G-PTN3XETBR8"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const appCheck = initializeAppCheck(app, {
    provider: new ReCaptchaEnterpriseProvider()
})
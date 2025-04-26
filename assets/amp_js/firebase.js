
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.6.0/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/11.6.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDo9IkyF4FFGzuaVuGSnn3Q5nZMvlnoXDk",

  authDomain: "amplivista-landing-page.firebaseapp.com",

  projectId: "amplivista-landing-page",

  storageBucket: "amplivista-landing-page.appspot.com",

  messagingSenderId: "915033881576",

  appId: "1:915033881576:web:6e6d801c5a5f13f99e425d",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

// main form start

const digitalMarketingForm = document.getElementById(
  "digitalMarketingForm"
);

digitalMarketingForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let Form_type = document.getElementsByClassName("Form_type")[0].value;
  let Name = document.getElementsByClassName("Name")[0].value;

  let Email = document.getElementsByClassName("Email")[0].value;

  let Phone = document.getElementsByClassName("Phone")[0].value;

  let Website = document.getElementsByClassName("Website")[0].value;

  let Message = document.getElementsByClassName("Message")[0].value;

  try {
    await addDoc(collection(db, "web"), {
      Form_type,

      Name,

      Email,

      Phone,

      Website,

      Message,

      timestamp: new Date(),
    });

    window.location.href =
      "https://amplivista.com/search-engine-optimization-agency/thank-you.php";

    digitalMarketingForm.reset();
  } catch (err) {
    console.error("Error adding document: ", err);

    alert("Something went wrong. Check console.");
  }
});

// main form End

// popup form start

const digitalMarketingPopupForm = document.getElementById(
  "digitalMarketingPopupForm"
);

digitalMarketingPopupForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  let Form_type = document.getElementsByClassName("Form_type")[1].value;
  let Name = document.getElementsByClassName("Name")[1].value;

  let Email = document.getElementsByClassName("Email")[1].value;

  let Phone = document.getElementsByClassName("Phone")[1].value;

  let Website = document.getElementsByClassName("Website")[1].value;

  let Message = document.getElementsByClassName("Message")[1].value;

  try {
    await addDoc(collection(db, "web"), {
      Form_type,

      Name,

      Email,

      Phone,

      Website,

      Message,

      timestamp: new Date(),
    });

    window.location.href =
      "https://amplivista.com/search-engine-optimization-agency/thank-you.php";

    digitalMarketingPopupForm.reset();
  } catch (err) {
    console.error("Error adding document: ", err);

    alert("Something went wrong. Check console.");
  }
});


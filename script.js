
// const firebaseConfig = {
//   apiKey: "AIzaSyB5mQT5XTpaW8JFaQJ9nS-T8sIS66Qfxnw",
//   authDomain: "flyfish-testing.firebaseapp.com",
//   projectId: "flyfish-testing",
//   storageBucket: "flyfish-testing.appspot.com",
//   messagingSenderId: "314575144287",
//   appId: "1:314575144287:web:9f698819dc09d32d4e22ea",
//   measurementId: "G-920K7BN1TB"
// };

// Initialize Firebase
// const app = firebase.initializeApp(firebaseConfig);
// const db = getFirestore(app);

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}


// function showToast(message, isSuccess) {
//   const toast = document.getElementById("toast");
//   toast.textContent = message;
//   toast.style.backgroundColor = isSuccess ? "green" : "red";
//   toast.style.color = "white";
//   toast.style.padding = "10px";
//   toast.style.borderRadius = "5px";
//   toast.style.position = "fixed";
//   toast.style.bottom = "20px";
//   toast.style.right = "20px";
//   toast.style.display = "block";

//   setTimeout(() => {
//     toast.style.display = "none";
//   }, 3000);
// }

// // Add event listener to the button
// document.querySelector(".subscribe-button").addEventListener("click", async () => {
//   console.log('HII')
//   const emailInput = document.querySelector(".email-input");
//   const email = emailInput.value.trim();

//   // Validate email
//   if (!email || !email.includes("@")) {
//     showToast("Invalid email address", false);
//     return;
//   }

//   try {
//     // Add the email to Firestore
//     // await addDoc(collection(db, "subscribers"), { email });
//     showToast("Email added successfully!", true);
//     emailInput.value = ""; // Clear the input field
//   } catch (error) {
//     console.error("Error adding email: ", error);
//     showToast("Failed to add email", false);
//   }
// });
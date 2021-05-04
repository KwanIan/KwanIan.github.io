var firebaseConfig = {
    apiKey: "AIzaSyBd84FFQqz-oDMQXsKV6zccM7fkMU34Ng4",
    authDomain: "dk-demo-2ed83.firebaseapp.com",
    projectId: "dk-demo-2ed83",
    storageBucket: "dk-demo-2ed83.appspot.com",
    messagingSenderId: "934683045146",
    appId: "1:934683045146:web:37dd26f5e916b5ec53d0a3"
  };
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

const modal = document.querySelector(".modal");
const images = document.querySelectorAll(".gallery img");
const modalShowcase = document.querySelector(".modal-showcase");
const modalImages = document.querySelector(".modal-image");
const modalText = document.querySelector(".modal-paragraph");

images.forEach( image => {
    image.addEventListener("click", () => {
        modal.classList.add("open");
        modalShowcase.classList.add("open");

        const source = image.getAttribute("data-source");
        modalImages.src = source;

    });

    modal.addEventListener("click", (a) =>{
        if (a.target.classList.contains("modal")){
            modal.classList.remove("open");
            modalShowcase.classList.remove("open");
        }
    });
});
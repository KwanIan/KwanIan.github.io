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
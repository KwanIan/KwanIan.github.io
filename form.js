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

document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");
  
    dropZoneElement.addEventListener("click", (e) => {
      inputElement.click();
    });
  
    inputElement.addEventListener("change", (e) => {
      if (inputElement.files.length) {
        updateThumbnail(dropZoneElement, inputElement.files[0]);
      }
    });
  
    dropZoneElement.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZoneElement.classList.add("drop-zone--over");
    });
  
    ["dragleave", "dragend"].forEach((type) => {
      dropZoneElement.addEventListener(type, (e) => {
        dropZoneElement.classList.remove("drop-zone--over");
      });
    });
  
    dropZoneElement.addEventListener("drop", (e) => {
      e.preventDefault();
  
      if (e.dataTransfer.files.length) {
        inputElement.files = e.dataTransfer.files;
        updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
      }
  
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });
 
  /**
 * Updates the thumbnail on a drop zone element.
 *
 * @param {HTMLElement} dropZoneElement
 * @param {File} file
 */
function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
  
    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
      dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }
  
    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
      thumbnailElement = document.createElement("div");
      thumbnailElement.classList.add("drop-zone__thumb");
      dropZoneElement.appendChild(thumbnailElement);
    }
  
    thumbnailElement.dataset.label = file.name;
  
    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
  
      reader.readAsDataURL(file);
      reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
      };
    } else {
      thumbnailElement.style.backgroundImage = null;
    }
  }
  


document.getElementById('order-form').addEventListener('submit', submit);

function submit(ev){
    ev.preventDefault();

    var name = getInputValue('name');
    var date = getInputValue('date');
    var email = getInputValue('email');
    var details = getDetails('details');
    var submitFiles = getFiles('file');
    var firstFileName = files.name;
    
    console.log(name+"_"+date);

    console.log(details);

    var storageRefPhoto = firebase.storage().ref(name+'_'+date+'/'+ firstFileName);
    var storageRefDetails = firebase.storage().ref(name+'_'+date+'/'+ 'project_details');
    storageRefPhoto.put(submitFiles);
    storageRefDetails.putString(details);

    /* var first = file.files[0]; */

    console.log(firstFileName);

}

function getInputValue(id){
    return document.getElementById(id).value;
}

function getDetails(id){
    return document.getElementById(id).value;
}

function getFileName(id){
    return document.getElementById(id).name;
}

function getFiles(id){
    return document.getElementById(id).files[0];
}

// var decrement = document.getElementsByClassName("minus");
// var i;

// for (i = 0; i < decrement.length; i++) {
//   decrement[i].addEventListener("click", function() {
//     var $input = this.parent().find('input');
//     var count = parseInt($input.val()) - 1;
//     count = count < 1 ? 1 : count;
//     $input.val(count);
//     $input.change();
//     return false;
//   });
// }



// function documentready(function() {
//   $('.minus').click(function () {
//     var $input = $(this).parent().find('input');
//     var count = parseInt($input.val()) - 1;
//     count = count < 1 ? 1 : count;
//     $input.val(count);
//     $input.change();
//     return false;
//   });
//   $('.plus').click(function () {
//     var $input = $(this).parent().find('input');
//     $input.val(parseInt($input.val()) + 1);
//     $input.change();
//     return false;
//   });
// });
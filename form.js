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


document.getElementById('order-form').addEventListener('submit', submit);

function submit(ev){
    ev.preventDefault();

    var name = getInputValue('name');
    var email = getInputValue('email');
    var details = getInputValue('details');
    var files = getInputValue('file');
    var firstFileName = getFileName('file');

   

    var storageRef = firebase.storage().ref('Photos/'+ files.name);
    storageRef.put(files);
    /* var first = file.files[0]; */

    console.log(firstFileName);

}

function getInputValue(id){
    return document.getElementById(id).value;
}

function getFileName(id){
    return document.getElementById(id).name;
}

/* function getFiles(file){
    console.log(file.files[0].name);
    return file.files[0];
}
 */

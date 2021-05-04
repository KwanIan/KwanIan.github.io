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
    var date = getInputValue('date');
    var email = getInputValue('email');
    var details = getDetails('details');
    var files = getFiles('file');
    var firstFileName = files.name;
    
    console.log(name+"_"+date);

    console.log(details);

    var storageRefPhoto = firebase.storage().ref(name+'_'+date+'/'+ firstFileName);
    var storageRefDetails = firebase.storage().ref(name+'_'+date+'/'+ 'project_details');
    storageRefPhoto.put(files);
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


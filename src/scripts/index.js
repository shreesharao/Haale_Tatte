// Initialize Firebase
var config = {
    apiKey: "AIzaSyDBpDJGG9uhLpxZnggfkl2j1JZS1rjt_1o",
    authDomain: "haale-tatte.firebaseapp.com",
    databaseURL: "https://haale-tatte.firebaseio.com",
    storageBucket: "haale-tatte.appspot.com",
    messagingSenderId: "817311797163"
};
var app = firebase.initializeApp(config);
var database = app.database();
var auth = app.auth();
var storage = app.storage();

function intiApp() {

    AddEventListner();

}

function AddEventListner(user) {
    var submit = document.getElementById('submit');
    submit.addEventListener('click', function (e) {
        var quantity = document.getElementById('quantity').value;
        var name = document.getElementById('name').value;
        var phNumber = document.getElementById('phNumber').value;
        var address = document.getElementById('address').value;
        var time = new Date();
        var order = { Quantity: quantity, Name: name, phNumber: phNumber, Address: address, Time: time }
        AddOrderToDatabase(order);
    });

}

function AddOrderToDatabase(order) {
    var databaseRef = database.ref().child('haale-tatte');
    databaseRef.push().set(order);
}

// function CalculateTime(time) {
//     var now = new Date().getMinutes();
//     var diff = now - time;
//     console.log(diff);
//     if (diff < 0) {
//         return "An hour ago";
//     }
//     else if (diff === 0) {
//         return "Just now";
//     }
//     else {
//         return diff + " minutes ago";
//     }
// }

window.onload = function () {
    intiApp();
}

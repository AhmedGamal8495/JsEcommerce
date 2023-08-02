// Get Product data to home page 

let myRequest = new XMLHttpRequest();
myRequest.open("Get", "https://dummyjson.com/products", true);

myRequest.send();

console.log(myRequest);

var arr;
myRequest.onreadystatechange = function () {
    // console.log(myRequest.readyState);
    // console.log(myRequest.status);

    if (myRequest.status === 200 && myRequest.readyState === 4) {
        //console.log(myRequest.responseText);
        let jsData = JSON.parse(myRequest.responseText).products;
        //console.log(jsData);
        arr = jsData;
        let div = document.getElementsByClassName('content')[0];
        for (let i = 0; i < arr.length; i++) {



            div.innerHTML += `<div class="project-card">
                                    <div class="project-image">
                                        <img src="${arr[i].thumbnail}" />
                                    </div>
                                    <div class="project-info">
                                        <p class="project-category">${arr[i].brand}</p>
                                        <strong class="project-title">
                                            <span>${arr[i].title}</span>
                                            <span>${arr[i].price} $</span>
                                            <button onclick="save(${i})" class="addtocart"><i class="fas fa-cart-plus"></i></button>
                                        </strong>
                                    </div>
                                </div>
                            
                            `

        }
    }
};

function search() {
    var text = document.getElementById('ser').value;
    var div = document.getElementsByClassName('content')[0];
    div.innerHTML = "";

    for (var i = 0; i < arr.length; i++) {
        if (arr[i].title.toLowerCase().indexOf(text.toLowerCase()) > -1) {
            div.innerHTML += `<div class="project-card">
                                    <div class="project-image">
                                        <img src="${arr[i].thumbnail}" />
                                    </div>
                                    <div class="project-info">
                                        <p class="project-category">${arr[i].brand}</p>
                                        <strong class="project-title">
                                            <span>${arr[i].title}</span>
                                            <span>${arr[i].price} $</span>
                                            <button onclick="save(${i})" class="addtocart"><i class="fas fa-cart-plus"></i></button>
                                        </strong>
                                    </div>
                                </div>
                            
                            `
            //console.log("Ok");
        }


    }
}


var cart = [];
function save(index) {

    cart.push(arr[index]);

    localStorage.setItem("cart", JSON.stringify(cart));

}



var userData = []
function handelRegister() {
    userData = JSON.parse(localStorage.getItem('userData'));
    if (userData == null) {
        userData = [];
    }
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;


    if (name != null && email != null && password != null) {
        var flag= true;
        for (var i = 0; i < userData.length; i++) {
            if (email == userData[i].email) {
                // console.log(email);
                flag = false;
            }
        }
        if (flag) {
            userData.push({ 'name': name, 'email': email, 'Password': password });   
            localStorage.setItem("userData", JSON.stringify(userData));
            gotohome();
            
        }

    }

    // names.push(name);
    // localStorage.setItem('names' ,JSON.stringify(names));
    // emails.push(email);
    // localStorage.setItem('emails' ,JSON.stringify(emails));
    // passwords.push(password);
    // localStorage.setItem('passwords' ,JSON.stringify(passwords));

    // }

    return;
}

function handelLogin() {
    var emailEnteredByUser = document.getElementById('emailEnteredByUser').value;
    var passwordEnteeredByUser = document.getElementById('passwordEnteeredByUser').value;
    var email = localStorage.getItem('email');
    var password = localStorage.getItem('password');

    if (email === emailEnteredByUser && passwordEnteeredByUser === password) {
    }
    else {
        alert("Wrong!!")
    }
}
function gotohome(){
    location.href="login.html";
}

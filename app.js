let icon = document.querySelector(".icon");
let list = document.querySelector(".list");
let iconElement = document.getElementById("icn");



icon.addEventListener("click", () => {
        list.classList.toggle('active');
        if (list.classList.contains("active")) {
                iconElement.className = "fa-solid fa-xmark";
        } else {
                iconElement.className = "fa-solid fa-bars";
        }
});

let shops = document.getElementById("shops");
let reviews = document.getElementById("reviews");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contacts");

shops.addEventListener("click", () => {
        shops.style.color = "rgb(25,25,44";
        reviews.style.color = "white";
        blogs.style.color = "white";
        contacts.style.color = "white";
});
reviews.addEventListener("click", () => {
        reviews.style.color = "rgb(25,25,44)";
        shops.style.color = "white";
        blogs.style.color = "white";
        contacts.style.color = "white";
});
blogs.addEventListener("click", () => {
        reviews.style.color = "white";
        shops.style.color = "white";
        blogs.style.color = "rgb(25,25,44)";
        contacts.style.color = "white";
});
contacts.addEventListener("click", () => {
        reviews.style.color = "white";
        shops.style.color = "white";
        blogs.style.color = "white";
        contacts.style.color = "rgb(25,25,44)";
});

let crd = document.querySelectorAll(".crd");
let itempage = document.querySelector(".item-box");
let container = document.querySelector(".container");
let itemimg = document.getElementById("itemimg");
let buybtn = document.getElementById("buybtn");
let buysec = document.querySelector(".buy-sec");
let back = document.getElementById("cross");
let crossbtn = document.querySelector(".crossbtn");
let body = document.body;
let submit = document.getElementById("submit");
console.log(crd);
crd.forEach(function (curValue) {
        curValue.addEventListener("click", function () {
                itempage.style.display = "flex";
                container.style.display = "none";
                body.style.backgroundColor = "rgb(249 233 233)";

                let imgsrc = curValue.firstElementChild.src;
                itemimg.src = imgsrc;

                buybtn.addEventListener("click", () => {
                        buysec.style.display = "flex";
                });
                // back.addEventListener("click", () => {
                //         itempage.style.display = "none";
                // });
                crossbtn.addEventListener("click", () => {
                        buysec.style.display = "none";
                });
                submit.addEventListener("click", () => {
                        let name = document.getElementById("name");
                        let address = document.getElementById("address");
                        let num = document.getElementById("num");
                        if (name.value == "" && address.value == "" && num.value == "") {
                                alert("Please enter text");
                        }
                        else {
                                 alert("Your response is recorded");
                        }
                        buysec.style.display = "none";
                });
        });
});


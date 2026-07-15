const blurPhoto = document.getElementById("blurPhoto");
const button = document.getElementById("unlockButton");

button.onclick = function () {

    const pwd = prompt("Enter password");

    if (pwd === "1234") {

        blurPhoto.classList.add("hide");
        button.style.display = "none";

    } else {

        alert("Wrong password");

    }

};

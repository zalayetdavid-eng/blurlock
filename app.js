const blur = document.getElementById("blur");

blur.addEventListener("click",()=>{

    const password = prompt("Enter password");

    if(password==="1234"){

        blur.classList.add("open");

        alert("Unlocked!");

    }else{

        alert("Wrong password");

    }

});

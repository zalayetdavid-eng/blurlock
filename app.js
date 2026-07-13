const blur = document.getElementById("blur");

blur.addEventListener("click",()=>{

    const password = prompt("Enter password");

    if(password==="46140"){

        blur.classList.add("open");

        alert("Unlocked!");

    }else{

        alert("Wrong password");

    }

});

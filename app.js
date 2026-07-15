const blur=document.getElementById("blur");

blur.onclick=function(){

    const pwd=prompt("Password");

    if(pwd==="1234"){
        blur.classList.add("open");
    }else{
        alert("Wrong password");
    }

}

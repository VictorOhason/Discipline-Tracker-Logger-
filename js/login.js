document.addEventListener("DOMContentLoaded",function(event){
    document.getElementById("login").addEventListener("click",function(event){
        event.preventDefault()
        let password = document.getElementById("password").value;
        let pass = "Africanking@_16";
        if(password !== pass){
            alert("You have entered the wrong password, Try again!!")
            return;

            
        }
        sessionStorage.setItem("loggedIn","true")
        window.location.href = "index.html"
        
});
});


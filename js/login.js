// This function waits until the page is loaded before doing anything else
// This function validates password before allowing users to enter into the app
document.addEventListener("DOMContentLoaded",function(event){
    document.getElementById("login").addEventListener("click",function(event){
        event.preventDefault()
        let password = document.getElementById("password").value;

        // Hard codded password, dont share this file
        let pass = "Africanking@_16";
        if(password !== pass){
            alert("You have entered the wrong password, Try again!!")
            return;

            
        }
        sessionStorage.setItem("loggedIn","true")
        window.location.href = "index.html"
        
});
});


// This function waits until the page is loaded before doing anything else
// After the page has been loaded it authenticates the user's session
document.addEventListener('DOMContentLoaded', function(){
    let authenticated = sessionStorage.getItem("loggedIn")
    if(authenticated != "true"){
        alert("You were not authenitcated!, Login again!!")
        window.location.href = "login.html"
    }
    document.getElementById("save-button").addEventListener("click",saveToday);
    toggle_choice(
        document.getElementById("rules-row"),
        document.getElementById("t-rules")
    )

    toggle_choice(
        document.getElementById("prayer-row"),
        document.getElementById("s-prayer")
    )

    toggle_choice(
        document.getElementById("self-row"),
        document.getElementById("self-check")
    )
});

//This function grabs and saves all input from the user into vairables and makes sure important ones arent empty.
// Then it stores the user inputs as a key value pair and saves them in local storage
function saveToday(){
    let date = document.getElementById("entry-date").value
    let pnl = document.getElementById("t-pl").value
    let trading_rules = document.getElementById("t-rules").value
    
    let trading_notes = document.getElementById("notes").value
    let code_time = document.getElementById("p-hours").value
    let focus = document.getElementById("d-focus").value
    
    let topic = document.getElementById("p-topic").value
    let wake_time = document.getElementById("d-wake").value
    let prayer = document.getElementById("s-prayer").value
    let reflection = document.getElementById("s-reflect").value

    let word_count = document.getElementById("w-count").value
    let writing_topic = document.getElementById("w-topic").value
    let self_check = document.getElementById("self-check").value
    let daily_notes = document.getElementById("misc-notes").value
    let dated_notes = document.getElementById("misc-date").value

    if (!date || !self_check || !prayer ||!wake_time || !focus){
        alert("Some fields are missing, please check and fil them in!!")
        return;
    }

        let entry ={
            date: date,
            pnl: pnl,
            trading_rules: trading_rules,

            trading_notes: trading_notes,
            code_time: code_time,
            topic: topic,

            wake_time: wake_time,
            prayer: prayer,
            reflection: reflection,

            word_count: word_count,
            writing_topic: writing_topic,
            self_check: self_check,

            daily_notes: daily_notes,
            dated_notes: dated_notes,
            focus: focus,
        }
        console.log("Saving entry:", entry)
    localStorage.setItem(date, JSON.stringify(entry))
    console.log("saved to key:", date)
};

// This functin toggles the choice for the button/input container found in;
// t-rules
// s-prayer
// self-check
function toggle_choice(button_container, update_input){
    let button1 = document.createElement('button')
    let button2 = document.createElement('button')
    button1.textContent = "Yes"
    button2.textContent = "No"
    button_container.appendChild(button1)
    button_container.appendChild(button2)

    button1.classList.add("toggle-btn")
    button2.classList.add("toggle-btn")

    button1.addEventListener("click", function(){
        update_input.value = "Yes"
        button1.classList.add("active")
        button2.classList.remove("active")
    });
    button2.addEventListener("click", function(){
        update_input.value = "No"
        button1.classList.remove("active")
        button2.classList.add("active")
    });
};
function sendEmail() {
    const templateParams = {
        name: document.querySelector("#fname").value,
        email: document.querySelector("#emailBox").value,
        message: document.querySelector("#message").value,
    };

    emailjs.send("service_flxg99p", "template_me3w819", templateParams).then(
        ()=> alert("Email sent!").catch(()=>alert("Email not sent."))
    )
}

function toggleDiv() {
    const elements = document.querySelectorAll(".hiddenProjectCard");
    elements.forEach(x => {
        if (x.style.display === "none" || x.style.display === "") {
            x.style.display = "block";
        } else {
            x.style.display = "none";
        }
    });
}

// function toggleDivById() {
//     var x = document.getElementsByClassName("hiddenDevLogCard")[0]; // Access the first element
//     if (x) { // Check if the element was found
//         if (x.style.display === "none" || x.style.display === "") {
//             x.style.display = "block"; // Show the div
//         } else {
//             x.style.display = "none"; // Hide the div
//         }
//     }
// }
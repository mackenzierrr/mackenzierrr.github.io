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
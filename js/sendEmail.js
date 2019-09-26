function sendEmail(contactForm) {
    emailjs.send("gmail", "back2nature", {
            "from_name": contactForm.name.value,
            "from_email": contactForm.emailaddress.value,
            "queries": contactForm.queries.value,
        })
        .then(
            function(response) {
                console.log("SUCCESS", response);
            },
            function(error) {
                console.log("FAILED", error);
            })
    return false;
}

// Change text inside send button on submit
    var send = document.getElementById('submit_button');
    if(send) {
        send.onclick = function () {
            this.innerHTML='SENT';
            this.style.color="#17a2ba";
            this.style.fontSize="16px";
            this.style.backgroundColor="#fff";
        }
    }
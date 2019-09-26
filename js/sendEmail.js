
function sendEmail(contactForm){
    emailjs.send ("outlook","back2nature",{
        "from_name":contactForm.name.value,
        "from_email":contactForm.emailaddress.value,
        "queries":contactForm.comments.value,
    })
.then (
    function(response){
        console.log("SUCCESS", response);
    },
    function(error){
        console.log("FAILED", error);
    });
}
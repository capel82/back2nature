
function sendEmail(contactForm){
    emailjs.send ("gmail","back2nature",{
        "from_name":contactForm.name.value,
        "from_email":contactForm.emailaddress.value,
        "queries":contactForm.queries.value,
    })
.then (
    function(response){
        console.log("SUCCESS", response);
    },
    function(error){
        console.log("FAILED", error);
    });
    return false;
}
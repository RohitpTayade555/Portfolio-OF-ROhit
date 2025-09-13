// var typed = new typed("#typed" , {
// strings :  ["Rohit Tayade", "a Web Developer", "a Learner"], 
// typeSpeed: 80 ,
// backSpeed: 51,
// loop:true
        window.alert( "Wellcome To MY website !!...." );
// });
var typed = new Typed("#typed", {
    strings: ["Rohit Tayade", "a Web Developer","a software devloper " ,"a Learner","Rohit Tayade"],
    typeSpeed: 80,
    backSpeed: 50,
    loop: true
});


// Hair me / talk me

  function openLinkedIn() {
    window.open("https://www.linkedin.com/in/rohit-tayade-117800312", "_blank");
  }
    
document.getElementById("mybtnTo").addEventListener("click", function() {
  let confirmSend = confirm("Do you want to send an email to Rohit?");
  
  if (confirmSend) {
    // Gmail compose direct open
    window.open(
      "https://mail.google.com/mail/?view=cm&fs=1&to=rohitptayde555@gmail.com&su=Let's%20Connect&body=Hi%20Rohit,",
      "_blank"
    );
  } else {
    alert("Okay! Email not opened.");
  }
});

// toast
const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // Stop reload

  // Show toast
  toast.innerHTML = "✅ Thank you for contacting me!";
  toast.className = "show";

  // Hide after 3 seconds
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 3000);

  // Reset form
  form.reset();
});





 






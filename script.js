const whatsappNumber = "+917387905536";

document.querySelectorAll(".btn-sm").forEach((button) => {
  button.addEventListener("click", function () {
    const imageUrl = this.getAttribute("data-image");
    const message = encodeURIComponent(
      `Hi, I'm interested in this shirt: ${imageUrl}`
    );
    window.location.href = `https://wa.me/${whatsappNumber}?text=${message}`;
  });
});

AOS.init({
  duration: 1200,
  easing: "ease-in-out",
  once: false,
  offset: 200,
});

const btn = document.getElementById("contactBtn");
document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    btn.value = "Sending...";

    const customerserviceID = "owner@123";
    const customertemplateID = "customertemplate";

    emailjs.sendForm(customerserviceID, customertemplateID, this).then(
      () => {
        Swal.fire({
          title: "Sent!",
          text: "Thanks for contacting us! :)",
          icon: "success",
          confirmButtonText: "Ok!",
          confirmButtonColor: "#22bb33",
        });
        document.getElementById("contactForm").reset();
      },
      () => {
        Swal.fire({
          title: "Error!",
          text: "Something went wrong! :(",
          icon: "error",
          confirmButtonText: "Ok!",
          confirmButtonColor: "#bb2124",
        });
        document.getElementById("contactForm").reset();
      }
    );

    const ownerserviceID = "owner@123";
    const ownertemplateID = "ownertemplate";

    emailjs.sendForm(ownerserviceID, ownertemplateID, this).then(
      () => {
        console.log("Sent!");
      },
      (err) => {
        console.log(JSON.stringify(err));
      }
    );
  });

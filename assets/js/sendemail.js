
document.querySelectorAll(".contact").forEach(form => {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    emailjs.sendForm("service_kpwyca6", "template_df6j4en", this)
      .then(() => {
        Swal.fire({
            title: "Message Sent!",
            text: "Thank you for contacting us. We'll reply soon.",
            icon: "success",
            confirmButtonColor: "#3085d6"
          });
        this.reset();
      }, (error) => {
        console.error(error);
        Swal.fire({
            title: "Error!",
            text: "Something went wrong. Please try again later.",
            icon: "error",
            confirmButtonColor: "#d33"
          });
      });
  });
});
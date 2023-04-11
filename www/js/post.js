const submitBtn = document.getElementById("submit-btn");
const firstNameInput = document.getElementById("name");
const email = document.getElementById("email");
const messageInput = document.getElementById("message");

submitBtn.onclick = function() {
    const sender = {
      firstName: firstNameInput.value,
      email: email.value,
      message: messageInput.value
    };

  };


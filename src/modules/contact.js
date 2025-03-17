import "../styles/contact.css";

function loadContactPage() {
  const content = document.getElementById("content");
  const contactDiv = document.createElement("div");
  contactDiv.classList.add("contact-container");

  const heading = document.createElement("h1");
  heading.textContent = "Contact Us";
  contactDiv.appendChild(heading);

  const address = document.createElement("p");
  address.textContent = "123 Flavor Street, Culinary City, CC 12345";
  contactDiv.appendChild(address);

  const phone = document.createElement("p");
  phone.textContent = "Phone: (123) 456-7890";
  contactDiv.appendChild(phone);

  const email = document.createElement("p");
  email.textContent = "Email: info@restaurant.com";
  contactDiv.appendChild(email);

  // Create a simple contact form
  const form = document.createElement("form");
  form.classList.add("contact-form");

  const nameLabel = document.createElement("label");
  nameLabel.textContent = "Name:";
  form.appendChild(nameLabel);

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.placeholder = "Your Name";
  form.appendChild(nameInput);

  const emailLabel = document.createElement("label");
  emailLabel.textContent = "Email:";
  form.appendChild(emailLabel);

  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.placeholder = "Your Email";
  form.appendChild(emailInput);

  const messageLabel = document.createElement("label");
  messageLabel.textContent = "Message:";
  form.appendChild(messageLabel);

  const messageTextarea = document.createElement("textarea");
  messageTextarea.placeholder = "Your Message";
  form.appendChild(messageTextarea);

  const submitButton = document.createElement("button");
  submitButton.type = "submit";
  submitButton.textContent = "Send Message";
  form.appendChild(submitButton);

  contactDiv.appendChild(form);
  content.appendChild(contactDiv);
}

export default loadContactPage;

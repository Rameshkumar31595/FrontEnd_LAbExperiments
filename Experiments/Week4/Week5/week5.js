const form = document.getElementById("registerForm");
const inputs = {
  name: document.getElementById("name"),
  email: document.getElementById("email"),
  password: document.getElementById("password"),
  phone: document.getElementById("phone"),
};

// Validation functions
function validateName(name) {
  return /^[A-Za-z\s]{3,}$/.test(name); // only alphabets, min 3 chars
}
function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function validatePassword(password) {
  return password.length >= 6 && /[!@#$%^&*]/.test(password);
}
function validatePhone(phone) {
  return /^[0-9]{10}$/.test(phone); // only numbers, exactly 10 digits
}

// Real-time validation
Object.values(inputs).forEach(input => {
  input.addEventListener("input", () => validateField(input));
});

function validateField(input) {
  const errorEl = input.nextElementSibling;
  let valid = false;

  if (input.id === "name") {
    valid = validateName(input.value);
    errorEl.textContent = valid ? "" : "Name must be only alphabets (min 3 letters)";
  } else if (input.id === "email") {
    valid = validateEmail(input.value);
    errorEl.textContent = valid ? "" : "Enter a valid email";
  } else if (input.id === "password") {
    valid = validatePassword(input.value);
    errorEl.textContent = valid ? "" : "Password must be 6+ chars & include a special char";
  } else if (input.id === "phone") {
    valid = validatePhone(input.value);
    errorEl.textContent = valid ? "" : "Phone must be 10 digits";
  }

  if (valid) {
    input.classList.add("valid");
    input.classList.remove("invalid");
  } else {
    input.classList.add("invalid");
    input.classList.remove("valid");
  }
  return valid;
}

// Form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let allValid = true;
  Object.values(inputs).forEach(input => {
    if (!validateField(input)) allValid = false;
  });

  if (allValid) {
    alert("✅ Thanks for submitting!");
    form.reset();
    Object.values(inputs).forEach(i => {
      i.classList.remove("valid", "invalid");
    });
  }
});

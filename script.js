// Zobrazení navigace na mobilu
const menuToggle = document.querySelector("#menu-toggle");
const nav = document.querySelector("#navbar");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  menuToggle.classList.toggle("change");
});

// Přepínání dark/light mode
const checkbox = document.querySelector("#checkbox");

checkbox.addEventListener("change", () => {
  document.body.classList.toggle("light");
});

// Zobrazení tlačítka "Back to top"
const backToTopButton = document.querySelector(".back-to-top");
const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > 100) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
});

// Zpět na začátek dokumentu
const goToTop = () => {
  document.body.scrollIntoView();
};

backToTopButton.addEventListener("click", goToTop);

// Kontrola shody hesla
const passwordInpust = document.querySelectorAll(".password-input");
const paragraphText = document.querySelector(".result-text");

// - načtení hodnot z políček formuláře
const getInputContent = (input) => {
  return input.value;
};

// - vložení textu
const insertContent = (htmlTag, content) => {
  htmlTag.textContent = content;
};

// - přidání a odebrání classy
const addClass = (htmlTag, className) => {
  htmlTag.classList.add(className);
};
const removeClass = (htmlTag, className) => {
  htmlTag.classList.remove(className);
};

// - vymazání textu v dostavci, pokud jsou políčka prázdná
const htmlTagCleaner = (input1value, input2value, htmlTag) => {
  if (input1value === "" && input2value === "") {
    htmlTag.textContent = "";
  }
};

passwordInpust.forEach((oneInput) => {
  oneInput.addEventListener("input", () => {
    const password1Value = getInputContent(passwordInpust[0]);
    const password2Value = getInputContent(passwordInpust[1]);
    if (password1Value === password2Value) {
      insertContent(paragraphText, "The entered passwords match");
      addClass(paragraphText, "valid");
      removeClass(paragraphText, "invalid");
    } else {
      insertContent(paragraphText, "The entered passwords do not match");
      addClass(paragraphText, "invalid");
      removeClass(paragraphText, "valid");
    }
    htmlTagCleaner(password1Value, password2Value, paragraphText);
  });
});

// Zobrazení hesla
const showPassword = document.querySelector(".show-password");

// - změna input type
const changePasswordType = (passwordValue) => {
  if (passwordValue.type === "password") {
    passwordValue.type = "text";
  } else {
    passwordValue.type = "password";
  }
};

showPassword.addEventListener("click", () => {
  var password1 = document.getElementById("password1");
  var password2 = document.getElementById("password2");
  changePasswordType(password1);
  changePasswordType(password2);
});

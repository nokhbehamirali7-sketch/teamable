console.log("DOM 2 loaded");

const body = document.body;
const themeBtn = document.getElementById("toggleThemeBtn");

const form = document.getElementById("userForm");
const resultBox = document.getElementById("resultBox");
const toggleResultBtn = document.getElementById("toggleResultBtn");

const asideBox = document.getElementById("asideBox");
const toggleAsideBtn = document.getElementById("toggleAsideBtn");

const navLinks = document.querySelectorAll(".nav-link");

// THEME TOGGLE
themeBtn.addEventListener("click", () => {
    body.classList.toggle("dark-theme");
});

// FORM SUBMIT
form.addEventListener("submit", (event) => {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const experience = document.getElementById("experience").value;

    resultBox.innerHTML = `
        <p>Username: ${username}</p>
        <p>Email: ${email}</p>
        <p>Experience: ${experience}</p>
    `;

    resultBox.classList.remove("hidden");
});

// HIDE / SHOW RESULT
toggleResultBtn.addEventListener("click", () => {
    resultBox.classList.toggle("hidden");
});

// HIDE / SHOW ASIDE
toggleAsideBtn.addEventListener("click", () => {
    asideBox.classList.toggle("hidden");
});

// ACTIVE NAV LINK
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.forEach(item => item.classList.remove("active"));
        link.classList.add("active");
    });
});

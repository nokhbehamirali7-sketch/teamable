const form = document.getElementById("experienceForm");
const input = document.getElementById("experience");
const result = document.getElementById("result");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const experienceText = input.value;

  const response = await fetch("http://localhost:3000/api/experience", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      experience: experienceText,
    }),
  });

  const data = await response.json();

  result.innerText = data.message;
  input.value = "";
});

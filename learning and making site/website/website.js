document.addEventListener("DOMContentLoaded", () => {

  const themeBtn = document.getElementById("themeToggle");
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "dark") {
    document.body.classList.add("dark");
    themeBtn.textContent = "☀️";
  }

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    const isDark = document.body.classList.contains("dark");
    localStorage.setItem("theme", isDark ? "dark" : "light");
    themeBtn.textContent = isDark ? "☀️" : "🌙";
  });

  const typingElement = document.getElementById("typing");
  const text = "Hi, I'm Keiko. A Web Developer.";
  let index = 0;

  function typeEffect() {
    if (index < text.length) {
      typingElement.textContent += text[index];
      index++;
      setTimeout(typeEffect, 100);
    }
  }
  typeEffect();

  document.getElementById("contactBtn")
    .addEventListener("click", () => {
      document.getElementById("contact")
        .scrollIntoView({ behavior: "smooth" });
    });

  const toggleSkillsBtn = document.getElementById("toggleSkills");
  const skills = document.getElementById("skills");

  toggleSkillsBtn.addEventListener("click", () => {
    const hidden = skills.classList.toggle("hidden");
    toggleSkillsBtn.textContent = hidden ? "Show Skills" : "Hide Skills";
  });

});

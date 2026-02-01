    const btn = document.getElementById("themeToggle");
    btn.addEventListener("click", () => {
        document.body.classList.toggle("dark");
    });
    function scrollToContact() {
        document.getElementById("contact")
        .scrollIntoView({ behavior:"smooth"});
    }
    const text = "Hi, I'm Keiko. A Web Developer.";
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing").innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    typeEffect();

    const toggleBtn = document.getElementById("toggleSkills");
    const skills = document.getElementById("skills");

    toggleBtn.addEventListener("click", () => {
        skills.classList.toggle("hidden");

        toggleBtn.textContent = skills.classList.contains("hidden")
        ? "Show Skills"
        : "Hide Skills";
    });
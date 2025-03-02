const toggleButtons = document.querySelectorAll(".toggle-btn");

toggleButtons.forEach(button => {
    button.addEventListener("click", () => {
        const content = button.parentElement.nextElementSibling; 
        if (content.classList.contains("show")) {
            content.classList.remove("show");
            button.classList.remove("rotate");
        } else {
            // ✅ Otherwise, close all other sections before opening the new one
            document.querySelectorAll(".show").forEach(item => item.classList.remove("show"));
            document.querySelectorAll(".rotate").forEach(item => item.classList.remove("rotate"));

            content.classList.add("show"); 
            button.classList.add("rotate"); 
        }
    });
});

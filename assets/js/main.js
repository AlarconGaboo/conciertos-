document.addEventListener("DOMContentLoaded", () => {
    const signupTab = document.getElementById("signup-tab");
    const vipTab = document.getElementById("vip-tab");
    const signupForm = document.getElementById("signup-form");
    const vipForm = document.getElementById("vip-form");
    const formDescription = document.getElementById("form-description");

    signupTab.addEventListener("click", () => {
        signupTab.classList.add("active");
        vipTab.classList.remove("active");
        signupForm.classList.add("active");
        vipForm.classList.remove("active");
        formDescription.textContent = "Complete los siguientes campos para crear su cuenta regular, considere que a este tipo de cuenta se le asigna un nombre de usuario.";
    });

    vipTab.addEventListener("click", () => {
        vipTab.classList.add("active");
        signupTab.classList.remove("active");
        vipForm.classList.add("active");
        signupForm.classList.remove("active");
        formDescription.textContent = "Complete los siguientes campos para crear su cuenta VIP. Por ser un usuario VIP podrá crear su nombre de usuario personalizado.";
    });

    signupForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        const randomUsername = `user${Math.floor(Math.random() * 1000)}`;
        alert(`Bienvenido usuario: ${randomUsername}\nEmail: ${email}\nContraseña: ${password}`);
    });

    vipForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const username = document.getElementById("username").value;
        const email = document.getElementById("vip-email").value;
        const password = document.getElementById("vip-password").value;
        alert(`Bienvenido ${username}\nUsuario: ${username}\nEmail: ${email}\nContraseña: ${password}`);
    });
});

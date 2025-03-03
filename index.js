document.getElementById("loginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Captura os valores dos campos
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const rememberMe = document.getElementById("rememberMe").checked; // Verifica se a opção "lembrar senha" está marcada

    // Simulação de credenciais válidas
    const userDB = {
        email: "test@email.com",
        password: "123456"
    };

    // Verifica se os dados estão corretos
    if (email === userDB.email && password === userDB.password) {
        alert("Login realizado com sucesso!");

        // Armazena no localStorage se o usuário escolheu lembrar
        if (rememberMe) {
            localStorage.setItem("userEmail", email);
        } else {
            localStorage.removeItem("userEmail");
        }

        // Redireciona para outra página após login bem-sucedido
        window.location.href = "dashboard.html"; // Altere para a página desejada

    } else {
        alert("Usuário ou senha incorretos!");
    }
});

// Recupera o e-mail salvo, se existir
window.onload = function () {
    const savedEmail = localStorage.getItem("userEmail");

    if (savedEmail) {
        document.getElementById("email").value = savedEmail;
        document.getElementById("rememberMe").checked = true;
    }
};

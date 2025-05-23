
document.addEventListener("keydown", () => {
    const sound = document.getElementById("introSound");
    sound.play();
    document.body.innerHTML = '<div class="overlay"><h1>Carregando...</h1></div>';
});

window.onload = function(){
    let $main = document.querySelector(".container")
    let $subtitle = document.querySelector(".subtitulo")
    let $link = document.querySelector("a")
    let $paragraph = document.querySelectorAll("p")

    let userName = prompt("Ingrese su nombre")

    userName.trim() !== ""
        ? ($subtitle.innerText += `${userName}`)
        : ($subtitle.innerText += "Invitado")
    
    $subtitle.style.textTransform = "uppercase"
    $link.style.color = "#e51b3e"

    let background = confirm("Desea colocar un fondo de pantalla?")
    background && document.body.classList.add("fondo")

    $paragraph.forEach((element, index) => {
        if((index + 1) % 2 === 0){
            element.classList.add("destacadoPar")
        } else {
            element.classList.add("destacadoImpar")
        }
    })

    $main.style.display = "block"
}
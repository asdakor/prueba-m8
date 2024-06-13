$(document).ready(function () {
    const formRegister = $("#formRegister")
    const nombre = $('#nombre').val()
    const email = $('#email').val()
    const password = document.querySelector('#password').val()
    const passwordValidate = $('#passwordValidate').val()
    const anos_experiencia = $('#anos_experiencia').val()
    const especialidad = $('#especialidad').val()

    formRegister.on("submit", function (event) {
        const foto = document.querySelector('#foto')
        event.preventDefault()
        console.log('tamolocojeje')
        if (superheroid > 0 && superheroid < 732) {
            getSuperhero(superheroid)
            $("#msjError").text('Superheroe encontrado !!').css('color', 'green')
        } else {
            $("#msjError").text('Error debe ser un numero entre 1 y 731 !!!').css('color', 'red')
        }



    })
});

const nuevoRoommate = () => {
    fetch("http://localhost:3000/users/register", { method: "POST" })
        .then((res) => res.json())
        .then(() => {
            imprimir();
        });
};

async function nuevoSkater() {
    
    
    document.getElementById("submitForm").addEventListener("click", function(event){
        event.preventDefault()
        console.log('jajant', nombre)
    
    
    
    });
    
    
   
    
}
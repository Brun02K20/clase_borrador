// en cuanto se cargue el documento, ejecutar la funcion
document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('registroForm'); // obtengo el formulario
    const mensaje = document.getElementById('mensaje'); // obtengo el p

    // cuando el usuario pulse enviar, ejecutar esta funcion
    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const data = {
            nombre: form.nombre.value,
            apellido: form.apellido.value,
            usuario: form.usuario.value,
            password: form.password.value,
            email: form.email.value
        }

        console.log(data)

        try {
            const response = await fetch('http://localhost:4001/api/users/', { // envio los datos, parseandolos a un JSON
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data) // Convertir los datos a JSON antes de enviarlos
            });

            const res = await response.json(); // La respuesta la convierto a array

            if (response.ok) {
                mensaje.textContent = "El usuario se creó exitosamente";
            } else {
                throw new Error(res.error || 'Ha habido un error imprevisto');
            }

        } catch (error) {
            mensaje.textContent = error.message;
        }
    });
});
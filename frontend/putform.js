document.addEventListener("DOMContentLoaded", async function () {
    const putForm = document.getElementById('putForm');
    const mensajeElement = document.getElementById('mensaje');

    // Obtener el ID del usuario de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const userId = urlParams.get('id');

    // Cargar los datos del usuario en el formulario
    await loadUserData(userId);

    // Event listener para el envío del formulario
    putForm.addEventListener('submit', async function (event) {
        event.preventDefault();

        // Obtener los datos del formulario
        const formData = new FormData(putForm);

        try {
            const response = await fetch(`http://localhost:4001/api/users/${userId}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(Object.fromEntries(formData)) // Convertir los datos a JSON
            });

            if (!response.ok) {
                throw new Error('Error al actualizar el usuario');
            }

            mensajeElement.textContent = 'Usuario actualizado correctamente';

        } catch (error) {
            console.error(error);
            mensajeElement.textContent = 'Ha habido un error al actualizar el usuario';
        }
    });
});


// antes de actualizar, en el formulario, debo cargar los datos del usuario
async function loadUserData(userId) {
    try {
        const response = await fetch(`http://localhost:4001/api/users/${userId}`);
        const userData = await response.json();

        // Llenar el formulario con los datos del usuario
        document.getElementById('nombre').value = userData.nombre;
        document.getElementById('apellido').value = userData.apellido;
        document.getElementById('usuario').value = userData.usuario;
        document.getElementById('password').value = userData.password;
        document.getElementById('email').value = userData.email;

    } catch (error) {
        console.error(error);
        alert('Ha habido un error al cargar los datos del usuario');
    }
}

// URL de la API que quieres consultar
const apiUrl = 'http://localhost:3000/especialidades';

// Haciendo una solicitud GET
fetch(apiUrl)
    .then(response => {
        if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        const especialidades = data;
        let html = `<tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Estado</th>
                        <th>Opciones</th>
                    </tr>`
        especialidades.forEach(especialidad => {
            html += `
            <tr>
                <td>${especialidad.nombre}</td>
                <td>${especialidad.descripcion}</td>
                <td>
                    ${especialidad.estado == true 
                        ? '<div class="badge badge-success">Activo</div>' 
                        : '<div class="badge badge-danger">No Activo</div>'
                    }
                    
                </td>
                <td>
                    <a href="#" class="btn btn-warning">
                        <i class="fas fa-pencil-alt"></i>
                    </a>
                    <a href="#" class="btn btn-danger">
                        <i class="far fa-trash-alt"></i>
                    </a>
                </td>
            </tr>
            `;
        });
        document.getElementById('tabla-especialidades').innerHTML = html;
    })
    .catch(error => {
        console.error('Error:', error);
    });

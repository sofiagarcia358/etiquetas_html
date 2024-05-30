// Obtener el elemento .section-1
let section1_sof = document.querySelector(".section-1");

// Crear la tabla
let tableHTML = `
    <table>
        <tr>
            <th>Etiqueta HTML</th>
            <th>Descripción</th>
        </tr>
        <tr>
            <td>&lt;div&gt;</td>
            <td>Define una sección</td>
        </tr>
        <tr>
            <td>&lt;p&gt;</td>
            <td>Define un párrafo de texto.</td>
        </tr>
        <tr>
            <td>&lt;span&gt;</td>
            <td>Define un contenedor en línea para el contenido.</td>
        </tr>
        <tr>
            <td>&lt;img&gt;</td>
            <td>Define una imagen.</td>
        </tr>
        <tr>
            <td>&lt;a&gt;</td>
            <td>Define un hipervínculo.</td>
        </tr>
        <tr>
            <td>&lt;ul&gt;</td>
            <td>Define una lista desordenada.</td>
        </tr>
        <tr>
            <td>&lt;ol&gt;</td>
            <td>Define una lista ordenada.</td>
        </tr>
        <tr>
            <td>&lt;li&gt;</td>
            <td>Define un elemento de lista en ul u ol.</td>
        </tr>
        <tr>
            <td>&lt;table&gt;</td>
            <td>Define una tabla.</td>
        </tr>
        <tr>
            <td>&lt;tr&gt;</td>
            <td>Define una fila en una tabla.</td>
        </tr>
        <tr>
            <td>&lt;th&gt;</td>
            <td>Define una celda de encabezado en una tabla.</td>
        </tr>
        <tr>
            <td>&lt;td&gt;</td>
            <td>Define una celda en una tabla.</td>
        </tr>
        <!-- Puedes añadir más filas según necesites -->
    </table>
`;

// Agregar la tabla a .section-1
section1_sof.innerHTML = tableHTML;

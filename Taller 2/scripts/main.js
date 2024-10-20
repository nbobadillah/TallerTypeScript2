import { series } from './data.js';
console.log("Cargando series...");
function renderSeriesInTable() {
    var tableBody = document.getElementById('series-table');
    var serieDetails = document.getElementById('serie-details');
    var totalSeasons = 0; // Variable para sumar las temporadas
    var seriesCount = series.length; // Cantidad de series
    // Renderizar cada serie en una fila de la tabla
    series.forEach(function (serie) {
        var row = document.createElement('tr');
        row.innerHTML = "\n      <td>".concat(serie.id, "</td>\n      <td><a href=\"#\" class=\"serie-link\">").concat(serie.name, "</a></td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td>\n    ");
        // Añadir un evento clic a la fila para mostrar los detalles de la serie
        row.addEventListener('click', function () {
            showSerieDetails(serie);
        });
        tableBody.appendChild(row);
        // Sumar temporadas
        totalSeasons += serie.seasons;
    });
    // Calcular el promedio de temporadas
    var averageSeasons = totalSeasons / seriesCount;
    // Mostrar el promedio de temporadas al final de la tabla
    var averageRow = document.createElement('tr');
    averageRow.innerHTML = "\n    <td colspan=\"4\" style=\"text-align: center; font-weight: bold;\">\n      Seasons average: ".concat(averageSeasons.toFixed(2), "\n    </td>\n  ");
    tableBody.appendChild(averageRow);
    // Función para mostrar el detalle de la serie en un card de Bootstrap
    function showSerieDetails(serie) {
        serieDetails.innerHTML = "\n      <div class=\"card\" style=\"width: 18rem;\">\n        <img src=\"".concat(serie.image, "\" class=\"card-img-top\" alt=\"").concat(serie.name, "\">\n        <div class=\"card-body\">\n          <h5 class=\"card-title\">").concat(serie.name, "</h5>\n          <p class=\"card-text\">").concat(serie.description, "</p>\n          <p><strong>Channel:</strong> ").concat(serie.channel, "</p>\n          <p><strong>Seasons:</strong> ").concat(serie.seasons, "</p>\n        </div>\n      </div>\n    ");
    }
}
renderSeriesInTable();

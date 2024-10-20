import { series } from './data.js';

console.log("Cargando series...");

function renderSeriesInTable(): void {
  const tableBody = document.getElementById('series-table') as HTMLElement;
  const serieDetails = document.getElementById('serie-details') as HTMLElement;

  let totalSeasons = 0;  // Variable para sumar las temporadas
  const seriesCount = series.length;  // Cantidad de series

  // Renderizar cada serie en una fila de la tabla
  series.forEach((serie) => {
    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${serie.id}</td>
      <td><a href="#" class="serie-link">${serie.name}</a></td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
    `;

    // Añadir un evento clic a la fila para mostrar los detalles de la serie
    row.addEventListener('click', () => {
      showSerieDetails(serie);
    });

    tableBody.appendChild(row);

    // Sumar temporadas
    totalSeasons += serie.seasons;
  });

  // Calcular el promedio de temporadas
  const averageSeasons = totalSeasons / seriesCount;

  // Mostrar el promedio de temporadas al final de la tabla
  const averageRow = document.createElement('tr');
  averageRow.innerHTML = `
    <td colspan="4" style="text-align: center; font-weight: bold;">
      Seasons average: ${averageSeasons.toFixed(2)}
    </td>
  `;
  tableBody.appendChild(averageRow);

  // Función para mostrar el detalle de la serie en un card de Bootstrap
  function showSerieDetails(serie: any) {
    serieDetails.innerHTML = `
      <div class="card" style="width: 18rem;">
        <img src="${serie.image}" class="card-img-top" alt="${serie.name}">
        <div class="card-body">
          <h5 class="card-title">${serie.name}</h5>
          <p class="card-text">${serie.description}</p>
          <p><strong>Channel:</strong> ${serie.channel}</p>
          <p><strong>Seasons:</strong> ${serie.seasons}</p>
        </div>
      </div>
    `;
  }
}

renderSeriesInTable();

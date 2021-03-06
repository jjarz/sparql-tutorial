// Adapted from https://developers.google.com/fusiontables/docs/samples/mouseover_map_styles
import fusionTables from './fusionTables';

function constructNewCoordinates(polygon) {
  var newCoordinates = [];
  var coordinates = polygon['coordinates'][0];
  for (var i in coordinates) {
    newCoordinates.push(
        new window.google.maps.LatLng(coordinates[i][1], coordinates[i][0]));
  }
  return newCoordinates;
}

/**
* Callback once geometries are received from google maps Fusion Tables api
* Build array of polygons for each country, eg.
* [
*   {
*     name: 'usa',
*     coordinates: [<country's coordinates pulled from API>]
*   }, {
*     ...
*   }
* ]
* Adapted from https://developers.google.com/fusiontables/docs/samples/mouseover_map_styles
*
* @param data - geo data to draw Polygons
*/
function getMapPolygonGeometries(rows) {
  let polygons = [];

  for (var i in rows) {
    if (rows[i][0] !== 'Antarctica') { // Antarctica coords cover entire map
      let newCoordinates = [];
      const geometries = rows[i][1]['geometries'];
      if (geometries) {
        for (const j in geometries) {
          newCoordinates.push(constructNewCoordinates(geometries[j]));
        }
      } else {
        newCoordinates = constructNewCoordinates(rows[i][1]['geometry']);
      }
      polygons.push({
        paths: newCoordinates,
        name: rows[i][0]
      })
    }
  }

  return polygons;
}

module.exports = {
  /**
  * Make API call to get coordinate for country polygons, build array of polygon objects
  */
  createMapPolygons: function() {
    return getMapPolygonGeometries(fusionTables.rows);
  }
};

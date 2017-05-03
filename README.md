sparql-tutorial is a single-page app aimed at helping users learn [SPARQL query](https://www.w3.org/TR/rdf-sparql-query/) language by example.

## Structure of the app:

The breakdown of the app's React components:
* `WorldMap`
  * `GoogleMapContainer`
    * `GoogleMap` (using [react-google-maps](https://github.com/tomchentw/react-google-maps))
    * `CountryPolygon`s
* `QueryContainer`
  * `QueryInput`
    * `QuerySuggestions`
  * `QueryResult`


![](https://puu.sh/vDHgT/f42915d201.png)

## Data flow in the application
State is almost exclusively owned by the parent component of the application: 
* the selected country
* the query input
* query results
* the data for the polygons to show on the map

Here's an example:

The App component's state has a `selectedCountry` which controls the country we add in to the query for getting population data.

A callback function is passed as a prop to the `Country Polygon` component, which wires it up as a click callback.  When a `CountryPolygon` is clicked, it calls the callback with its country name prop.  

This call traverses up the chain of components to `App`, which then makes the call to an API utility.  

The API builds the query and request to make to DBPedia, then either finds the result in a cache, or makes an AJAX call to retreive the country's data.  

Once the data is retreived, `App` sets the state of `queryResult`, the result of the query (the data, or an error state returned from DBPedia).  Since this state is passed down to the `QueryContainer` component's props, it automatically updates to show the query that was performed and its results.

![](https://puu.sh/vDKC3/20cb1bd6c4.png)

## External data
1. Retreived data from Google's Fusion Tables API to get coordinates to draw the countries on the map and associate them with their country's names.
  * Retrieved data for country boundaries on startup (based off of https://developers.google.com/fusiontables/docs/samples/mouseover_map_styles)
    * Stored this in a JSON file since the data is static
  * Formatted this data into `props` for each `CountryPolygon`: `path` and `name` of the country
  * Used `CountryResolver` for country names that were not exact matches between Google Fusion Table and DBPedia
2. Requested data from DBPedia with SPARQL queries, using `axios`
  * Population query
    * Country comes in from clicks on `CountryPolygon`
    * App component resolves the country name w/ `CountryResolver`, sets the `QueryInput`'s inputValue
    * api builds SPARQL query and sends it off to DBPedia
    * returns result (data or errors) to App, which sets the `queryResult` on the state to hand back to components
  * Suggested Queries and raw input - `QuerySuggester` and `QueryInput` set state of the `queryInputValue` which feeds into api to call to DBPedia

## Process of building the application
I'm going to be honest - getting this project done in one weekend seemed intimidating.  To make sure I wasn't walking in with nothing functional to show, I built out a [skateboard-version](http://herdingcats.typepad.com/.a/6a00d8341ca4d953ef01a511e114a3970c-pi) of the app before focusing on the more complex problems.  I started with a simple list of a few countries that I plugged into a SPARQL query to get population data.

![](http://g.recordit.co/ICS1rqicam.gif)

From there I could wire in the map without having to do much else to the query functionality.

## Next steps

Features I would like to add given more time...
* More suggested queries, suggested queries using the selected country
* Loading state to show the user their query was submitted
* History of SPARQL query entries - could using local storage or query params for this
* Query other datasets for more interesting country data
* More unit testing, functional testing
* Logging tools, analytics

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

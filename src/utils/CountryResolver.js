/**
* The Google Fusion Table used to draw the polygons has some slightly different country names than
* the country records in DBPedia.  This map helps resolve some of those names.
*
* Note that some countries are just straight up not in DBPedia, so some country clicks will still
* result in no results from DBPedia
*/
class CountryResolver {
  constructor() {
    this.countryMap = this.buildMap();
  }

  buildMap() {
    let map = new Map();

    map.set('Congo (Kinshasa)', 'the Republic of the Congo');
    map.set('Czech Rep.', "Czech Republic");
    map.set('Guinea Bissau', 'Guinea-Bissau');
    map.set('Eq. Guinea', 'Equatorial Guinea');
    map.set('Fr. S. and Antarctic Lands', 'the French Southern and Antarctic Lands');
    map.set('Bosnia and Herz.', 'Federation of Bosnia and Herzegovina');
    map.set('Solomon Is.', 'Solomon Islands');
    map.set('N. Cyprus', 'Northern Cyprus');
    map.set('China', 'the People\'s Republic of China');
    map.set('S. Korea', 'South Korea');
    map.set('N. Korea', 'North Korea');
    map.set('Antarctica', 'the British Antarctic Territory');
    map.set('Central African Rep.', 'the Central African Republic');
    map.set('Macedonia', 'Republic of Macedonia');
    map.set('United States', 'the United States');
    map.set('Dominican Rep.', 'Dominican Republic');
    map.set('Falkland Is.', 'Falkland Islands');
    map.set('Netherlands', 'the Netherlands');
    map.set('S. Sudan', 'South Sudan');
    map.set('Bahamas', 'The Bahamas');

    return map;
  }

  resolveCountry(countryName) {
    if (this.countryMap.get(countryName)) {
      return this.countryMap.get(countryName);
    }

    return countryName;
  }
}

export default CountryResolver;

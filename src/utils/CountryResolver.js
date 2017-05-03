/**
* The Google Fusion Table used to draw the polygons has some slightly different country names than
* the country records in DBPedia.  This map helps resolve some of those names.
*
* Note that some countries are just straight up not in DBPedia, so some country clicks will still
* result in no results from DBPedia
*
* Based on this query for fusion table countries not in DBpedia:
* http://dbpedia.org/sparql?default-graph-uri=http%3A%2F%2Fdbpedia.org&query=SELECT+%3Ffusion+WHERE+%7B%0D%0A++++++++++VALUES+%28%3Ffusion%29+%7B%0D%0A++++++++++++%28%22Afghanistan%22%40en%29%28%22United+Arab+Emirates%22%40en%29%28%22Burkina+Faso%22%40en%29%28%22Bangladesh%22%40en%29%28%22Congo+%28Kinshasa%29%22%40en%29%28%22Cuba%22%40en%29%28%22Czech+Rep.%22%40en%29%28%22Denmark%22%40en%29%28%22Ethiopia%22%40en%29%28%22Guinea+Bissau%22%40en%29%28%22Eq.+Guinea%22%40en%29%28%22Croatia%22%40en%29%28%22Indonesia%22%40en%29%28%22Iran%22%40en%29%28%22Jordan%22%40en%29%28%22Kazakhstan%22%40en%29%28%22Cambodia%22%40en%29%28%22Laos%22%40en%29%28%22New+Zealand%22%40en%29%28%22Papua+New+Guinea%22%40en%29%28%22Russia%22%40en%29%28%22Rwanda%22%40en%29%28%22Somalia%22%40en%29%28%22Serbia%22%40en%29%28%22Trinidad+and+Tobago%22%40en%29%28%22Tunisia%22%40en%29%28%22Yemen%22%40en%29%28%22Zimbabwe%22%40en%29%28%22Angola%22%40en%29%28%22Armenia%22%40en%29%28%22Fr.+S.+and+Antarctic+Lands%22%40en%29%28%22Burundi%22%40en%29%28%22Bosnia+and+Herz.%22%40en%29%28%22Colombia%22%40en%29%28%22Cyprus%22%40en%29%28%22Ecuador%22%40en%29%28%22Eritrea%22%40en%29%28%22Honduras%22%40en%29%28%22Kuwait%22%40en%29%28%22Sri+Lanka%22%40en%29%28%22Lithuania%22%40en%29%28%22Moldova%22%40en%29%28%22Nicaragua%22%40en%29%28%22Nepal%22%40en%29%28%22Panama%22%40en%29%28%22Portugal%22%40en%29%28%22Qatar%22%40en%29%28%22Romania%22%40en%29%28%22Solomon+Is.%22%40en%29%28%22Slovenia%22%40en%29%28%22Vietnam%22%40en%29%28%22Albania%22%40en%29%28%22Australia%22%40en%29%28%22Azerbaijan%22%40en%29%28%22Belgium%22%40en%29%28%22Switzerland%22%40en%29%28%22Congo+%28Brazzaville%29%22%40en%29%28%22Costa+Rica%22%40en%29%28%22N.+Cyprus%22%40en%29%28%22France%22%40en%29%28%22Guyana%22%40en%29%28%22Luxembourg%22%40en%29%28%22Latvia%22%40en%29%28%22Madagascar%22%40en%29%28%22Mali%22%40en%29%28%22Mozambique%22%40en%29%28%22Saudi+Arabia%22%40en%29%28%22Slovakia%22%40en%29%28%22Syria%22%40en%29%28%22Thailand%22%40en%29%28%22Uzbekistan%22%40en%29%28%22South+Africa%22%40en%29%28%22Argentina%22%40en%29%28%22Brunei%22%40en%29%28%22Botswana%22%40en%29%28%22Canada%22%40en%29%28%22China%22%40en%29%28%22Ivory+Coast%22%40en%29%28%22Germany%22%40en%29%28%22Egypt%22%40en%29%28%22Spain%22%40en%29%28%22Finland%22%40en%29%28%22Gambia%22%40en%29%28%22Greenland%22%40en%29%28%22Iraq%22%40en%29%28%22S.+Korea%22%40en%29%28%22Kosovo%22%40en%29%28%22Malaysia%22%40en%29%28%22Namibia%22%40en%29%28%22Norway%22%40en%29%28%22N.+Korea%22%40en%29%28%22Somaliland%22%40en%29%28%22Turkmenistan%22%40en%29%28%22Taiwan%22%40en%29%28%22Tanzania%22%40en%29%28%22Venezuela%22%40en%29%28%22Vanuatu%22%40en%29%28%22Antarctica%22%40en%29%28%22Benin%22%40en%29%28%22Belarus%22%40en%29%28%22Belize%22%40en%29%28%22Bolivia%22%40en%29%28%22Brazil%22%40en%29%28%22Bhutan%22%40en%29%28%22Central+African+Rep.%22%40en%29%28%22Chile%22%40en%29%28%22Fiji%22%40en%29%28%22Georgia%22%40en%29%28%22Hungary%22%40en%29%28%22Ireland%22%40en%29%28%22Italy%22%40en%29%28%22Jamaica%22%40en%29%28%22Japan%22%40en%29%28%22Kyrgyzstan%22%40en%29%28%22Morocco%22%40en%29%28%22Macedonia%22%40en%29%28%22Malawi%22%40en%29%28%22Suriname%22%40en%29%28%22Sweden%22%40en%29%28%22East+Timor%22%40en%29%28%22Turkey%22%40en%29%28%22United+States%22%40en%29%28%22Austria%22%40en%29%28%22Cameroon%22%40en%29%28%22Djibouti%22%40en%29%28%22Dominican+Rep.%22%40en%29%28%22Falkland+Is.%22%40en%29%28%22Gabon%22%40en%29%28%22United+Kingdom%22%40en%29%28%22Ghana%22%40en%29%28%22Greece%22%40en%29%28%22Iceland%22%40en%29%28%22Lebanon%22%40en%29%28%22Libya%22%40en%29%28%22Lesotho%22%40en%29%28%22Mexico%22%40en%29%28%22Myanmar%22%40en%29%28%22Montenegro%22%40en%29%28%22Mongolia%22%40en%29%28%22Niger%22%40en%29%28%22Nigeria%22%40en%29%28%22Netherlands%22%40en%29%28%22Sudan%22%40en%29%28%22S.+Sudan%22%40en%29%28%22Senegal%22%40en%29%28%22Sierra+Leone%22%40en%29%28%22El+Salvador%22%40en%29%28%22Chad%22%40en%29%28%22Tajikistan%22%40en%29%28%22Uganda%22%40en%29%28%22Ukraine%22%40en%29%28%22Uruguay%22%40en%29%28%22Zambia%22%40en%29%28%22Bulgaria%22%40en%29%28%22Algeria%22%40en%29%28%22Estonia%22%40en%29%28%22Haiti%22%40en%29%28%22India%22%40en%29%28%22Kenya%22%40en%29%28%22Liberia%22%40en%29%28%22Mauritania%22%40en%29%28%22New+Caledonia%22%40en%29%28%22Pakistan%22%40en%29%28%22Peru%22%40en%29%28%22Philippines%22%40en%29%28%22Paraguay%22%40en%29%28%22Swaziland%22%40en%29%28%22West+Bank%22%40en%29%28%22Bahamas%22%40en%29%28%22Guinea%22%40en%29%28%22Guatemala%22%40en%29%28%22Israel%22%40en%29%28%22Oman%22%40en%29%28%22Poland%22%40en%29%28%22Puerto+Rico%22%40en%29%28%22W.+Sahara%22%40en%29%28%22Togo%22%40en%29%0D%0A++++++++++%7D%0D%0A++++++++++FILTER+NOT+EXISTS+%7B%0D%0A+++++++++++++%3Fx+a+dbo%3ACountry.%0D%0A+++++++++++++%3Fx+dbp%3AcommonName+%3Ffusion+.%0D%0A++++++++++%7D%0D%0A++++++++%7D&format=text%2Fhtml&CXML_redir_for_subjs=121&CXML_redir_for_hrefs=&timeout=30000&debug=on
*
*
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

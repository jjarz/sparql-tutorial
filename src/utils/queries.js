export default [
`SELECT ?name ?population ?link
WHERE {
    ?link a dbo:Country.
    ?link dbp:commonName ?name.
    ?link dbo:populationTotal ?population.
}
ORDER BY DESC (?population)
LIMIT 10
`,
`SELECT * WHERE {
    ?x a dbo:Country.
    ?x dbp:commonName ?name.
    ?x dbo:populationTotal ?population.
}`,
`SELECT ?name ?language WHERE {
   ?country a dbo:Country.
   ?country dbp:commonName ?name.
   ?country dbo:officialLanguage ?language.
}
`,
`SELECT ?name ?largestCity
WHERE {
    ?link a dbo:Country.
    ?link dbp:commonName ?name.
    ?link dbo:populationTotal ?population.
    ?link dbo:largestCity ?largestCity
}
ORDER BY DESC (?population)
LIMIT 10
`
];

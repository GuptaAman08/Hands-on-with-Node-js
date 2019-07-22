/*
Inorder to parse the query string in url you can use TRUE as second argument to 
parse function or can use querystring module to parse the querystring extracted with the help 
of url.parse().query property.

Here, we use querystring module
*/

const url = require('url')
const qs = require('querystring')

var the_url = 'http://localhost:8080/default.htm?year=2017&month=february&month=July'
var all_comp_of_url = url.parse(the_url)

console.log(all_comp_of_url.query)
console.log(typeof(all_comp_of_url.query))

var parsedQS = qs.decode(all_comp_of_url.query)

console.log(parsedQS)
console.log(typeof(parsedQS))
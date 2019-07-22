/*

Inorder to parse the query string in url you can use TRUE as second argument to 
parse function or can use querystring module to parse the querystring extracted with the help 
of url.parse().query property

Without QueryString module
*/
const url =require('url')

var the_url = 'http://localhost:8080/default.htm?year=2017&month=february&month=July'
var all_comp_of_url = url.parse(the_url, true)

console.log(all_comp_of_url.query)
console.log(`Type of QueryString : ${typeof(all_comp_of_url.query)}`)

// other properties
console.log(all_comp_of_url.host)
console.log(all_comp_of_url.hostname)
console.log(all_comp_of_url.pathname)

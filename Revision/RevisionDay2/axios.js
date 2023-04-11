//Promise based HTTP client for the browser and node.js


axios.get("https://reqres.in/api/users/1").then(
    response => { console.log(response)}
)


axios.post("https://reqres.in/api/users/",
{
    "name": "morpheus",
    "job": "leader"
}).then(res=>console.log(res))


//api key
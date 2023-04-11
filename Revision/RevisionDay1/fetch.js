/* fetch()

1. it returns a promise
2. url */



const getBtn= document.querySelector("#getBtn")
const postBtn= document.querySelector("#postBtn")

const usersDetails=(url,method,data)=>{

    return fetch(url,{
        method: method,
        body: JSON.stringify(data)
    })
    .then((res)=>{
        console.log(res)
        return res.json() //returns a 2nd promise
    })

}


const getuserDetails =()=>{

    usersDetails("https://reqres.in/api/users/2","Get").then(resData=>{
        console.log(resData)
    })
    
}
const postuserDetails =()=>{
    usersDetails("https://reqres.in/api/users/2","Post",{
        "name": "morpheus",
        "job": "leader"
    }).then(resData=>{
        console.log(resData)
    })

}

getBtn.addEventListener("click",getuserDetails)
postBtn.addEventListener("click",postuserDetails)






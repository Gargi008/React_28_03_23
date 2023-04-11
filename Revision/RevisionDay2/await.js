/* function myFunc(){
    return axios.get("https://dummyjson.com/products")
}


myFunc().then((res=>console.log(res))) */



async function myFunc(){
    console.log("2 . before making the api call")
    const res= await axios.get("https://dummyjson.com/products")// -----
    console.log("4. res-------",res)
}

console.log("1 . I am outside of this drama part 1 !!!!!!")
myFunc()
console.log("3. I am outside this drama part 2 !!!!!!")
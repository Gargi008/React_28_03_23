//promises


//  u kep the promise --> ur promise got resolved
// u fail tp keep the promise --> ur promise got rejected

const myNewPromise= new Promise((resolve,reject)=>{

    if(true){
        setTimeout(()=>{
            resolve("yeaaa , I kept my promise ")

        },2000)
    }else{
        reject(" sorry I couldn't keep my word")
    }
})
myNewPromise
.then(val => console.log(val))
.catch(rejectedval => console.log(rejectedval))
   



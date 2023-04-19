//Pure Function


/* const AdditionPure =(a,b)=>{
    return a+b
}

const sum1= AdditionPure(7,8)
console.log("sum",sum1)
const sum2= AdditionPure(7,8)
console.log("sum",sum2)
const sum3= AdditionPure(7,8)
console.log("sum",sum3)

 */
/* let val= 100
const AdditionImPure =(a,b)=>{
    return a+b+val
}

const sum1= AdditionImPure(7,8)
console.log("sum",sum1)
const sum2= AdditionImPure(7,8)
console.log("sum",sum2)
const sum3= AdditionImPure(7,8)
console.log("sum",sum3)

console.log("my val",val)
 */

//sideEffects


let newVal= 13

const AdditionSideEffect=(a,b)=>{
    newVal= a+b

    return a*b
}

const result1= AdditionSideEffect(7,8)
console.log("result",result1)
const result2= AdditionSideEffect(7,8)
console.log("result",result2)
const result3= AdditionSideEffect(7,8)
console.log("result",result3)

console.log("newVal----",newVal)



const myarr=[13,11]

const [x,y]= myarr
console.log("x",x)
console.log("y",y)



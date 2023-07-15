console.log(cualEsMayor(1,2,3))


function cualEsMayor(n1, n2,n3){
    if(n1>n2 && n1>n3){
        return n1
    }
    else if(n2>n1 && n2>n3){
        return n2
    }
    else{
        return n3
    }
 }

let n1 = 4000
let n2 = 3000
let n3 = 4000

if(n1>=n2 && n1>=n3){
    console.log(n2)
}
else if(n2>=n1 && n2>=n3){
    console.log(n3)
}
else{
    console.log(n1)
}

setTimeout(()=>{
    console.log("hola" + cualEsMayor (100,1000,2222))
},5000)
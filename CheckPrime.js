
let a = 10;
let count = 0
for(let i=0; i<=a; i++){
    if(a%i==0){
        count++
    }
}
if(count==2){
    console.log("Prime")
}
else{
    console.log("Not-Prime")
}


const is_array =(input) =>{
 if(Object.prototype.toString.call(input)==="[object Array]"){
       return true;
 }
 return false;
}
console.log(is_array('W3School'));
console.log(is_array([1,2,3,4]));

//clone array
const array_clone=(arra1)=>{
return arra1.slice(0);
}
console.log(array_clone([1,2,3,4]));

//join example 
let Color=["red","green","blue"]
console.log(Color.toString());
console.log(Color.join(" "));
console.log(Color.join("-"));

//sort array
let array=[-3,4,8,9,10,2,3,-3,-5,10];
let array2=[]
let max=array[0]
let min=array[0]
let pos
for(let i=0;i<array.length;i++){
if(max<array[i])
   max=array[i]
}
for(let i=0;i<array.length;i++){
    for(let j=0;j<array.length;j++){
        if(array[j] !="x")
        {
            if(min>array[j]){
                min=array[j];
                pos=j
            }
        }
    }
    array2[i]=min;
    array[pos]="x";
    min=max
}
console.log(array2);
let num=12344;
const changeStr=(num)=>{
    let str=num.toString();
    return typeof str;
}
//Reversed string
console.log(changeStr(num));
const rev=(num)=>{
    let str=num.toString().split('').reverse().join('');
    return str;
}
console.log(rev(num));

//ordered by alphabet
let str1="bannaba";
const orderAplabet=(str1)=>{
   let str=str1.split('').sort().join("");
   return str;
}
console.log(orderAplabet(str1));
let vowel_list='aeiouAEIOU'
 let vowel="Hello World";
const countVowel=(vowel)=>{
    let count=0;
    for (let index = 0; index < vowel.length; index++) {
        if(vowel_list.indexOf(vowel[index]) != -1){
   count++;
        }   
    }
    return count;
}
console.log(countVowel(vowel));
const replaceVowel=(vowel)=>{
   const vowelRegex=/[aeiouAEIOU]/g
  return  vowel.replace(vowelRegex,'X')
}
console.log(replaceVowel(vowel));

//change first string of world in UpperCase
let string="the quick brown color"
const UpperCaseOne=(string)=>{
    var array1 = string.split(' ');
     var array2 = [];
     for(let x = 0; x < array1.length; x++){
          array2.push(array1[x].charAt(0).toUpperCase()+array1[x].slice(1));
     }
     return array2.join(' ');
     }
console.log(UpperCaseOne(string));
// Date time format
let date=new Date();
let dd=date.getDate();
let months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
let mm=months[date.getMonth()];
let year=date.getFullYear();
console.log(dd+'-'+mm+'-'+year);
console.log(`${dd}/ ${mm} / ${year}`);
let camas=new Date(date.getFullYear(),11,25);
if(date.getMonth()==11 && date.getDate()>25){
 camas.setFullYear(camas.getFullYear()+1)
}
let oneday=1000*60*60*24
let calCamas=Math.ceil(((camas.getTime()-date.getTime())/(oneday)))
console.log(calCamas+"days left until Chritmas");
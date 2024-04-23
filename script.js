let string = "tut"
console.log(string);
let stringArray = string.split("").reverse().join("")
console.log(stringArray);
if (stringArray==string) {
    console.log("Eded polindromdur");
}
else{
    console.log("Eded polindrom deyil");
}
//Task 1 bitdi.


 let name = " Old keys won't open new doors"
 console.log(name);
 if(name.length>10 && name.length<20)

 {
    console.log("true")

}
else{
     
    console.log("false");
}

//Task 2 bitdi.

 let number = [7,2,5,4,3,2,5,7,9,5,4,3,2,4,6,7,];
 console.log(number);
  let numbersay=number.length;

  let cem =0;
 
  for (  let i=0 ; i<numbersay; i++)
  {
    cem+=number[i];
  }
  console.log("Ededlerin cemi: ", cem);
  console.log("Arrayin uzunlugu:",numbersay);
  let edort=cem/numbersay;
  console.log("Ededdi Ortasu :", edort);
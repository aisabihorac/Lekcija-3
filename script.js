//Petlja unazad
for (let i = 5; i > 0; i--) {
  console.log(i);
}
//Petlja parna

for (let i = 2; i <= 10; i = i + 2) {
  console.log(i);
}
//forEach
const niz=['hippo','lion','fish'];
niz.forEach(animal=>{
  console.log(animal);
});
//Zadatak 1
for(let i=1;i<=5;i++){
 
  for(let j=1;j<=5;j++){
    console.log(i  * j);

  }
  console.log('*****')
}
//Zadatak 2
let brojevi=[23,25,5,26,832];
for(let i=0;i< brojevi.length;i++){
  if(brojevi[i]%2==0){
    console.log("PARAN");
  }
  else{
    console.log("NEPARAN");
  }
}

brojevi.forEach(broj=>{
  if(broj%2==0){
    console.log("Broj je paran" + broj);
  }else{
    console.log("Broj je neparan" + broj);
  }

 
});




//13.8
let zvjezdica= "*"
for(let i=1; i<=6;i++){
    console.log(zvjezdica);
    zvjezdica=zvjezdica+"*";
}
//Funkcije
function pozdraviti(ime,spol){
  if(spol===0){
  console.log("Dobrodosla");
  }else{
    console.log("Dobrodosao");
  }

    console.log("Drago nam je da ste se pridruzili!");
}
pozdraviti("Mujo",0);
pozdraviti("Aisa",1);
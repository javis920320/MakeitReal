/**
 * index.js
 * - All our useful JS goes here, awesome!
 */

console.log("JavaScript is amazing!");

dato=Count("HolaH mundo HipermegaH","H");

console.log(dato);

function Count(str,char){

 	return   str.split(char).length-1;

 }



arreglo = new Array(1,20,60,23,16,2,6,9);


 miarreglo=Filter(arreglo);
 console.log(miarreglo);



  function Filter(arreglo){
  	res= new
  	Array();


	longitud=arreglo.length;


	for (var i =0; i<=longitud;i++ ) {
	
		if(arreglo[i]>=10){
		res.push(arreglo[i]);

		}
									}
  	return res;

  
  }


 
   var  hipo=hipotenusa(3,4);
    console.log('Hipotesusa='+hipo);

 function hipotenusa(a,b){
 	return Math.hypot(a,b)
 }
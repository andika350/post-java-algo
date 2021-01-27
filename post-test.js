let hari = prompt ("Masukan hari: ")

if (hari == 'senin') {
	console.log("selasa");
} else if (hari == 'selasa'){
	console.log('rabu');
} else if (hari == 'rabu'){
	console.log("kamis");
} else if (hari =='kamis'){
	console.log("jumat");
} else if (hari == 'jumat'){
	console.log("sabtu");
} else if (hari == 'sabtu'){
	console.log("minggu");
} else {
	console.log("senin");
}

let days = prompt("Input name of the day: ")

switch (days) {
	case 'senin':
		alert("selasa")
		break;
	case 'selasa':
		alert("rabu")
		break;
	case 'rabu':
		alert("kamis")
		break;
		case 'kamis':
		alert("jumat")
		break;
		case 'jumat':
		alert("sabtu")
		break;
		case 'sabtu':
		alert("minggu")
		break;
	default:
		alert("senin")
		break;
}

console.log("---------------------------------")

function deretGenap(numb){
  var numb;
  var i=0;
  for (i = 1; i<=numb; i++){
    if(i==1){
      console.log("0 \n,")
    } 
    else if (i%2==0){
    console.log(i)
    } else {
    	console.log(",")
    }
  }
} 

deretGenap(10);
console.log("---------------------------------")

function deretGanjil(numb){
  var numb;
  var i=0;
  for (i = 1; i<=numb; i++){
    if(i%2==0){
      console.log(",")
    } 
    else {
    console.log(i)
    }
  }
}

deretGanjil(11);
console.log("---------------------------------")


function* Prime(number) { 
  const infinit = !number && number !== 0;
  const re = /^.?$|^(..+?)\1+$/;  
  let actual = 1;
 
  while (infinit || number-- ) {
      if(!re.test('1'.repeat(actual)) == true) yield actual;
      actual++
  };
};

let [...primers] = Prime(29);
console.log(primers);

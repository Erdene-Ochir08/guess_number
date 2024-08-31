// for loop -> davtalt
for(var i=1; i<=10; i++){
	console.log("hello"+i);
}
// i=1 -> 1<=10 -> true -> hello1 -> 2
// i=2 -> 2<=10 -> true -> hello2 -> 3
// i=11 -> 11<=10 -> false -> stop
for(var i=10; i>=1; i--){
	console.log(i);
}
// 1-20 хүртлэх тэгш тоонуудыг хэвлэнэ үү
for(var i=1; i<=20; i++){
	if(i%2==0){
		console.log("tegsh:"+i);
	}
}
// 1-30 хүртлэх 3,5-д зэрэг хуваагддаг тоонуудыг хэвлэнэ үү
for(var i=1; i<=30; i++){
	if(i%3==0 && i%5==0){
		console.log(i);
	}
}
// Гараас тоо оруулахад тэр тооны хүрдыг хэвлэх код бичнэ үү / Жнь 5 -> 5 Х 1 = 5
//            5 X 2 = 10 ...
var too=2;
for(var i=1; i<=10; i++){
	console.log(too+"X"+i+"="+too*i);
}
// 1-ээс 10 хүртлэх тоонуудын нийлбэр болон үржвэрийг олно уу
var niilber=0;
for(var i=1;i<=10;i++){
	niilber = niilber + i;
}
console.log(niilber);

// рандомоор 1-10 хоорондох тоог таана 
// 3 удаа таах эрхтэй 
// зөв таавал ялна 
// Их тоо эсвэл бага тоо оруулвал хинт өгдөг болгох
// Хэддэх удаагийн оролдлогоор хожиж байгааг гаргаж ирэх
// 3 удаа буруу таахад ялагдлаа гэж гаргаж ирэх  
var random = Math.floor(Math.random()*10)+1;
console.log(random);
for(var i=1;i<=3;i++){
	var myNumber = +prompt("1-10 hurtelh too taana uu");
	if(random==myNumber){
		alert("You win of "+i+" try" );
		break;
	}else if(random>myNumber){
		alert("Lower");
	}else if(random<myNumber){
		alert("Greather");
	}else{
		alert("Wrong number");
	}
	if(i==3){
		alert("You lose");
	}
}

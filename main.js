/*asynchronous programming*/

function func1(){
	setTimeout(function(){
		console.log('Func1 result');
	}, 5000);
}

 function func2(){
 	setTimeout(function(){
 		console.log('Func2 result');
 	}, 3000);
 }

 function func3(){
 	console.log('Func3 result');
 }

 func1();
 func2();
 func3();
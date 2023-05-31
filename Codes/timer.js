
var id1 = setInterval(function() {  
    console.log("setInterval: Hey! 1 millisecond completed!..");   
   }, 1000);

var id2 = setTimeout(function() {
    console.log("setTimeout: Hey! 1000 millisecond completed!..");  
    }, 1000);
// You can also use recursive setTimeout function to call again and again.

var recursive = function () {  
    console.log("Hey! 1000 millisecond completed!..");   
    setTimeout(recursive,1000);  
}  
recursive();

clearTimeout(id1);
clearInterval(id2);
//your JS code here. If required.
let levelElement = document.getElementById("level");

let levelCount = 1;

while(true){
	if(levelElement.tagName === "HTML"){
		break;
	}	
	levelElement = levelElement.parentNode;
	levelCount ++;
}
  
alert(`The level of the element is: ${levelCount}`);


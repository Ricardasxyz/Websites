var pageCounter = 1;
var btn = document.getElementById("btn");
var animalContainer = document.getElementById("animal-info");

btn.addEventListener("click",function(){
	var ourRequest = new XMLHttpRequest();
ourRequest.open('GET','https://learnwebcode.github.io/json-example/animals-' + pageCounter+'.json');

ourRequest.onload = function(){
	var ourData = JSON.parse(ourRequest.responseText);
	renderHTML(ourData);
};
 ourRequest.send();
 pageCounter++;
 if(pageCounter >3){
 	btn.classList.add("hide-me");
 }
});

function renderHTML(data) {
	var htmlString = "";

	for(r=0;r<data.length;r++){
		htmlString += "<p>"+data[r].name + " is a "+  data[r].species+"</p>";
	}
	animalContainer.insertAdjacentHTML('beforeend',htmlString);
}
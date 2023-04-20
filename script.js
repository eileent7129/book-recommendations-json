let myContent = document.getElementById("main");

let bookDatabase = [
{
	"title": "On Rotation",
	"image": "images/rotation.jpg",
	"author": "Shirlene Obuobi",
	"genre": "Romance",
	"rating": "4.4/5",
	"summary": "Click to Read" 
},
{
	"title": "Legendborn",
	"image": "images/legendborn.jpg",
	"author": "Tracy Deonn",
	"genre": "Fantasy",
	"rating": "4.7/5",
	"summary": "Click to Read" 
},
{
	"title": "Children of Blood and Bone",
	"image": "images/blood-and-bone.jpg",
	"author": "Tomi Adeyemi",
	"genre": "Fantasy",
	"rating": "4.6/5",
	"summary": "Click to Read" 
},
{
	"title": "The Blood Trials",
	"image": "images/the-blood-trials.jpg",
	"author": "N.E. Davenport",
	"genre": "Fantasy, Science Fiction",
	"rating": "4.6/5",
	"summary": "Click to Read" 
},
{
	"title": "Vanessa Jared's Got a Man",
	"image": "images/man.jpg",
	"author": "LaQuette",
	"genre": "Romance",
	"rating": "4.2/5",
	"summary": "Click to Read" 
},
{
	"title": "What a Match",
	"image": "images/what-a-match.jpg",
	"author": "Mimi Grace",
	"genre": "Romance",
	"rating": "4.4/5",
	"summary": "Click to Read" 
},
{
	"title": "Fake It Till You Bake It",
	"image": "images/fake-it.jpg",
	"author": "Jamie Wesley",
	"genre": "Romance",
	"rating": "4.2/5",
	"summary": "Click to Read" 
},
{
	"title": "Honey and Spice",
	"image": "images/honey-spice.jpg",
	"author": "Blou Babalola",
	"genre": "Romance",
	"rating": "4.3/5",
	"summary": "Click to Read" 
},
{
	"title": "Before I Let Go",
	"image": "images/before.jpg",
	"author": "Kennedy Ryan",
	"genre": "Romance",
	"rating": "4.7/5",
	"summary": "Click to Read" 
},
];

for (var i = 0; i < bookDatabase.length; i++){
	createElement(bookDatabase[i]);
}

function createElement(bookDetails) {
	let bookContainer = document.createElement("DIV");
	bookContainer.classList.add('bookStyle');

	let myImg = document.createElement("IMG");
	myImg.classList.add("myImage");
	myImg.src = bookDetails['image'];
	bookContainer.appendChild(myImg);

	let myText = document.createElement("DIV");
	myText.classList.add("text");
	bookContainer.appendChild(myText);

	let title = document.createElement("P");
	title.innerText= "Title: " + bookDetails["title"];
	myText.appendChild(title);

	let author = document.createElement("P");
	author.innerText= "Author: " + bookDetails["author"];
	myText.appendChild(author);

	let genre = document.createElement("P");
	genre.innerText= "Genre: " + bookDetails["genre"];
	myText.appendChild(genre);

	let rating = document.createElement("P");
	rating.innerText= "Rating: " + bookDetails["rating"];
	myText.appendChild(rating);

	let summary = document.createElement("A");
	summary.innerText = "Summary: " + bookDetails["summary"];
	myText.appendChild(summary);

	myContent.appendChild(bookContainer);

}
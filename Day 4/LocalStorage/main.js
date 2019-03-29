
/*
// turn our "template" into html
var source = $('#store-template').html();

// compile our template html using handlebars
var template = Handlebars.compile(source);

// fill our template with information
var newHTML = template({ item: "bread", price: "3" });

// append our new html to the page
$('.items').append(newHTML);

var newHTML2 = template({ item: "Cheese", price: "10" });

$('.items').append(newHTML2);


var menuData = {
  menu: [
    { name: "Google", link: "http://google.com" },
    { name: "Facebook", link: "http://facebook.com" },
    { name: "Instagram", link: "http://nstagram.com" },
    { name: "Twitter", link: "http://twitter.com" },
  ]
};

var source = $('#menu-template').html();
var template = Handlebars.compile(source);
var newHTML = template(menuData);

// append our new html to the page
$('.menu').append(newHTML);

*/
// -----------------------------
// LOCALSTORAGE
// -----------------------------
localStorage.clear()
localStorage.setItem("wisdom", [])

// localStorage.personalData = JSON.stringify({
//   averageTimeOnSite: {unit: "hr", amt: 9},
//   probabilityOfFriends: 0.02,
//   commonKeywords: ["salsa for one", "1 vs. none Chess"]
// })


$("#btn-2").on("click", function() {
  localStorage.clear()
})

$("#btn-3").on("click", function() {
  console.log(localStorage)
})
$("#btn-1").on("click", function() {
  let input = $("#input-1").val()
  console.log("added: " + input)

  const curText =  {"text": input}

  const data = localStorage.getItem("wisdom")
  // data.wisdom.push(curText)

   console.log(data)



})
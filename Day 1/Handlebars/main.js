// turn our "template" into html
var source = $('#store-template').html();

// compile our template html using handlebars
var template = Handlebars.compile(source);

// fill our template with information
var newHTML = template({item: "bread", price: "3"});

// append our new html to the page
$('.items').append(newHTML);

var newHTML2 = template({item: "Cheese", price: "10"});

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

// ------------------------------
//  TIPS : 
// ------------------------------

// how to handle plain array of strings:
/*
    <ul class="people_list">
        {{#each people}}
         <li>{{this}}</li>
        {{/each}}
    </ul>

    when used with this context:

 {
    people: [
      "Yehuda Katz",
      "Alan Johnson",
      "Charles Jolley"
    ]
  }

    will result in:

<ul class="people_list">
  <li>Yehuda Katz</li>
  <li>Alan Johnson</li>
  <li>Charles Jolley</li>
</ul>

*/
const fetch = function () {
    $.ajax({
        method: "GET",
        url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:1440633908',
        success: function (data) {
            console.log(data)
        },
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}


const xhr = $.get("http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=0VAgeMJdWguJJvXHoLSnrCHHZTlHBGly&limit=5");
xhr.done(function(data) { 
    console.log("success got data:", data.data[0]); 

    const newHTML = '<iframe src="' + data.data[0].embed_url  +  '" frameborder="0"></iframe>'

    $( "#gifs" ).append( newHTML );
});
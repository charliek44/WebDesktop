$(document).ready();

$section = $(".section");

$section.on("click", function() {
    $.ajax({
        url: "https://market.mashape.com/andruxnet/random-famous-quotes",
        success: function(quoteData) {
            var post = quoteData.shift();
            $('#quote-quote').text(post.quote);
            $('#quote-author').html(post.author);
        },
        error: function() {
            alert("error");
        },
        headers: {
            'X-Mashape-Key': 'XYveoSjCABmshwrDJFgmIsbWZKMdp1rSeVIjsnrf8gABgYLbVM',
            'Accept': 'application/json'
        },
        cache: false,
        type: 'GET'
    });
});
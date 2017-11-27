$(document).ready();

$section = $(".section");

$section.on("click", function() {
    $.ajax({
        url: "https://ron-swanson-quotes.herokuapp.com/v2/quotes",
        success: function(quoteData) {
            var post = quoteData[0];
            $('#quote-quote').text(post);
        },
        error: function() {
            alert("error");
        },
        cache: false,
        type: 'GET'
    });
});
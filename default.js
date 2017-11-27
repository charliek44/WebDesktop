$(document).ready();

$section = $(".section");

$section.on("click", function() {
    $.ajax({
        url: "https://api.icndb.com",
        success: function(quoteData) {
            var post = quoteData.shift();
            $('#quote-quote').text(post.joke);
            $('#quote-author').html("Chuck Norris");
        },
        error: function() {
            alert("error");
        },
        cache: false,
        type: 'GET'
    });
});
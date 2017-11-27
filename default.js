$(document).ready();

$section = $(".section");

$section.on("click", function() {
    $.ajax({
        url: "http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1",
        success: function(quoteData) {
            var post = quoteData.shift();
            $('#quote-quote').text(post.title);
            $('#quote-author').html(post.content);
        },
        error: function() {
            alert("error");
        },
        cache: false,
        type: 'GET'
    });
});
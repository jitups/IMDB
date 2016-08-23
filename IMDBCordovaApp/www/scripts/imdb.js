

function getMovieDetails() {

    var movieName = $('#movie-name-input').val();

    var queryString =
        'http://www.omdbapi.com/?s='
        + movieName;

    $.ajax({
        url: queryString,
        type: 'GET',
        dataType: 'json',
        success: function (result) {
            $('#error-msg').hide();
            $('#movie-data').show();

            $('#name').html(result.Search[0].Title);
            $('#year').html(result.Search[0].Year);


        },
        error: function () {
            $('#movie-data').hide();
            $('#error-msg').show();
            $('#error-msg').html('Error fetching data');
        }
    });

    return false;
}



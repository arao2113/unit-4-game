$(document).ready(function() {
    // Create variables for game
    var wantedScore = "";
    var yourScore = "";
    var wins = 0;
    var losses = 0;
    var gameOver = false;

    function newGame () {
        gameOver = false;

        // Set goal score of a random number between 19 - 120
        wantedScore = Math.floor(Math.random() * 101) + 19;

        yourScore = 0;

        // Setting each crystal to a random number between 1 - 12
        $(".crystal").each(function() {
            var value = Math.floor(Math.random() * 12) + 1;
            $(this).attr('data-value', value);
            $(this).attr('title', value);
        });

        $('#wantedScore').html(wantedScore);
        $('#yourScore').html(yourScore);
        $('#wins').html(wins);
        $('#losses').html(losses);
    };

    newGame ();

    $('.crystal').on('click', function() {
        if (gameOver) {
            return;
        }
        if (yourScore < wantedScore) {
            yourScore += parseInt($(this).attr('data-value'));
            $('#yourScore').html(yourScore);
        };

        if (yourScore === wantedScore) {
            gameOver = true;
            wins++;
            $('#wins').html(wins);
        };

        if (yourScore > wantedScore) {
            gameOver = true;
            losses++;
            $('#losses').html(losses);
        };
    });

    

    

});
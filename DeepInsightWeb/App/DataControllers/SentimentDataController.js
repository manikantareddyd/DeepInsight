var genSentiment = function(sentiment){
    console.log(sentiment);
    $('#sentiment').html('');
    $('<h1>',
        { html: 'Sentiment ' + parseInt((parseFloat(sentiment)*100)).toString() + '\%' }, '</h1>').appendTo('#sentiment');
}
var genSentiment = function(sentiment){
    console.log("Sentiment: "+sentiment);
    var percentage = parseInt((parseFloat(sentiment) * 100));
    var bin = parseInt(percentage/25);
    
    switch (bin) {
        case 0:
            var fodder = "Let go of anger, you must.";
            break;
        case 1:
            var fodder = "When you look at the dark side, careful you must be... for the dark side looks back.";
            break;
        case 2:
            var fodder = "A neutral one, You are.";
            break;
        case 3:
            var fodder = "The force is strong with this one.";
            break;
        default:
            var fodder = "I don't know what to say";
            break;

    }
    var str = '<div class="josefin">' +
                    '<h2>Sentiment</h1><h4>I have a feeling that your document is</h4>' +
                    '<h2>' +
                        percentage.toString() + '\% positive' +
                    '</h2><br>' +
                    
                    
                    '<p> Master Yoda: '+
                        fodder +
                    '</p>'
               '</div>';

    $('#sentiment').html(str);
}
var genTopicsListCard = function (topicsList) {

    var count;
    var rowCount;
    var html = '<h1><b>The Context</b></h1><h4>I think that you are trying to write about...</h4>';
    for (count = 0; count <= parseInt(topicsList.length/12); count++) {
        html = html + '<div class="row">'
        for (rowCount = 0; rowCount < 12; rowCount++) {
            if (((count * 12) + rowCount) >= topicsList.length) break;
            html = html +
                   '<p class="col-xs-6" style="text-align:center">' +
                        topicsList[(count*12)+rowCount] +
                    '</p>'
            ;
        }
        html = html + '</div>'
    }
    html = html + '<h4>Head on to <a data-toggle="tab" href="#wikipedia"> wikipedia</a> tab to peek at short summary of all</h4>';
    $('#topics-list').html(html);
    console.log("Generated Topics Card");
}
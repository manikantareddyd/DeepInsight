var genWeather = function (position) {
    var data = JSON.stringify(false);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = true;

    xhr.addEventListener("readystatechange", function () {
        if (this.readyState === 4) {
            //console.log(JSON.parse(this.response));
            genWeatherHtml(JSON.parse(this.response));
        }
    });

    var lat = position.coords.latitude;
    var long = position.coords.longitude;
    var query = encodeURI('select * from weather.forecast where woeid in (SELECT woeid FROM geo.places WHERE text="(' + lat + ',' + long + ')")');
    xhr.open("POST", "https://query.yahooapis.com/v1/public/yql?q="+query+"&format=json");
    xhr.setRequestHeader("content-type", "application/json");
    xhr.setRequestHeader("cache-control", "no-cache");
    xhr.setRequestHeader("postman-token", "0cfeeee4-f50b-dc41-a91a-245eb7edb81e");

    xhr.send(data);
}

function getLocation() {
    console.log("hhhh");
    if (navigator.geolocation) {
        console.log("prrr");
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        console.log("oops");
    }
}

function showPosition(position) {
    console.log(position,"oooo");
    genWeather(position);
}

genWeatherHtml = function (data) {
    var city = data.query.results.channel.location.city;
    var region = data.query.results.channel.location.region;
    var gif = data.query.results.channel.item.description
    //console.log(gif)
    var link = gif.slice(9, 100).split('\n')
    //console.log(link[0].split('"')[1]);
    var cardHtml = link[0] +'<p><b>Location</b></p><p>We are somewhere in '+city+', '+region+'.<br>' + gif.slice(0, gif.length - 4);
    $('#weather-page').html(cardHtml);
    var whtml = '<img width="80px" style="padding-right:20px;padding-top:20px" src="' + link[0].split('"')[1] + '" />' +
                '<p>Mostly Cloudy</p>';
    $('#weather').html(whtml);
}
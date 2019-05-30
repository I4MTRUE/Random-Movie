function pad(number, length) {
  var str = '' + number;
  while(str.length < length) {
    str = '0' + str;
  }
 return str;
}
  var movie = pad(Math.floor((Math.random() * 2155529) + 1), 7);
  $.getJSON("http://www.omdbapi.com/?i=tt"+movie+"&apikey=525ac35b", function(data) {
    var title = data.Title;
    var year = data.Year;
    var rating = data.imdbRating;
    var actors = data.Actors;
    var plot = data.Plot;
    var link = 'http://www.imdb.com/title/tt'+movie+'/';
    $("#title").text(title);
    $("#year").text(year);
    $("#rating").text(rating);
    $("#actors").text(actors);
    $("#plot").text(plot);
    $("#link a").attr("href", link);
  })

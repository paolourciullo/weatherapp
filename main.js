$(document).ready(function () {
  $('#weather').click(function () {
    var zipcode = $('#zipcode').val();

    if (zipcode != '') {
      $.ajax({
        url:
          'https://api.openweathermap.org/data/2.5/weather?zip=' +
          zipcode +
          '&units=imperial' +
          '&appid=b22ef57471e99e0551f0828734a0ad18',
        //dsa;lkfja;sldkjfa;slkdjfa;lskdjfa;lskdjf;alskdjfasdf

        type: 'GET',
        dataType: 'jsonp',
        success: function (data) {
          console.log(data);
          $('#city-name').text(data.name);
          $('#lat').text(data.coord.lat);
          $('#lon').text(data.coord.lon);
          $('#weather-main').text(data.weather[0].main);
          $('#weather-desc').text(data.weather[0].description);
          $('#wind-speed').text(data.wind.speed);
          $('#wind-degree').text(data.wind.deg);
          $('#temp-current').text(data.main.temp);
          $('#temp-min').text(data.main.temp_min);
          $('#temp-max').text(data.main.temp_max);
          $('#humidity').text(data.main.humidity);
        },
        error: function (xhr) {
          var errorMessage = xhr.status + ': ' + xhr.statusText;
          alert('Error - ' + errorMessage);
        },
      });
    }
  });
});

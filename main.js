// console.log('in Javascript');
$(document).ready(function () {
  //   console.log('in ready function');
  $('#weather').click(function () {
    // console.log('in click event');
    var zipcode = $('#zipcode').val();

    if (zipcode != '') {
      //   console.log('before call');
      $.ajax({
        url:
          'https://api.openweathermap.org/data/2.5/weather?zip=' +
          zipcode +
          '&units=imperial' +
          '&appid=b22ef57471e99e0551f0828734a0ad18',
        // url:"https://api.openweathermap.org/data/2.5/weather?zip=06468&units=imperial&appid=b22ef57471e99e0551f0828734a0ad18",
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
        error: function (xhr, status, error) {
          var errorMessage = xhr.status + ': ' + xhr.statusText;
          alert('Error - ' + errorMessage);
        },
      });
    }
  });
});

// error: function (xhr, status, error) {
//     var errorMessage = xhr.status + ' + xhr.responseText';
//     alert('Error - ' + errorMessage);
// }
// }

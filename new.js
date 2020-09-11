

$("form").submit(function(e) {
    var search = $(".search-box").val();
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&appid=d9ebd8b1796c0fce382ada45bdf9ce19`;
    var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "Dcember"];
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
    e.preventDefault();
    $.getJSON(url, function (data) {
        $(".weather").html(data.weather[0].description);
        var temp = parseInt(data.main.temp) - 273;
        var minTemp = parseInt(data.main.temp_min) - 273;
        var maxTemp = parseInt(data.main.temp_max) - 273;
        $(".temp").html(`${temp}<span>&#8451;</span>`);
        var country = data.sys.country;
        $(".city").html(`${search.toUpperCase()}, ${country}`);
        $(".hi-low").html(`${minTemp}&#8451; / ${maxTemp}&#8451;`);
        var date = new Date().getDate();
        var day = new Date().getDay();
        var month = new Date().getMonth();
        var year = new Date().getFullYear();
        $(".date").html(`${days[day]} ${date} ${months[month]} ${year}`)
    });
})
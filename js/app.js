function weather(){
    let request = new XMLHttpRequest;

    request.open("GET" , "https://api.openweathermap.org/data/2.5/weather?q=mashhad&units=metric&lang=fa&appid=ea61c92ea6a3ca68936acd85e65eca2a");

    request.onreadystatechange = function(){
        if(request.readyState == 4 && this.status == 200){
           let weather_op =  this.responseText;
           weather_op = JSON.parse(weather_op);
           console.log(weather_op);
           let backround = null;
           switch (weather_op.weather[0].icon) {
               case "01d" || "01n":
                   backround = "background-1";
                   break;
                   case "02d" || "02n":
                    backround = "background-2";
                    break;
                    case "03d" || "03n":
                        backround = "background-3";
                        break;
                        case "04d" || "04n":
                            backround = "background-4";
                            break;
                            case "09d" || "09n":
                                backround = "background-5";
                                break;
                                case "10d" || "10n":
                                    backround = "background-6";
                                    break;
                                    case "11d" || "11n":
                                        backround = "background-7";
                                        break;
                                        case "13d" || "13n":
                                            backround = "background-8";
                                            break;
                                            case "50d" || "50n":
                                                backround = "background-9";
                                                break;
               default:
                backround = "backround-1";
                   break;
           }
           let src = "http://openweathermap.org/img/wn/"+weather_op.weather[0].icon+"@2x.png"
           document.querySelector(".img-background").classList.add(backround);
           document.querySelector(".weather-icon").innerHTML = "<img src='"+src+"' alt=''><p>"+weather_op.weather[0].description+"</p>";
           document.querySelector(".name-city").innerHTML = weather_op.name;
           let humidity = weather_op.main.humidity;
           document.querySelector(".humidity").innerHTML = humidity;
           document.querySelector(".temp").innerHTML = Math.round(weather_op.main.temp) + "°"; 
        }
    }
    request.send();
}
weather();
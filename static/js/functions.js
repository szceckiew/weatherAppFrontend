var daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

export function date_info(date){
    var temp_date = new Date(date);
    
    var temp_date_parts = date.split('-');

    return [daysOfWeek[temp_date.getDay()],temp_date_parts[2] + '.' + temp_date_parts[1] + '.' + temp_date_parts[0]];
}

export function img_number(code){
    if (code == 0 || code == 1){
        var img_path = "../img/0.png"
    }
    else if (code == 2){
        var img_path = "../img/2.png"
    }
    else if (code == 3){
        var img_path = "../img/3.png"
    }
    else if (code >= 45 && code <= 48){
        var img_path = "../img/45.png"
    }
    else if ((code >= 51 && code <= 57) ||(code >= 80 && code <= 82)){
        var img_path = "../img/51.png"
    }
    else if (code >= 61 && code <= 67){
        var img_path = "../img/61.png"
    }
    else if ((code >= 71 && code <= 77) ||(code >= 85 && code <= 86)){
        var img_path = "../img/51.png"
    }
    else if (code >= 95 && code <= 99){
        var img_path = "../img/95.png"
    }

    return(img_path);
}

export function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

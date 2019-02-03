document.getElementById('form').onsubmit = function (event) {
    event.preventDefault();

    const API_KEY = 'your_api_key';
    let value = document.getElementById('value').value;
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + value + '&units=metric&APPID=' + API_KEY;
    
    fetch(url).then(function (request) {
        request.json().then(function (json) {
            console.log(json);
            let temp = [
                'Pour : ' + json.name,
                'La température est de : ' + json.main.temp,
                'La température maximale est de : ' + json.main.temp_max,
                'La température minimale est de : ' + json.main.temp_min
            ];

            let list = document.getElementById("list");
            list.innerHTML = '';
            for (let item of temp) {
                let itemTemp = document.createElement("li");
                itemTemp.classList.add('list-group-item');
                itemTemp.innerText = item;
                list.appendChild(itemTemp);
            }
        });
    });
};
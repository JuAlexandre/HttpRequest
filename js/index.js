document.getElementById('form').onsubmit = function (event) {
    event.preventDefault();
    let value = document.getElementById('value').value;
    let url = 'http://api.openweathermap.org/data/2.5/weather?q=' + value + '&units=metric&APPID=e0a85eda475eda928d34caa96b233c4d';
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
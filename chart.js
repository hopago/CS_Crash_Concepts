import seoulWeatherData from "./weather.json" with {type: "json"};

window.onload = async () => {
    const ctx = document.getElementById('myChart').getContext("2d");
    const ret = seoulWeatherData;
    const opt = {
        year: "numeric",
        month: "numeric",
        day: "numeric",
        hour: "numeric"
    };

    ret.hourly.time = ret.hourly.time.map(e => {
        return new Intl.DateTimeFormat("ko-KR", opt).format(new Date(e))
    });
    const data = {
        labels: ret.hourly.time,
        datasets: [
            {
                label: "서울 온도 예측 모델",
                data: ret.hourly.temperature_2m,
                borderColor: "rgb(255, 99, 132)",
                backgroundColor: "rgba(255, 99, 132, 0.5)",
                pointStyle: "circle",
                pointRadius: 10,
                pointHoverRadius: 15,
            }
        ]
    }

    new Chart(ctx, {
        type: "line",
        data,
    });
}
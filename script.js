const container = document.querySelector(".container")

if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(function(position){
        const { latitude, longitude } = position.coords;
        fetch(`https://api.pray.zone/v2/times/today.json?latitude=${latitude}&longitude=${longitude}`)
        .then((response) => response.json())
        .then(data=>{
            let dates = data.results.datetime[0]
            const html =`
            <div class="vaqtlar">
                <div class="kun">
                    <b>${dates.date.gregorian}</b>
                    <p>${dates.date.hijri}</p>
                </div>
                <div class="vaqt">
                    <p>Bomdod</p>
                    <p>${data.results.datetime[0].times.Fajr}</p>
                </div>
                <div class="vaqt">
                    <p>Peshin</p>
                    <p>${data.results.datetime[0].times.Dhuhr}</p>
                </div>
                <div class="vaqt">
                    <p>Asr</p>
                    <p>${data.results.datetime[0].times.Asr}</p>
                </div>
                <div class="vaqt">
                    <p>Shom</p>
                    <p>${data.results.datetime[0].times.Maghrib}</p>
                </div>
                <div class="vaqt">
                    <p>Hufton</p>
                    <p>${data.results.datetime[0].times.Isha}</p>
                </div>
    
            </div>
            `
            container.insertAdjacentHTML("beforeend", html)
        })
    })
}
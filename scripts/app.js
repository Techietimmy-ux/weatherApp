// just  bunch of query selectors used in this project
const form = document.querySelector('form')
const cardDetails = document.querySelector('.details')
const card = document.querySelector('.card')
const dayImage = document.querySelector('img.time')
const iconImage = document.querySelector('.icon img')







//getting user input and calling the update ui fuction based on the data recieved upon calling the update city function
form.addEventListener('submit', e => {

    e.preventDefault()

    const cityName = form.city.value.trim()



    updateCity(cityName).then(data => {
        console.log(data);
        updateUI(data)
    }).catch(err => console.log(err))


    if (card.classList.contains('d-none')) {
        card.classList.remove('d-none')
    }

    form.reset()
})

//updating city
const updateCity = async (cityName) => {
    const cityData = await getCity(cityName)
    const weather = await getWeather(cityData.Key)

    return { cityData, weather }
}


// function for updating ui
const updateUI = (data) => {

    const cityData = data.cityData
    const weather = data.weather

    cardDetails.innerHTML = `
    <div class="text-muted text-uppercase text-center details">
                <h5 class="my-3">${cityData.EnglishName}</h5>
                <div class="my-3">${weather.WeatherText}</div>
                <div class="display-4 my-4">
                    <span>${weather.Temperature.Metric.Value}</span>
                    <span>&deg;c</span>
                </div>
            </div>
    `

    let daySRC;

    if (weather.IsDayTime === true) {
        daySRC = 'img/day.svg'
    } else {
        daySRC = 'img/night.svg'
    }
    dayImage.setAttribute('src', daySRC)

    const iconSRC = `img/icons/${weather.WeatherIcon}.svg`

    iconImage.setAttribute('src', iconSRC)


}

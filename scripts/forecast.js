const APIkey = 'dgpnRTOift02lk1Poe11C4Svp28njXdJ'






// getCity information
const getCity = async (cityName) => {

    const resourceURL = 'https://dataservice.accuweather.com/locations/v1/cities/search'
    const query = `?apikey=%09${APIkey}&q=${cityName}`


    const response = await fetch(resourceURL + query)
    const data = await response.json()
    return data[0]


}



//get weather information
const getWeather =async(cityKey)=>{
    const resourceURL =`https://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${APIkey}`

    const response =await fetch(resourceURL)
    const data = await response.json()

    return data[0]

}

const API_KEY = 'c899df01a007e998373f0576e8f261c7'
export const SearchInfo =  () => {
    const inputElement = document.querySelector('.banner-input')
    const valueCity = inputElement.value
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${valueCity}&appid=${API_KEY}&units=metric`)
    .then(responsive => responsive.json())
        .then(info => console.log(info))
}

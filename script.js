const dataDiv = document.getElementById("data");
const searchInput = document.getElementById("searchbox");
const submitBtn = document.getElementById("submit");

async function getData(searchTerm){
    try {
        const response = await fetch(`https://api.weatherapi.com/v1/current.json?key=03649ca297624afda6973803240907&q=${searchTerm}`, {mode: "cors"});
        const data = await response.json();
        const city = data.location.name;
        const country = data.location.country;
        const time = data.location.localtime;
        const tempC = data.current.temp_c;
        const tempF = data.current.temp_f;

        dataDiv.textContent = `The temperature in ${city}, ${country} is ${tempC} Celsius or ${tempF} Fahrenheit  `
    } catch (error) {
        dataDiv.textContent = `Sorry ${error}`;
    } 
}


submitBtn.addEventListener("click", () => {
    const searchValue = searchInput.value.trim();

    if(searchValue){
        getData(searchValue)
    } else {
        dataDiv.textContent = `Please enter a search value`
    }
})
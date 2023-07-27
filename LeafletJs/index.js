
const cityname="Latur"

const url = `https://forward-reverse-geocoding.p.rapidapi.com/v1/search?q=${cityname}&accept-language=en&polygon_threshold=0.0`;

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '4638530cfemshb5f9bea28be8a72p1d9bb8jsnef9a6f833608',
        'X-RapidAPI-Host': 'forward-reverse-geocoding.p.rapidapi.com'
    }
};

const getendpoints = async () => {
    try {
        const response = await fetch(url, options);
        const result = await response.json();
        console.log(result);
        console.log();
    } catch (error) {
        console.error(error);
    }
}

getendpoints();
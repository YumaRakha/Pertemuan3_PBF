export default async function handler(req, res) {
        const Response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=malang&appid=d13edd750f2b2332fb6c88c2d3510114&units=metric');
        const Data = await Response.json();

        res.status(200).json({
            city: Data.name,
            temperature: Data.main.temp,
            description: Data.weather[0].description
        });
        // console.log("Response dari OpenWeather:", status); // Debugging
}


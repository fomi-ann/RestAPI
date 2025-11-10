const displayCars = [{
    Car:{
        carBrand:"BWM",
        color:"Violet",
        "Tinted windows": true,
        //Teks
        carNumber:"ABC-123",
        //Number
        carSeatNr:5,
        interior: {
            "Pet friendly": false,
            color: "Orange"
        }
    }
},
{
    Car:{
        carBrand:"Tesla",
        color:"Blue",
        "Tinted windows": false,
        //Teks
        carNumber:"321-CBA",
        //Number
        carSeatNr:18,
        interior: {
            "Pet friendly": true,
            color: "Navy"
        }
    }
}]

document.getElementById("app").innerHTML =
`
<div id="json">
    <h1> Car 1 properties </h1>
    <p>Car Brand: ${displayCars[0].Car.carBrand}</p>
    <p>Color: ${displayCars[0].Car.carcolor}</p>
    <p>Windows: ${displayCars[0].Car["Tinted windows"]}</p>
    <p>Car number: ${displayCars[0].Car.carNumber}</p>
    <p>Seat number: ${displayCars[0].Car.carSeatNr}</p>
    <h2>Car Interior:</h2>
    <p>Sitting covers : ${displayCars[0].Car.interior["Pet friendly"]}</p>
    <p>Intrior color : ${displayCars[0].Car.interior.color}</p>

    <h1> Car 2 properties </h1>
    <p>Car Brand: ${displayCars[1].Car.carBrand}</p>
    <p>Color: ${displayCars[1].Car.carcolor}</p>
    <p>Windows: ${displayCars[1].Car["Tinted windows"]}</p>
    <p>Car number: ${displayCars[1].Car.carNumber}</p>
    <p>Seat number: ${displayCars[1].Car.carSeatNr}</p>
    <h2>Car Interior:</h2>
    <p>Sitting covers : ${displayCars[1].Car.interior["Pet friendly"]}</p>
    <p>Intrior color : ${displayCars[1].Car.interior.color}</p>
</div>
`
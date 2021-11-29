export function distance(firstLatitude,
    secondLatitude, firstLongitude, secondLongitude) {
    // Radius of earth in miles.
    let radius = 3956;

    //convert to radians
    firstLongitude = convertToRadians(firstLongitude);
    secondLongitude = convertToRadians(secondLongitude);
    firstLatitude = convertToRadians(firstLatitude);
    secondLatitude = convertToRadians(secondLatitude);

    // calcuclate difference between second longitude and first longitude
    let longitudeDifference = secondLongitude - firstLongitude;
    // calcuclate difference between second latitude and first latitude
    let latitudeDifference = secondLatitude - firstLatitude;

    // caluculate the great circle difference using haversine formula
    let greatCircleDifference = haversine(longitudeDifference, latitudeDifference, firstLatitude, secondLatitude);

    // Round the greatCircleDifferene to work with our c++ program
    greatCircleDifference = Math.round(greatCircleDifference);

    // return haversineOutput times radius
    return (greatCircleDifference * radius);
}

// convert given number to radians
function convertToRadians(num) {
    num = num * Math.PI / 180;
    return num;
}

//Haversines formula to calculate the great circle difference between our latitiudes and longitudes
//sin(dlat/2)^2 + cos(lat1) * cos(lat2) * sin(dlon/2)^2
function haversine(longDifference, latDifference, lat1, lat2) {
    let result = Math.pow(Math.sin(latDifference / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(longDifference / 2), 2);
    result = 2 * Math.asin(math.sqrt(result));
    return result;
}
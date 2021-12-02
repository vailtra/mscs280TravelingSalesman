module.exports = function(Body) {
    //create dynamic two d array
    var city=[]
    var long =[]
    var lat =[]
    var dist =[]
 
    for(var i = 0; i<Body.key.length; i++){
        city[i] = JSON.stringify(Body.key[i])
    }
    for(var i = 0; i<Body.longitude.length; i++){
        long[i] = JSON.stringify(Body.longitude[i])
    }
    for(var i = 0; i<Body.latitude.length; i++){
        lat[i] = JSON.stringify(Body.latitude[i])
    }

    
    
    for (var i = 0; i < Body.key.length; i++) {
        var arr = []
        for (var j = 0; j < Body.key.length; j++) {
            arr[j]= distance(Body.latitude[i], Body.latitude[j], Body.longitude[i], Body.longitude[j]);
            
               
        } 
        dist[i] = arr
    }

    // for(var i = 0; i < dist.length; i++){
    //     console.log(dist[i])
    // }

    //return dist
}

function distance(firstLatitude,
    secondLatitude, firstLongitude, secondLongitude) {
    
        console.log(firstLatitude + " " +
            secondLatitude + " " + firstLongitude + " " +secondLongitude);
    
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
    //greatCircleDifference = Math.round(greatCircleDifference);

    // return haversineOutput times radius
    return (Math.round(greatCircleDifference * radius));
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
    result = 2 * Math.asin(Math.sqrt(result));
    return result;

}


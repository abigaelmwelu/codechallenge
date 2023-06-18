function speedDetector(speed) {
    // Function that takes the drivers speed and calculate demerit pint based on how the driver goes above the speed limit 
    if (speed < 70) {//if the driver is under the speed limit print "OK"
        return "OK";
    } else {
        const demeritPoint = Math.round((speed - 70) / 5);
        // Calculate the demerit points bases on how much the driver exceeds the speed limit 
        if (demeritPoint > 12) {
            // If the demerit points exceeds 12 output"License suspended"
            return "License suspended";
        } else {
            // If the demerit points are 12 or less, print the demerit points
            return demeritPoint;
        }
    }
}

const speedPrompt = prompt("Enter speed");
// Prompt the user to enter the speed

const speed = speedPrompt;
console.log(speedDetector(speed));
// Call the speedDetector function with the parsed speed value as an argument
// and log the result to the console
class commonMethods {
    getCurrentDate() {
        // Create a new Date object
        let currentDate = new Date();

        // Extract the current date, month, and year
        let day = currentDate.getDate();
        let month = currentDate.getMonth() + 1; // Note: month is zero-indexed, so January is 0
        let year = currentDate.getFullYear();

        // Ensure day and month are two digits (pad with leading zeros if necessary)
        day = day < 10 ? `0${day}` : day;
        month = month < 10 ? `0${month}` : month;

        // Output the current date in the desired format YYYY-DD-MM
        let formattedDate = `${year}-${day}-${month}`;
        console.log(`Current date in YYYY-DD-MM format: ${formattedDate}`);

        return this.getCurrentDate()
    }
}
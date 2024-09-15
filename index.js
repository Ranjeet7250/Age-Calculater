// Get references to the input and result elements
let userinput = document.getElementById("date");
userinput.max = new Date().toISOString().split("T")[0];
let result = document.getElementById("result");

// Function to calculate age
function calculateAge() {
    // Get the user's birthdate from the input
    let BirthDate = new Date(userinput.value);

    // Extract day, month, and year from the birthdate
    let d1 = BirthDate.getDate();
    let m1 = BirthDate.getMonth() + 1;
    let y1 = BirthDate.getFullYear();

    // Get the current date
    let today = new Date();

    // Extract day, month, and year from the current date
    let d2 = today.getDate();
    let m2 = today.getMonth() + 1;
    let y2 = today.getFullYear();

    // Initialize variables for the calculated age
    let d3, m3, y3;

    // Calculate the year difference
    y3 = y2 - y1;

    // Calculate the month difference
    if (m2 >= m1) {
        m3 = m2 - m1;
    } else {
        y3--;
        m3 = 12 + m2 - m1;
    }

    // Calculate the day difference
    if (d2 >= d1) {
        d3 = d2 - d1;
    } else {
        m3--;
        d3 = getDaysInMonth(y1, m1) + d2 - d1;
    }

    // Adjust month and year if necessary
    if (m3 < 0) {
        m3 = 11;
        y3--;
    }

    // Display the result
    result.innerHTML = `You are ${y3} years, ${m3} months, and ${d3} days old.`;
}

// Helper function to get the number of days in a given month and year
function getDaysInMonth(year, month) {
    return new Date(year, month, 0).getDate();
}

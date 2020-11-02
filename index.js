// Export a month number extraction function
module.exports.getMonthNumber = function getMonthNumber() {
    // Get the current month number, zero-based
    const currentMonthNumZeroBased = (new Date()).getMonth();

    // Add one to the current month number so it is one-based
    const currentMonthNumOneBased = currentMonthNumZeroBased + 1;

    // Return the current month number in one-based form
    return currentMonthNumOneBased;
};

// Export the number of the fifth month
module.exports.getFifthMonthNumber = function getFifthMonthNumber() {
    // Get the number 5
    const numberFive = require('five')();

    // Return the number 5
    return numberFive;
}
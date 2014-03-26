var Calculator = (function() {
    // Private stuff up here
    var calculatorAddValue = 2 + 2;
    var calculatorSubtractValue = 5 - 2;
    var calculatorMultiplyValue = 3 * 3;
    var calculatorDivideValue = 3 / 3;
    // Public methods here
    return {
        addValueAtoValueB: function(result) {
            var num = parseInt(result);
            if (isNaN(num) == true) {
                throw new Error ("Not a number");
            }
            num = calculatorAddValue;
            return Math.round(num);
        },
        subtractValueAFromValueB: function(result) {
            var num = parseInt(result);
            if (isNaN(num) == true) {
                throw new Error ("Not a number");
            }
            num = calculatorSubtractValue;
            return Math.round(num);
        },
        multiplyValueAbyValueB: function(result) {
            var num = parseInt(result);
            if (isNaN(num) == true) {
                throw new Error ("Not a number");
            }
            num = calculatorMultiplyValue;
            return Math.round(num);
        },
        divideValueAbyValueB: function(result) {
            var num = parseInt(result);
            if (isNaN(num) == true) {
                throw new Error ("Not a number");
            }
            num = calculatorDivideValue;
            return Math.round(num);
        }
    }
}());

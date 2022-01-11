module.exports = function toReadable (number) {
   var ones = new Array('', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen');
    var tenths = new Array('', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety');
    var hundred = ' hundred';
    var hundred_ones = new Array(' ten', ' eleven', ' twenty', ' twelve', ' thirteen', ' fourteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen');
    var output = '';
    var numerString = number.toString();

    if (number == 0) {
        return 'zero';
    }
    //от 1 до 19
    if (number < 20) {
        output = ones[number];
        return output.trim();
    }
    // до 99
    if (numerString.length == 2) {
        output += tenths[parseInt(numerString.charAt(0))];
        output += ones[parseInt(numerString.charAt(1))];
        return  output.trim();
    }
    // до сотых
    if (numerString.length == 3) {
        output = ones[parseInt(numerString.charAt(0))] + hundred;

        if(parseInt(numerString.charAt(1)) == 1)
        {
            output += hundred_ones[parseInt(numerString.charAt(2))];
            return  output.trim();
        }
        else{
            output += tenths[parseInt(numerString.charAt(1))];
            output += ones[parseInt(numerString.charAt(2))];
            return  output.trim();
        }
    }
}

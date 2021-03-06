function Fraction(num, denom) {

    // Property Variables
    var numerator = num;
    var denominator = denom;

    // -------------------------------Gets/Sets
    this.getNumerator = function() {
        return numerator;
    };

    this.getDenominator = function() {
        return denominator;
    };



    this.simplify = function() {

    var a,b,x;
    // get the fraction to be simplified
    a = this.getNumerator();
    b = this.getDenominator();
    // determine greatest common denominator
    x = this.gcd(a, b);

    numerator = a / x;
    denominator = b / x;

    };

    this.gcd = function(a, b) {
        var gcd;
        if (b === 0) {
            return a;
        } else {
            return this.gcd(b, a % b);
        }

    };
}

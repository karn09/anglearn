angular.module('invoice2', ['finance2'])
  // .controller('CONTROLLER_NAME', ['DEPENDENCY_NAME', function(OBJ FROM DEP) { CODE }])
  .controller('InvoiceController', ['currencyConverter', function(currencyConverter) {
    this.qty = 1;
    this.cost = 2;
    this.inCurr = 'EUR';;
    this.currencies = currencyConverter.currencies;

    this.total = function total (outCurr) {
      // call .convert method decl in dep, pass args: amount, incurr, outcurr
      return currencyConverter.convert(this.qty * this.cost, this.inCurr, outCurr)
    };

    this.pay = function pay () {
      window.alert("Thanks");
    };
    
  }]);

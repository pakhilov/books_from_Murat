/**
 *  RxJS in Action
 *  Listing 4.5
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
const Money = function (currency, val) {
  return {
    value: function () {
      return val;
    },
    currency: function () {
      return currency;
    },
    toString: function () {
      return `${currency} ${val}`;
    }
  };
};

const newRandomNumber = () => Math.floor(Math.random() * 100);

const USDMoney = Money.bind(null, 'USD');

Rx.Observable.interval(2000)
  .timeInterval()
  .skip(1)
  .take(5)
  .do(int =>
    console.log(`Checking every ${int.interval} milliseconds`))
  .map(int => new USDMoney(newRandomNumber()))
  // WARNING: NOT IN TEXT
  // Added to address #11 (https://github.com/RxJSInAction/rxjs-in-action/issues/11)
  .map(usd => usd.toString())
  .forEach(console.log);

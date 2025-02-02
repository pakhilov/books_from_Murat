/**
 *  RxJS in Action
 *  Listing 5.4
 *  Note: make sure you have turned on CORS sharing in you browser so that you can make
 *  cross-site requests
 *  @author Paul Daniels
 *  @author Luis Atencio
 */

// describes the process of taking a two-second poll and mapping a function to fetch stock data—as

/** comma seperated value: creates an array from a csv string*/
const csv = str => str.split(/,\s*/);

// Proxying around CORS -> http://download.finance.yahoo.com
const webservice = '/external/yahoo/d/quotes.csv?s=$symbol &f=sa&e=.csv';

const ajax = url => new Promise((resolve, reject) => {
    let req = new XMLHttpRequest();
    req.open('GET', url);
    req.onload = function() {
      if(req.status == 200) {
        let data = req.responseText;
        resolve(data);
      }
      else {
        reject(new Error(req.statusText));
      }
    };
    req.onerror = function () {
      reject(new Error('IO Error'));
    };
    req.send();
  });

const requestQuote$ = symbol =>
     Rx.Observable.fromPromise(
       // use promise based ajax() to query the service
       ajax(webservice.replace(/\$symbol/, symbol)))
     .map(response => response.replace(/"/g, ''))
     .do(console.log)
     .map(csv); // clean up and parse the output


const twoSecond$ = Rx.Observable.interval(2000);

// requestQuote$ and  twoSecond$ are 2 streams that need to be combined
// mergeMap does the magic: observable1$.mergeMap(() => observable2$)
const fetchDataInterval$ = symbol => twoSecond$
     .mergeMap(() => requestQuote$(symbol));

fetchDataInterval$('FB')
  .subscribe(([symbol, price]) =>
      console.log(`${symbol}, ${price}`)
  );

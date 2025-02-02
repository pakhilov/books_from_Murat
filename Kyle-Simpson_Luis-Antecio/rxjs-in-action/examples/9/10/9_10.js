/**
 *  RxJS in Action
 *  Listing 9.10
 *  @author Paul Daniels
 *  @author Luis Atencio
 */
mocha.setup({ ui: 'bdd', checkLeaks: true });

const expect = chai.expect;
const assert = chai.assert;

function assertDeepEqual(actual, expected) {
  expect(actual).to.deep.equal(expected);
}

describe('Marble test with debounceTime', function () {
  it('Should delay all element by the specified time', function () {
    let scheduler = new Rx.TestScheduler(assertDeepEqual);

    // Creates a stream with the first element on the second frame
    let source = scheduler.createHotObservable(
      '-a--------b------c----|');

      // You debounce with 50 ms (5 frames), the first input after the fifth frame.
    let expected = '------a--------b------(c|)';

    // Passes in the virtual scheduler into debounceTime()
    let r = source.debounceTime(50, scheduler);
    scheduler.expectObservable(r).toBe(expected);
    scheduler.flush();
  });
});

mocha.run();

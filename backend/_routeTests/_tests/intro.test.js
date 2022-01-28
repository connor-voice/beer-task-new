describe('My tests', function() {
    
    before(function() {
        console.log("Will run before the test in the describe");
    });
    
    it('prints out hello world', function() {
        console.log("hello world");
    });

    after(function() {
        console.log("Will run after test in the describe");
    });

    beforeEach(function() {
        console.log("Will run before each test in the describe");
    });

    afterEach(function() {
        console.log("Will run after each test in the describe");
    });

    //only and skip aswell
});

describe('second tests', function() {
    it('prints number 5', function() {
        console.log(5);
    });
});


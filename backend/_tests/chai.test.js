const {expect} = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

describe('Basic testing', function() {
    it('should return 2', function() {
        //arrange
        let num1 = 1;
        let num2 = 1;
        let sum;

        //act - what are we testing
        sum = num1 + num2;

        //assert - uses expect from our chai
        expect(sum).to.equal(2);
    });
});

describe('Multiply 5 and 4', function() {
    it('should return 20', function() {
        //arrange
        let num1 = 5;
        let num2 = 4;
        let sum;

        //act - what are we testing
        sum = num1 * num2;

        //assert - uses expect from our chai
        expect(sum).to.equal(20);
    });
});

describe('Take a name and return it', function() {
    it('should return hello + name', function() {
        //arrange
        let name;

        //act - what are we testing
        name = "Harry";

        //assert - uses expect from our chai
        expect(`hello ${name}`).to.equal('hello Harry');
    });
});

describe('Should return the value of 1 + 2 + 3 + 4', function() {
    it('should return 10', function() {
        //arrange
        let num1 = 1;
        let num2 = 2;
        let num3 = 3;
        let num4 = 4;
        let sum;

        //act - what are we testing
        sum = num1 + num2 + num3 + num4;

        //assert - uses expect from our chai
        expect(sum).to.equal(10);
    });
});

describe('The text "hello" should be a string', function() {
    it('should return a string', function() {
        //arrange
        let myString;

        //act - what are we testing
        myString = "Hello";

        //assert - uses expect from our chai
        expect(typeof myString).to.equal('string');
    });
});

describe('The number 12 should not be undefined', function() {
    it('should not return undefined', function() {
        //arrange
        let num1;

        //act - what are we testing
        num1 = 12;

        //assert - uses expect from our chai
        expect(num1).not.undefined;
    });
});

describe('An object should have a property of "name"', function() {
    it('should return property of name', function() {
        //arrange
        let myObject;

        myObject = {
            name: String
        }

        //act - what are we testing
        myObject.name = "Harry";

        //assert - uses expect from our chai
        console.log(myObject);
        //expects the oject to have a key value of name
        expect(myObject).to.have.key("name");
        //expecting the name to be harry
        expect(myObject.name).to.equal("Harry");
    });
});


describe('The text should be null', function() {
    it('should return null', function() {
        //arrange
        let myText;

        //act - what are we testing
        myText = null;

        //assert - uses expect from our chai
        expect(myText).to.equal(null);
    });
});

describe('Check if 5 is odd', function() {
    it('should return true', function() {
        //arrange
        let num = 5;
        let odd;

        //act - what are we testing
        if (num % 2 == 0) {
            odd = false;
        } else {
            odd = true;
        }

        //assert - uses expect from our chai
        expect(odd).to.equal(true);
    });
});
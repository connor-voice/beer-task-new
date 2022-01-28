const { expect } = require('chai');
const chai = require('chai');
const chaiHttp = require('chai-http');

const { Beer } = require('../model/beer.js');

const server = require('../index.js');

chai.use(chaiHttp);

describe('route testing', function () {
    
    let testID;

    before(function(done){
        console.log("Setup of environment");

        // Generate a new object
        const testBeer = new Beer({
            'beerName': 'test name',
            'description': 'test beer',
            'imageUrl': 'test URL',
            'abv': 5,
            'alcoholFree': false,
            'beerType': 'test type'
        });
        testBeer.save().then((result) => {
            // Saving the _id of the lizard we create so other tests can delete it
            testID = result._id.toString();
            done();
        });
    });

    // Adding an after function that will clear ALL DATA 
    after(function(done) {
        Beer.deleteMany({}).then(() => {
            console.log("Everything deleted!");
            done();
        });
    });

    const testBeer = {
        beerName: 'test name',
        description: 'test beer',
        imageUrl: 'test URL',
        abv: 5,
        alcoholFree: false,
        beerType: 'test type'
    };

    //pass in done to let chai know when the async code is done
    it('Should respond with "test path successful"', function (done) {

        //arrange - tell chai to use index.js
        chai.request(server)

            //act - use server to make a get request with '/test'
            .get('/beer/test')

            // .end used for async code, when youve ended the request either error or give response
            .end((error, response) => {

                if (error) {
                    console.log("Error occurred");
                    done(error);
                };

                //assert - whatever the request returns we test here. testing we will
                //get some text back with the response Test patj successful.
                expect(response).to.have.status(201);
                expect(response).to.not.be.null;
                expect(response).to.have.property('text', "test path successful");
                done();

            });

    });

    //POST TEST - CREATE
    it('Should post beer to the db and return <beerName>', function (done) {

        chai.request(server)

            .post('/beer/create').send(testBeer)

            .end((error, response) => {

                if (error) {
                    console.log("Error occurred");
                    done(error);
                };

                expect(response).to.have.status(201);
                expect(response).to.not.be.null;
                expect(response).to.have.property('text', `${testBeer.beerName} has been added to the database`);
                done();
            });

    });

    //GET TEST - READ ALL
    it('Should return all from db', function(done) {

        chai.request(server)

            .get('/beer/readAll')

            .end((error, response) => {

                if (error) {
                    console.log("Error occurred");
                    done(error);
                };

                const responseBody = response.body;
                expect(response).to.have.status(200);
                expect(responseBody).to.not.be.null;

                responseBody.map((beer) => {
                    expect(beer).to.be.a("Object");
                    expect(beer).to.contain.keys("beerName");
                });
                done();
            });
        
    });

});
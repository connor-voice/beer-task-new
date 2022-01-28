const router = require('express').Router();

const res = require('express/lib/response');
const { Error } = require('mongoose');
// const { request } = require('express');
const { Beer } = require('../model/beer.js');

router.get('/test', (request, response) => {
    response.status(201).send("test path successful");
})

//create
router.post('/create', (request, response, next) => {
    console.log(request.body);
    const beer = new Beer(request.body);
    beer.save().then((result) => {
        response.status(201).send(`${result.beerName} has been added to the database`);
    })
    .catch((error)=> {
        const err = new Error('abv must be a number no % sign.');
        next(err);
    })
});

//read all
router.get('/readAll', (request, response, next) => {
    Beer.find((error, beers) => {
        response.status(200).send(beers);
    })
});

//read id
router.get('/read/:id', (request, response, next) => {
    Beer.findById(request.params.id, (error, beer) => {
        response.status(200).send(beer);
    })
});

//update
router.put('/update/:id', (request, response) => {
    const body = request.body;
    const id = request.params.id;
    console.log(request.params.id);
    console.log(body);
    // response.status(201).send(`${id} has been updated`);
   
   
    //const beer = new Beer(body);

    // beer.save().then((result) => {
    //     response.status(201).send(`${result.beerName} updated`);
    // });

    Beer.findByIdAndUpdate(id, body, (error) => {
        response.status(201).send("has been updated");
    });   

    // const beer = new Beer(request.body);
    // beer.save().then((result) => {
    //     response.status(201).send(`${result.beerName} has been added to the database`);
    // });
});

//delete
router.delete('/delete/:id', (request, response, next) => {
    Beer.findByIdAndDelete(request.params.id, (error) => {
        response.status(202).send("deleted");
    })
});

module.exports = router;
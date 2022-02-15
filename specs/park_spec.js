const assert = require('assert');
const Park = require('../models/park.js');
const Dinosaur = require('../models/dinosaur.js');

describe('Park', function() {

  let park;
  let dinosaur;
  let dinosaur2;

  beforeEach(function () {
    park = new Park('Jurassic park', 25.00, []);
    dinosaur = new Dinosaur('Veloceraptor', 'carnivore', 100)
    dinosaur2 = new Dinosaur('pterodactyl', 'carnivore', 50)
  })

  it('should have a name', function(){
    assert.strictEqual( park.name , "Jurassic park");
  });

  it('should have a ticket price', function(){
    assert.strictEqual( park.ticketPrice, 25.00);
  });

  it('should have a collection of dinosaurs', function(){
    assert.deepStrictEqual( park.dinosaurCollection , []);
  });

  it('should be able to add a dinosaur to its collection', function(){
    park.addDinosaur(dinosaur);
    assert.deepStrictEqual( park.dinosaurCollection , [dinosaur] );
  });

  it('should be able to remove a dinosaur from its collection', function(){
    park.addDinosaur(dinosaur);
    park.removeDinosaur(dinosaur);
    assert.deepStrictEqual( park.dinosaurCollection, []);
  });

  it('should be able to find the dinosaur that attracts the most visitors', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    actual = park.attractsMostVisitors();
    assert.deepStrictEqual(actual , dinosaur);
  });

  it('should be able to find all dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    actual = park.findDinoBySpecies('Veloceraptor');
    assert.deepStrictEqual(actual, [dinosaur] );
  });

  it('should be able to calculate the total number of visitors per day', function (){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    actual = park.totalNumberVisitors();
    assert.strictEqual( actual, 150 );
  });

  it('should be able to calculate the total number of visitors per year', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    actual = park.totalNumberVisitorsPerYear();
    assert.strictEqual(actual, 54750);
  });

  it('should be able to calculate total revenue for one year', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    actual = park.calculateTotalYearRevenue();
    assert.strictEqual(actual, 1368750); 
  });

  it('should be able to remove dinosaurs of a particular species', function(){
    park.addDinosaur(dinosaur);
    park.addDinosaur(dinosaur2);
    actual = park.findDinosaursBySpecies('pterodactyl');
    assert.deepStrictEqual(actual, [dinosaur2]);
  });

});

const Park = function(name, ticketPrice){
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.dinosaurCollection = []
}

Park.prototype.addDinosaur = function(dinosaur){
    this.dinosaurCollection.push(dinosaur);
}

Park.prototype.removeDinosaur = function(dinosaur){
    this.dinosaurCollection.pop(dinosaur);
}

Park.prototype.attractsMostVisitors = function(){
    // loop over the list of dinosaurs
    // find the one with the highest dinosaur.guestsAttractedPerDay
    // return the dinosaur object
    let highestAttractedVisitors = 0;
    let dinosaurHighest = null;

    for(dinosaur of this.dinosaurCollection){
        if(dinosaur.guestsAttractedPerDay > highestAttractedVisitors){
            highestAttractedVisitors = dinosaur.guestsAttractedPerDay;
            dinosaurHighest = dinosaur;
        };
    }
    return dinosaurHighest;
}

Park.prototype.findDinoBySpecies = function(species){
    // for dinosaur in dinosaur collection,
    // if dinosaur.species equals species, add it to a list
    // return the list
    let dinoBySpecies = [];
    for(dinosaur of this.dinosaurCollection){
        if(dinosaur.species == species){
            dinoBySpecies.push(dinosaur);
        };
    };
    return dinoBySpecies;
}

Park.prototype.totalNumberVisitors = function(){
    let totalNumberVisitors = 0;
    for(dinosaur of this.dinosaurCollection){
        totalNumberVisitors += dinosaur.guestsAttractedPerDay;
    };
    return totalNumberVisitors;
}

Park.prototype.totalNumberVisitorsPerYear = function(){
    // Assumes the park is open 365 days a year
    let totalVisitsByDay = this.totalNumberVisitors();
    let totalVisitsByYear = totalVisitsByDay * 365;
    return totalVisitsByYear;
}

Park.prototype.calculateTotalYearRevenue = function(){
    let totalVisitsByYear = this.totalNumberVisitorsPerYear();
    let totalYearRevenue = totalVisitsByYear * this.ticketPrice;
    return totalYearRevenue;
}

Park.prototype.findDinosaursBySpecies = function(species){
    let dinosaursBySpecies = this.dinosaurCollection.filter(function(dinosaur){
        return dinosaur.species == species;
    });
    return dinosaursBySpecies;
}

module.exports = Park;
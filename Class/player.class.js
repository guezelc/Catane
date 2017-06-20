/*
 * Author:
 * - Clement Guezel
 * - Virgil Lacondemine
 */
function Player(color ,developpementCards) {

    /**
     * Player's color
     */
    var color;

    /**
     * Player's colony table
     * @type Array
     */
    var T_colony;

    /**
     * Player's city table
     * @type Array
     */
    var T_city;

    /**
     * Player's road table
     * @type Array
     */
    var T_road;
    
    /*
     * The isntance of the developpementCards of the game
     * @type DeveloppementCards
     */
    var developpementCards;
    
    /**
     * Player's available colony number
     * @type Number
     */
    var nbColonyAvailable;

    /**
     * Player's available city number
     * @type Number
     */
    var nbCityAvailable;

    /**
     * Player's available road number
     * @type Number
     */
    var nbRoadAvailable;

    /**
     * Player's resource card table
     * @type type
     */
    var T_resource_card;

    /**
     * Player's development card table
     * @type Array
     */
    var T_developpement_card;

    //Object var init
    this.color = color;
    this.T_road = [];
    this.T_colony = [];
    this.T_city = [];
    this.T_resource_card = {
        corn: 1,
        ore: 0,
        sheep: 1,
        wood: 4,
        clay: 4
    };
    this.T_developpement_card = [];
    this.nbColonyAvailable = 5;
    this.nbCityAvailable = 4;
    this.nbRoadAvailable = 13;
    this.developpementCards = developpementCards;

    /**
     * Give resources to the player in function of diceRoll
     * 
     * @param {type} diceRoll
     */
    this.giveResourcesCards = function (diceRoll) {

        for (var i = 0; i < this.T_colony.length; i++) {
            if (this.T_colony[i] !== null && this.T_colony[i].top.haveHexagonWithNumber(diceRoll)) {
                var hexagones = this.T_colony[i].top.getHexagonsByNumber(diceRoll);
                for (var j = 0; j < hexagones.length; j++)
                    this.T_resource_card[hexagones[j]]++;
            }
        }

        for (var i = 0; i < this.T_city.length; i++) {
            if (this.T_city[i] !== null && this.T_city[i].top.haveHexagonWithNumber(diceRoll)) {
                var hexagones = this.T_city[i].top.getHexagonsByNumber(diceRoll);
                for (var j = 0; j < hexagones.length; j++)
                    this.T_resource_card[hexagones[j]] = this.T_resource_card[hexagones[j]] + 2;
            }
        }
    };

    /**
     * Add road buy by the player in T_Road
     * 
     * @param {type} side
     * @returns {undefined}
     */
    this.build_Road = function (side) {

        var road = new Road(this.color, side);
        road.side.occupy = road;
        this.T_road.push(road);
        this.nbRoadAvailable--;
        this.T_resource_card.wood--;
        this.T_resource_card.clay--;

    };

    /*
     * 
     */
    this.build_City = function () {

    };

    /*
     * 
     */
    this.build_Colony = function () {

    };

    /**
     * Player can buy road if they have resources and place to put it on.
     * 
     * @returns {Array|Player.getRoadBuildableSides.filtredBuildableSides}
     */
    this.buy_Road = function () {

        if (this.T_resource_card.clay >= 1 && this.T_resource_card.wood >= 1
                && this.nbRoadAvailable > 0)
            var roadBuildableSides = this.getRoadBuildableSides(this.T_colony, this.T_city, this.T_road);

        return roadBuildableSides;
        //this.build_Road();
    };

    /*
     * 
     */
    this.buy_City = function () {
        this.build_City();
    };

    /*
     * 
     */
    this.buy_Colony = function () {
        if (this.T_resource_card.wood > 0 && this.T_resource_card.clay > 0
                && this.T_resource_card.sheep > 0 && this.T_resource_card.corn
                && this.nbColonyAvailable > 0)
            var colonyBuildableTops = this.getColonyBuildableTops(this.T_road);

        return colonyBuildableTops;

        //this.build_Colony();
    };

    /*
     * buy a developpement card
     */
    this.buy_DeveloppementCard = function () {        
        if (this.T_resource_card.ore >= 1 && this.T_resource_card.corn >= 1 && this.T_resource_card.sheep >= 1 && this.developpementCards.developpementCardsAvailable > 0) {
            this.T_resource_card.ore--;
            this.T_resource_card.corn--;
            this.T_resource_card.sheep--;
            this.TakeADeveloppementCard();
        }
    };
    
    /*
     * Take a developpement card
     */
    this.TakeADeveloppementCard = function() {
        this.T_developpement_card.push(this.developpementCards.takeACard(this));
    };

    /**
     * Get all player's buildable sides
     * 
     * @param {type} colonys
     * @param {type} citys
     * @param {type} roads
     * 
     * @returns {Array}
     */
    this.getRoadBuildableSides = function (colonys, citys, roads) {

        var buildableSides = [];
        var filtredBuildableSides = [];

        for (var i = 0; i < colonys.length; i++)
            buildableSides = buildableSides.concat(colonys[i].top.getBuildableSides());

        for (var i = 0; i < citys.length; i++)
            buildableSides = buildableSides.concat(citys[i].top.getBuildableSides());

        for (var i = 0; i < roads.length; i++)
            buildableSides = buildableSides.concat(roads[i].side.getBuildableSides(this.color));


        for (var i = 0; i < buildableSides.length; i++) {
            if (buildableSides[i] !== null) {
                filtredBuildableSides.push(buildableSides[i]);
                for (var j = i + 1; j < buildableSides.length; j++) {
                    if (buildableSides[i] === buildableSides[j])
                        buildableSides[j] = null;
                }
            }
        }

        return filtredBuildableSides;
    };

    this.getColonyBuildableTops = function (roads) {
        
        var buildableTops = [];
        var filtredBuildableTops = [];
        
        for(var i = 0; i < roads.length; i++){
            buildableTops.push(roads[i].side.top1.isBuildable());
            buildableTops.push(roads[i].side.top2.isBuildable());
        }
        
        for (var i = 0; i < buildableTops.length; i++) {
            if (buildableTops[i] !== null && buildableTops[i] !== false) {
                filtredBuildableTops.push(buildableTops[i]);
                for (var j = i + 1; j < buildableTops.length; j++) {
                    if (buildableTops[i] === buildableTops[j])
                        buildableTops[j] = null;
                }
            }
        }
        
        return filtredBuildableTops;
    };
}
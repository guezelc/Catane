/*
 * Author:
 * - Clement Guezel
 * - Virgil Lacondemine
 */
function Player(color) {

    /*
     * Player's color
     */
    var color;

    /*
     * Player's colony table
     */
    var T_colony;

    /*
     * Player's city table
     */
    var T_city;

    /*
     * Player's road table
     */
    var T_road;

    /*
     * Player's colony table
     */
    var nbColonyAvailable;

    /*
     * Player's city table
     */
    var nbCityAvailable;

    /*
     * Player's road table
     */
    var nbRoadAvailable;

    /*
     * Player's resource card table
     */
    var T_resource_card;

    /*
     * Player's development card table
     */
    var T_developpement_card;

    //Object var init
    this.color = color;
    this.T_road = [null, null, null, null, null, null, null, null, null, null, null, null, null];
    this.T_colony = [null, null, null, null, null];
    this.T_city = [null, null, null, null];
    this.T_resource_card = {
        corn: 0,
        ore: 0,
        sheep: 0,
        wood: 0,
        clay: 0
    };
    this.T_developpement_card = [];
    this.nbColonyAvailable = 5;
    this.nbCityAvailable = 4;
    this.nbRoadAvailable = 13;
    
    /**
     * Give resources to the player in function of diceRoll
     * 
     * @param {type} diceRoll
     */
    this.giveResourcesCards = function (diceRoll) {
        
        for(var i = 0; i < this.T_colony.length; i++){
            if(this.T_colony[i] !== 0 && this.T_colony[i].top.haveHexagonWithNumber(diceRoll)){
                var hexagones = this.T_colony[i].top.getHexagonsByNumber(diceRoll);
                for(var j = 0; j < hexagones.length; j++){
                    this.T_resource_card[hexagones[j]]++;
                }
            }
        }
        
        for(var i = 0; i < this.T_city.length; i++){
            if(this.T_city[i] !== 0 && this.T_city[i].top.haveHexagonWithNumber(diceRoll)){
                var hexagones = this.T_city[i].top.getHexagonsByNumber(diceRoll);
                for(var j = 0; j < hexagones.length; j++){
                    this.T_resource_card[hexagones[j]] = this.T_resource_card[hexagones[j]] + 2;
                }
            }
        }
    };

    /*
     * 
     */
    this.build_Road = function ()
    {

    };

    /*
     * 
     */
    this.build_City = function ()
    {

    };

    /*
     * 
     */
    this.build_Colony = function ()
    {

    };

    /*
     * 
     */
    this.buy_Road = function ()
    {
        if(this.T_resource_card.clay >=1 && this.T_resource_card.wood >=1 )
        {
            if(this.isAbleToBuildRoad())
            {
                
            }
        }
        this.build_Road();
    };

    /*
     * 
     */
    this.buy_City = function ()
    {
        this.build_City();
    };

    /*
     * 
     */
    this.buy_Colony = function ()
    {
        this.build_Colony();
    };

    /*
     * 
     */
    this.buy_Developpement_Card = function ()
    {
        this.piocher_Developpement_Card();
    };
    
    this.isAbleToBuildRoad = function()
    {
        if(nbRoadAvailable === 0)
        {
            return false;
        }
        for(var road = 0; road < this.T_road.length; road++)
        {
            
        }
    };
}
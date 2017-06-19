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
     * Player's resource card table
     */
    var T_resource_card;

    /*
     * Player's development card table
     */
    var T_developpement_card;

    //Object var init
    this.color = color;
    this.T_road = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.T_colony = [0, 0, 0, 0, 0];
    this.T_city = [0, 0, 0, 0];
    this.T_resource_card = {
        corn: 0,
        ore: 0,
        sheep: 0,
        wood: 0,
        clay: 0
    };
    this.T_developpement_card = [];
    
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
    this.put_Road = function () {

    };

    /*
     * 
     */
    this.put_City = function () {

    };

    /*
     * 
     */
    this.put_Colony = function () {

    };

    /*
     * 
     */
    this.acheter_Road = function () {
        this.put_Road();
    };

    /*
     * 
     */
    this.acheter_City = function () {
        this.put_City();
    };

    /*
     * 
     */
    this.acheter_Colony = function () {
        this.put_Colony();
    };

    /*
     * 
     */
    this.acheter_Developpement_Card = function () {
        this.piocher_Developpement_Card();
    };
}
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
    this.T_resource_card = [];
    this.T_developpement_card = [];

    /*
     * 
     */
    this.put_Road = function ()
    {

    };

    /*
     * 
     */
    this.put_City = function ()
    {

    };

    /*
     * 
     */
    this.put_Colony = function ()
    {

    };

    /*
     * 
     */
    this.acheter_Road = function ()
    {
        this.put_Road();
    };

    /*
     * 
     */
    this.acheter_City = function ()
    {
        this.put_City();
    };

    /*
     * 
     */
    this.acheter_Colony = function ()
    {
        this.put_Colony();
    };

    /*
     * 
     */
    this.acheter_Developpement_Card = function ()
    {
        this.piocher_Developpement_Card();
    };
}
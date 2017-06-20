/*
 * Author:
 * - Clement Guezel
 * - Virgil Lacondemine
 */
function City(color) {
    
    /*
     * The city's color
     */
    var color;
    
    /*
     * The top where the city are put
     */
    var top;

    this.color = color;
    this.top = null;
    
    /*
     * Display this city pawn
     */
    this.display = function ()
    {
        return '<img width="30px" height="35px" src="Picture/Pawn/' + this.color + '/City.png">';
    }
}
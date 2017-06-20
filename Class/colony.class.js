/*
 * Author:
 * - Clement Guezel
 * - Virgil Lacondemine
 * 
 * @param {type} color
 * @returns {Colony}
 */
function Colony(color, top) {

    /*
     * The colony's color
     */
    var color;

    /*
     * The top where the colony are put
     * @type type
     */
    var top;

    this.color = color;
    this.top = null;

    /*
     * Display this colony pawn
     * @returns {String}
     */
    this.display = function ()
    {
        return '<img width="20px" height="25px" src="Picture/Pawn/' + this.color + '/Colony.png">';
    };
}
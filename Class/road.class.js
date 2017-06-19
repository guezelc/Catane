/*
 * Author:
 * - Clement Guezel
 * - Virgil Lacondemine
 */
function Road(color, tilt, side) {

    /*
     * Road's color
     */
    var color;

    /*
     * Road's tilt
     */
    var tilt; // right, vertical, left

    /*
     * Road's side
     */
    var side;

    //Object var init
    this.color = color;
    this.tilt = tilt;
    this.side = side;

    /*
     * Display road pawn
     */
    this.display = function ()
    {
        return '<img src="Picture/Pawn/' + this.color + '/Road/' + this.tilt + '.png">';
    };
}
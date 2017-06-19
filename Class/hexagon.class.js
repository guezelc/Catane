/*
 * Author:
 * - Clement Guezel
 * - Virgil Lacondemine
 */
function Hexagon(type, tilt = 0) {

    /*
     * Type of this Hexagon
     */
    var type;

    /*
     * Tilt of this Hexagon
     */
    var tilt;

    /*
     * Top table of this Hexagon to know each pawn put in.
     */
    var T_Top;

    /*
     * Side table of this Hexagon to know each Hexagon connected with
     */
    var T_Side;

    /*
     * ???
     */
    var positionOnMap;
    
    // Object var init
    this.T_Top = {"N": null, "N-E": null, "S-E": null, "S": null, "S-W": null, "N-W": null};
    this.T_Side = {"N-E": null, "E": null, "S-E": null, "S-W": null, "W": null, "N-W": null};
    this.type = type;
    this.tilt = tilt;
    this.positionOnMap = null; // 0 if top, 1 if midle, 2 if bot

    /*
     * Display this Hexagon
     */
    this.display = function display()
    {
        if (this.tilt === 0)
        {
            return '<img width="100px" height="100px" src="Picture/Hexagon/' + this.type + '.png">';
        } else
        {
            return '<img width="100px" height="100px" src="Picture/Hexagon/Harbor/' + this.type + '/' + this.tilt + '.png">';
        }
    };
}

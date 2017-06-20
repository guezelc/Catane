/**
 * Author:
 * - Clement Guezel
 * - Virgil Lacondemine
 * 
 * @param {type} type
 * @param {type} tilt
 * @returns {Hexagon}
 */
function Hexagon(type, tilt = 0) {

    /**
     * Type of this Hexagon
     */
    var type;

    /**
     * Tilt of this Hexagon 
     */
    var tilt;

    /**
     * Top table of this Hexagon to know each pawn put in.
     * @type type
     */
    var T_Top;

    /**
     * Side table of this Hexagon to know each Hexagon connected with
     * @type type
     */
    var T_Side;

    /**
     * The position on the map 0 = Top, 1 = Middle, 2 = Bot
     * @type type
     */
    var positionOnMap;

    /**
     * Hexagone's number for dice roll
     * @type type
     */
    var number;

    // Object var init
    this.T_Top = {"N": null, "N-E": null, "S-E": null, "S": null, "S-W": null, "N-W": null};
    this.T_Side = {"N-E": null, "E": null, "S-E": null, "S-W": null, "W": null, "N-W": null};
    this.type = type;
    this.tilt = tilt;
    this.positionOnMap = null; // 0 if top, 1 if midle, 2 if bot
    this.number = null;

    /**
     * Display this Hexagon
     * @returns {jQuery|String}
     */
    this.display = function display() {
        if (this.tilt === 0) {
            if (this.number !== null) {
                return $('<img width="100px" height="100px" src="Picture/Number/' + this.number + '.png">')
                        .css("background", 'url(Picture/Hexagon/' + this.type + '.png)');
            }
            return '<img width="100px" height="100px" src="Picture/Hexagon/' + this.type + '.png">';
        }
        else {
            return '<img width="100px" height="100px" src="Picture/Hexagon/Harbor/' + this.type + '/' + this.tilt + '.png">';
        }
    };
}


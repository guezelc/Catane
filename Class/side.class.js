/*
 * Author:
 * - Clement Guezel
 * - Virgil Lacondemine
 */
function Side(hexagon1, hexagon2, tilt) {
    
    /**
     * First hexagon connected with
     */
    var hexagon1;

    /**
     * The North side of this
     */
    
    var sideNorth;
    
    /**
     * The South side of this
     */
    var sideSouth;

    /**
     * The East side of this
     */
    
    var sideEast;
    
    /**
     * The West side of this
     */
    var sideWest;

    /**
     * Second hexagon connected with
     */
    var hexagon2;

    /**
     * First top connected with.
     * Is the top the more in North
     * 
     * @type type
     */
    var top1;

    /**
     * Second top connected with
     * Is the top the more in South
     * 
     * @type type
     */
    var top2;

    /**
     * Tilt of this side
     */
    var tilt;

    /**
     * Is this side occupy or not
     * 
     * @type type
     */
    var occupy;

    /*
     * ???
     */
    var position;

    //Object var init
    this.hexagon1 = hexagon1;
    this.hexagon2 = hexagon2;
    this.top1 = null;
    this.top2 = null;
    this.sideNorth = null;
    this.sideSouth = null;
    this.sideEast = null;
    this.sideWest = null;
    this.tilt = tilt;
    this.occupy = null;
    this.position = [];
    
    /**
     * Check if this side is buildable.
     * 
     * @returns {Boolean}
     */
    this.isBuildable = function () {

        if (this.occupy === null) {
            return true;
        }
        else {
            return false;
        }
    };
    
    /**
     * Get all buildable sides around this side.
     * 
     * @param {type} playerColor
     * 
     * @returns {Array|Side.getBuildableSides.buildableSides}
     */
    this.getBuildableSides = function (playerColor) {
        
        var buildableSides = [];
        
        if(this.top1.occupy === null || this.top1.occupy.color === playerColor){
            buildableSides = buildableSides.concat(this.top1.getBuildableSides());
        }     
        if(this.top2.occupy === null || this.top2.occupy.color === playerColor){
            buildableSides = buildableSides.concat(this.top2.getBuildableSides());
        }
        
        return buildableSides;
    };

    this.show = function () {
        if (this.occupy !== null) {
            var body = $('body');
            var picture = $(this.occupy.display());
            var div = $('<div></div>');
            picture.appendTo(div);
            div.appendTo(body);
        }
    };
}
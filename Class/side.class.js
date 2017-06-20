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
        
        if(this.top1.occupy === null){
            buildableSides.push(this.top1.getBuildableSides());
        }
        else if(this.top1.occupyBy.color === playerColor){
            buildableSides.push(this.top1.getBuildableSides());
        }
        
        if(this.top2.occupy === null){
            buildableSides.push(this.top2.getBuildableSides());
        }
        else if(this.top2.occupyBy.color === playerColor){
            buildableSides.push(this.top2.getBuildableSides());
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
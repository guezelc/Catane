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

    //Object var init
    this.color = color;
    this.top = top;
    this.top.occupy = this;
    
    /**
     * Get all the player's colony buildable tops
     * 
     * @returns {Array|Colony.getColonyBuildableTops.buildableTops}
     */
    this.getBuildableTops = function () {
        
        var buildableTops = [];
        var roadsToFollow = [];
        var actualTop = this.top;
        var previousSide = null;
        
        roadsToFollow = roadsToFollow.concat(
                this.top.getOccupiedSideByColor(this.color, previousSide));

        for (var i = 0; i < roadsToFollow.length; i++) {
            actualTop = roadsToFollow[i].getNextTop(actualTop);
            if (actualTop.isBuildable())
                buildableTops.push(actualTop);
            previousSide = roadsToFollow[i];
            roadsToFollow = roadsToFollow.concat(
                    actualTop.getOccupiedSideByColor(this.color, previousSide));
        }
        
        return buildableTops;
    };

    /*
     * Display this colony pawn
     * @returns {String}
     */
    this.display = function () {
        return '<img width="20px" height="25px" src="Picture/Pawn/' + this.color + '/Colony.png">';
    };
}
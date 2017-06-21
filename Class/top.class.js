/*
 * 
 * @param {type} hexagon1
 * @param {type} hexagon2
 * @param {type} hexagon3
 * @param {type} type
 * 
 * @returns {Top}
 */
function Top(hexagon1, hexagon2, hexagon3, type) {
    /*
     * hexagon South-East if type = 12, South if 21
     */
    var hexagon1;

    /*
     * hexagon North if type = 12, North-East if 21
     */
    var hexagon2;

    /*
     * hexagon South-West if type = 12, North-West if 21
     */
    var hexagon3;

    /*
     * side right
     */
    var side1;

    /*
     * side left
     */
    var side2;

    /*
     * side vertical
     */
    var side3;

    /*
     * 
     * @return harbor type if OK, 0 if KO
     */
    var isHarbor;

    /*
     * 
     * @type Colony or City
     */
    var occupy;

    /*
     * 21 or 12
     */
    var type;

    /*
     * 
     * @type Array
     */
    var position;

    this.hexagon1 = hexagon1;
    this.hexagon2 = hexagon2;
    this.hexagon3 = hexagon3;
    this.side1 = null;
    this.side2 = null;
    this.side3 = null;
    this.occupy = null;
    this.type = type; //21 or 12
    this.position = [];

    /*
     *  @return harbor type if OK, 0 if KO
     */
    this.isHarbor = function () {
        var T_TiltUsefull = {
            "21": [["NW", "NE"], ["SW", "W"], ["SE", "E"]],
            "12": [["NW", "W"], ["SW", "SE"], ["NE", "E"]]
        };
        var T_Hexagon = [this.hexagon1, this.hexagon2, this.hexagon3];
        for (var i = 0; i < T_TiltUsefull[this.type].length; i++) {
            while (T_Hexagon[i] === null && i + 1 < T_TiltUsefull[this.type].length) {
                i++;
            }
            if (T_Hexagon[i] !== null) {
                for (var j = 0; j < T_TiltUsefull[this.type][i].length; j++) {
                    if (T_Hexagon[i].tilt === T_TiltUsefull[this.type][i][j]) {
                        return T_Hexagon[i].type + T_Hexagon[i].tilt;
                    }
                }
            }
        }
        return false;
    };

    /*
     * 
     */
    this.isBuildable = function () {
        if (this.occupy !== null) {
            return false;
        }
        var countLand = 0;
        var T_TopUsefull = {
            "21": ["N-E", "N-W", "S"],
            "12": ["N", "S-W", "S-E"]
        };
        var T_Hexagon = [this.hexagon1, this.hexagon2, this.hexagon3];
        for (var i = 0; i < T_TopUsefull[this.type].length; i++) {
            while (T_Hexagon[i] === null && i + 1 < T_TopUsefull[this.type].length) {
                i++;
            }
            if (T_Hexagon[i] !== null) {
                if (T_Hexagon[i].tilt === 0) {
                    countLand++;
                }
                if (T_Hexagon[i].T_Top[T_TopUsefull[this.type][i]].occupy !== null) {
                    return false;
                }
            }
        }
        if (countLand === 0) {
            return false;
        }
        return this;
    };

    /**
     * Verify if top's hexagon have number gived in parameters
     * 
     * @param {type} number
     * 
     * @returns {Boolean}
     */
    this.haveHexagonWithNumber = function (number) {

        var have = false;

        if (this.hexagon1.number === number) {
            have = true;
        }
        else if (this.hexagon2.number === number) {
            have = true;
        }
        else if (this.hexagon3.number === number) {
            have = true;
        }

        return have;
    };

    /**
     * Get hexagons with same number as given number
     * 
     * @param {type} number
     * 
     * @returns {Array|Top.getHexagonsByNumber.hexagons}
     */
    this.getHexagonsByNumber = function (number) {

        var hexagons = [];

        if (this.hexagon1.number === number) {
            hexagons.push(hexagon1.type);
        }
        else if (this.hexagon2.number === number) {
            hexagons.push(hexagon2.type);
        }
        else if (this.hexagon3.number === number) {
            hexagons.push(hexagon3.type);
        }

        return hexagons;
    };

    /**
     * Get buildable side of this top
     * 
     * @param {type} type 
     * @returns {Array|Top.getBuildableSides.buildableSides}
     */
    this.getBuildableSides = function (type) {
        var buildableSides = [];
        if(type === 'road')
        {
            if (this.side1.isBuildable() && this.side1.hexagon1.type !== 'water' 
                    && this.side1.hexagon1.tilt === 0 || this.side1.isBuildable() 
                    && this.side1.hexagon2.type !== 'water' && this.side1.hexagon2.tilt === 0) {
                buildableSides.push(this.side1);
            }
            if (this.side2.isBuildable() && this.side2.hexagon1.type !== 'water' 
                    && this.side2.hexagon1.tilt === 0 || this.side2.isBuildable() 
                    && this.side2.hexagon2.type !== 'water' && this.side2.hexagon2.tilt === 0) {
                buildableSides.push(this.side2);
            }
            if (this.side3.isBuildable() && this.side3.hexagon1.type !== 'water' 
                    && this.side3.hexagon1.tilt === 0 || this.side3.isBuildable() 
                    && this.side3.hexagon2.type !== 'water' && this.side3.hexagon2.tilt === 0) {
                buildableSides.push(this.side3);
            }
        }
        return buildableSides;
    };

    this.getOccupiedSideByColor = function (color, previousSide) {
        var occupiedSides = [];
        if (this.side1.occupy !== null && this.side1.occupy.color === color 
                && this.side1 !== previousSide);
            occupiedSides.push(this.side1);
        if (this.side2.occupy !== null && this.side2.occupy.color === color 
                && this.side2 !== previousSide)
            occupiedSides.push(this.side2);
        if (this.side3.occupy !== null && this.side3.occupy.color === color
                && this.side3 !== previousSide)
            occupiedSides.push(this.side3);
        return occupiedSides;
    };

    /*
     * 
     */
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
/*
 * 
 * @param {type} hexagon1
 * @param {type} hexagon2
 * @param {type} hexagon3
 * @param {type} type
 * 
 * @returns {Top}
 */
function Top(hexagon1, hexagon2, hexagon3, type)
{
    /*
     * 
     */
    var hexagon1;

    /*
     * 
     */
    var hexagon2;

    /*
     * 
     */
    var hexagon3;

    /*
     * 
     * @returns {@param;Top:hexagon1.tilt|@param;Top:hexagon3.tilt|@param;Top:hexagon2.tilt|@param;Top:hexagon1.type|@param;Top:hexagon2.type|@param;Top:hexagon3.type|Boolean}
     */
    var isHarbor;

    /*
     * 
     * @type type
     */
    var occupy;

    /*
     * 
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
        for (var i = 0; i < T_TiltUsefull[this.type].length; i++)
        {
            while (T_Hexagon[i] === null && i + 1 < T_TiltUsefull[this.type].length)
            {
                i++;
            }
            if (T_Hexagon[i] !== null)
            {
                for (var j = 0; j < T_TiltUsefull[this.type][i].length; j++)
                {
                    if (T_Hexagon[i].tilt === T_TiltUsefull[this.type][i][j])
                    {
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
        if (this.occupy !== null)
        {
            return false;
        }
        var countLand = 0;
        var T_TopUsefull = {
            "21": ["N-E", "N-W", "S"],
            "12": ["N", "S-W", "S-E"]
        };
        var T_Hexagon = [this.hexagon1, this.hexagon2, this.hexagon3];
        for (var i = 0; i < T_TopUsefull[this.type].length; i++)
        {
            while (T_Hexagon[i] === null && i + 1 < T_TopUsefull[this.type].length)
            {
                i++;
            }
            if (T_Hexagon[i] !== null)
            {
                if (T_Hexagon[i].tilt === 0)
                {
                    countLand++;
                }
                if (T_Hexagon[i].T_Top[T_TopUsefull[this.type][i]].occupy !== null)
                {
                    return false;
                }
            }
        }
        if (countLand === 0)
        {
            return false;
        }
        return true;
    };
    
    /**
     * Verify if top's hexagon have number gived in parameters
     * 
     * @param {type} number
     * 
     * @returns {Boolean}
     */
    this.haveHexagonWithNumber = function(number) {
        
        var have = false;
        
        if(this.hexagon1.number === number){
            have = true;
        }
        else if(this.hexagon2.number === number){
            have = true;
        }
        else if(this.hexagon3.number === number){
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
    this.getHexagonsByNumber = function(number) {
        
        var hexagons = [];
        
        if(this.hexagon1.number === number){
            hexagons.push(hexagon1.type);
        }
        else if(this.hexagon2.number === number){
            hexagons.push(hexagon2.type);
        }
        else if(this.hexagon3.number === number){
            hexagons.push(hexagon3.type);
        }
        
        return hexagons;
    };

    /*
     * 
     */
    this.show = function ()
    {
        if(this.occupy !== null)
        {
            var body = $('body');
            var picture = $(this.occupy.display());
            var div = $('<div></div>');
            picture.appendTo(div);
            div.appendTo(body);
        }
    };
}
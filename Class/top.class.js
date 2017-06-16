function Top(hexagon1, hexagon2, hexagon3, type)
{
    var hexagon1;
    var hexagon2;
    var hexagon3;
    var isHarbor;
    var occupy;
    var type;

    this.hexagon1 = hexagon1;
    this.hexagon2 = hexagon2;
    this.hexagon3 = hexagon3;
    this.occupy = null;
    this.type=type; //21 or 12

    /*
     *  @return harbor type if OK, 0 if KO
     */
    this.isHarbor = function () {
        var T_TiltUsefull = {
            "21" : [["NW","NE"],["SW","W"],["SE","E"]],
            "12" : [["NW","W"],["SW","SE"],["NE","E"]]
        };
        var T_Hexagon = [this.hexagon1,this.hexagon2,this.hexagon3];
        for (var i =0 ; i < T_TiltUsefull[this.type].length; i++)
        {
            while(T_Hexagon[i] === null && i+1 < T_TiltUsefull[this.type].length)
            {
                i++;
            }
            if (T_Hexagon[i] !== null)
            {
                for(var j = 0; j < T_TiltUsefull[this.type][i].length; j++)
                {
                    if(T_Hexagon[i].tilt === T_TiltUsefull[this.type][i][j])
                    {
                        return T_Hexagon[i].type+T_Hexagon[i].tilt;
                    }
                }
            }
        }
        return false;
    }
    
    this.isBuildable = function () {
        if(this.occupy !== null)
        {
            return false;
        }
        var countLand = 0;
        var T_TopUsefull = {
            "21" : ["N-E","N-W","S"],
            "12" : ["N","S-W","S-E"]
        };
        var T_Hexagon = [this.hexagon1,this.hexagon2,this.hexagon3];
        for (var i =0 ; i < T_TopUsefull[this.type].length; i++)
        {
            while(T_Hexagon[i] === null && i+1 < T_TopUsefull[this.type].length)
            {
                i++;
            }
            if (T_Hexagon[i] !== null)
            {
                if(T_Hexagon[i].tilt === 0)
                {
                    countLand++;
                }
                if(T_Hexagon[i].T_Top[T_TopUsefull[this.type][i]].occupy !== null)
                {
                    return false;
                }
            }
        }
        if(countLand === 0)
        {
            return false;
        }
        return true;
    }
}
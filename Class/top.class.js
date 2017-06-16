function Top(hexagon1, hexagon2, hexagon3, type)
{
    var hexagon1;
    var hexagon2;
    var hexagon3;
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
        if (this.hexagon1 != 0)
        {
            return this.hexagon1.type;
        } else {
            if (this.hexagon2 != 0)
            {
                return this.hexagon2.type;
            } else {
                if (this.hexagon3 != 0)
                {
                    return this.hexagon3.type;
                } else {
                    return 0;
                }
            }
        }
    }
    
    this.isBuildable = function () {
        if(this.occupy !== null)
        {
            return false;
        }
        var T_TopUsefull = {
            "21" : ["N-E","N-W","S"],
            "12" : ["N","S-W","S-E"]
        };
        var T_Hexagon = [this.hexagon1,this.hexagon2,this.hexagon3];
        for (var i =0 ; i < T_TopUsefull[this.type].length; i++)
        {
            while(T_Hexagon[i] === null)
            {
                i++;
            }
            if(T_Hexagon[i].T_Top[T_TopUsefull[this.type][i]].occupy !== null)
            {
                return false;
            }
        }
        return true;
    }
}
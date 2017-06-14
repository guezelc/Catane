function Hexagon(type,harbor){
    var type;
    var harbor;
    var T_Top;
    var T_Side;
       
    this.T_Top= {"North" : 0,"North-East" : 0, "South-East" : 0, "South" : 0, "South-West" : 0, "North-West" : 0};
    this.T_Side= {"North-East" : 0,"East" : 0, "South-East" : 0, "South-West" : 0, "West" : 0, "North-West" : 0};
    this.type=type;
    this.harbor=harbor;
    
    this.display = function()
    {
        return '<img width="100px" height="100px" src="Picture/Hexagon/'+ this.type + '.png">';
    }
}

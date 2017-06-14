function Hexagon(type,tilt = 0 ){
    var type;
    var tilt;
    var T_Top;
    var T_Side;
       
    this.T_Top= {"N" : 0,"N-E" : 0, "S-E" : 0, "S" : 0, "S-W" : 0, "N-W" : 0};
    this.T_Side= {"N-E" : 0,"E" : 0, "S-E" : 0, "S-W" : 0, "W" : 0, "N-W" : 0};
    this.type=type;
    this.tilt=tilt;
    
    this.display = function()
    {
        if(this.tilt ==0 )
        {
            return '<img width="100px" height="100px" src="Picture/Hexagon/'+ this.type + '.png">';
        }
        else
        {
            return '<img width="100px" height="100px" src="Picture/Hexagon/Harbor/'+ this.type + '/' + this.tilt + '.png">';
        }
    }
}

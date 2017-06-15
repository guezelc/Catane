function Side(hexagon1, hexagon2)
{
    var hexagon1;
    var hexagon2;
    var occupy;
    var T_Top;
    
    this.hexagon1 = hexagon1;
    this.hexagon2 = hexagon2;
    this.occupy = 0;
    
    this.T_Top = {"N" : null, "S" : null};
}
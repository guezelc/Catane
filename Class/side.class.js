function Side(hexagon1, hexagon2, tilt)
{
    var hexagon1;
    var hexagon2;
    var tilt;
    var occupy;
    var position;
    
    this.hexagon1 = hexagon1;
    this.hexagon2 = hexagon2;
    this.tilt=tilt;
    this.occupy = 0;
    this.position = [];
}
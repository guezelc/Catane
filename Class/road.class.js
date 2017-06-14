function Road(color,tilt,side1, side2){
    var color;
    var tilt; // right, vertical, left
    var side1;
    var side2;
    
    this.color=color;
    this.tilt=tilt;
    this.side1=side1;
    this.side2=side2;
    
    this.display = function()
    {
        return '<img src="Picture/Pawn/'+ this.color + '/Road/' + this.tilt + '.png">';
    }
}
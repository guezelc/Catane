function Road(color, tilt, side) {
    var color;
    var tilt; // right, vertical, left
    var side;

    this.color = color;
    this.tilt = tilt;
    this.side = side;

    this.display = function ()
    {
        return '<img src="Picture/Pawn/' + this.color + '/Road/' + this.tilt + '.png">';
    }
}
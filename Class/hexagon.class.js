function Hexagon(type, tilt = 0) {
    var type;
    var tilt;
    var T_Top;
    var T_Side;

    this.T_Top = {"N": null, "N-E": null, "S-E": null, "S": null, "S-W": null, "N-W": null};
    this.T_Side = {"N-E": null, "E": null, "S-E": null, "S-W": null, "W": null, "N-W": null};
    this.type = type;
    this.tilt = tilt;

    this.display = function display()
    {
        if (this.tilt === 0)
        {
            return '<img width="100px" height="100px" src="Picture/Hexagon/' + this.type + '.png">';
        } else
        {
            return '<img width="100px" height="100px" src="Picture/Hexagon/Harbor/' + this.type + '/' + this.tilt + '.png">';
        }
    };
}

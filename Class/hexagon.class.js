function Hexagon(type, tilt = 0) {
    var type;
    var tilt;
    var T_Top;
    var T_Side;
    var position;
    var positionOnMap;
    var number;

    this.T_Top = {"N": null, "N-E": null, "S-E": null, "S": null, "S-W": null, "N-W": null};
    this.T_Side = {"N-E": null, "E": null, "S-E": null, "S-W": null, "W": null, "N-W": null};
    this.type = type;
    this.tilt = tilt;
    this.position = null;
    this.positionOnMap = null; // 0 if top, 1 if midle, 2 if bot
    this.number = null;

    this.display = function display()
    {
        if (this.tilt === 0)
        {
            if(this.number !== null)
            {
                return $('<img width="100px" height="100px" src="Picture/Number/' + this.number + '.png">')
                        .css("background",'url(Picture/Hexagon/' + this.type + '.png)');
            }
            return '<img width="100px" height="100px" src="Picture/Hexagon/' + this.type + '.png">';
            
        }
        else
        {
            return '<img width="100px" height="100px" src="Picture/Hexagon/Harbor/' + this.type + '/' + this.tilt + '.png">';
        }
    };
}

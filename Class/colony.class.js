function Colony(color) {
    var color;
    var position;
    var hexaReference;
    var top;

    this.color = color;
    this.position = null;
    this.top = null;
    this.hexaReference = null;

    this.display = function ()
    {
        return '<img width="20px" height="25px" src="Picture/Pawn/' + this.color + '/Colony.png">';
    };
    
    this.show = function(top)
    {
        /*var body = $("body");
        var typeOfTop= top.type
        var hexa1 = top.hexagon1;
        var hexa2 = top.hexagon2;
        var hexa3 = top.hexagon3;
        var hexa;
        var T_Hexa = {
            "21" : [
                [[-16,265],[-20,-85],[-16,65]], // Nort
                [[60,-10],[60,-10],[60,-10]],//Sout-West
                [[60,90],[60,90],[60,90]] //South-East
            ],
            "12" : [
                [[13,15],[3,-135],[13,15]],//North-West S
                [[84,40],[84,40],[84,40]],//South
                [[8,90],[8,90],[8,90]]  ]//North-East
        };
        
        if(hexa1 !== null)
        {
            this.hexaReference=0;
            hexa=hexa1;
        }
        else
        {
            if(hexa2 !== null)
            {
                this.hexaReference=0;
                hexa=hexa2;
            }
            else
            {
                if(hexa3 !== null)
                {
                    this.hexaReference=2;
                    hexa=hexa2;
                }
            }
        }
        if(this.hexaReference !== null)
        {
            var positionOnMap= hexa.positionOnMap;
            var div;
            var hexaX = hexa.position[0];
            var hexaY = hexa.position[1];
            if(positionOnMap === 0)
            {
                div = $('<div style="position:absolute;top: '+ (hexaX*76+T_Hexa[typeOfTop][this.hexaReference][0][0]) +'px;left:' + ((positionOnMap-hexaX)*50+100*hexaY+T_Hexa[typeOfTop][this.hexaReference][0][1])  + 'px"></div>');
            }
            else 
            {
                if(positionOnMap === 2)
                {
                    div = $('<div style="position:absolute;top: '+ (hexaX*76+T_Hexa[typeOfTop][this.hexaReference][1][0]) +'px;left:' + ((hexaX-positionOnMap+1)*50+100*hexaY+T_Hexa[typeOfTop][this.hexaReference][1][1])  + 'px"></div>');
                }
                else
                {
                    div = $('<div style="position:absolute;top: '+ (hexaX*76+T_Hexa[typeOfTop][this.hexaReference][2][0]) +'px;left:' + (0+100*hexaY+T_Hexa[typeOfTop][this.hexaReference][2][1]) + 'px"></div>');
                }
            }
            $(this.display()).appendTo(div);
            $(div).appendTo(body); 
        }*/
    };
}
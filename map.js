var lesHexagons = ["wood", "clay", "ore", "sheep", "corn", 'water'];

function loadHexagons() {
    var body = $("body");
    var map = new MapMatrice();
    map.init("N");
    map.showMap(map.getMapMatrice());
    map.initMatriceTop();
    map.initMatriceSide();
    console.log(map.matriceTop);
    console.log(map.matriceSide);
    /*var matrice = map.getMapMatrice();
    var redColony = new Colony("Red");
    var redColony2 = new Colony("Red");
    var redColony3 = new Colony("Red");
    var redColony4 = new Colony("Red");
    var redColony5 = new Colony("Red");
    var redColony6 = new Colony("Red");
    var topRed = matrice[3][5].T_Top["N-W"];
    var topRed2 = matrice[3][4].T_Top["N"];
    var topRed3 = matrice[4][2].T_Top["N-W"];
    var topRed4 = matrice[4][4].T_Top["N-W"];
    var topRed5 = matrice[6][2].T_Top["N-E"];
    var topRed6 = matrice[6][4].T_Top["N-E"];
    topRed.occupy=redColony;
    topRed2.occupy=redColony2;
    topRed3.occupy=redColony3;
    topRed4.occupy=redColony4;
    topRed5.occupy=redColony5;
    topRed6.occupy=redColony6;
    /*topRed.show();
    topRed2.show();
    topRed3.show();
    topRed4.show();
    topRed5.show();
    topRed6.show();*/
    /*var nbLine = matrice.length;
    var nbCol = matrice[0].length;
    var T_Pos = ["N","N-W","S-W"];
    for (var line = 0; line < nbLine; line++) {
        for (var column = 0; column < nbCol; column++) 
        {
        }
    }*/
    /*var Cityred = new City("Red", [125, 260]);
    var R1red = new Road("Red", "vertical", [100, 270]);
    var R3red = new Road("Red", "right", [75, 275]);
    var divRed = $('<div style="position:absolute;top:' + Cred.top[0] + 'px;left:' + Cred.top[1] + 'px">' + Cred.display() + '</div>');
    var divRed2 = $('<div style="position:absolute;top:' + Cityred.top[0] + 'px;left:' + Cityred.top[1] + 'px">' + Cityred.display() + '</div>');
    var divRed3 = $('<div style="position:absolute;top:' + R1red.side[0] + 'px;left:' + R1red.side[1] + 'px">' + R1red.display() + '</div>');
    var divRed4 = $('<div style="position:absolute;top:' + R3red.side[0] + 'px;left:' + R3red.side[1] + 'px">' + R3red.display() + '</div>');
    divRed3.appendTo(body);
    divRed4.appendTo(body);
    divRed.appendTo(body);
    divRed2.appendTo(body);*/
    
    /*                      isHarbor test
    var T_TopUse = ["N", "N-E", "S-E", "S", "S-W", "N-W"];
    for (var line = 0; line < map.getMapMatrice().length; line++) {
        for (var column = 0; column < map.getMapMatrice()[0].length; column++) {
            if(map.getMapMatrice()[line][column] !== null)
            {
                for (var i = 0; i < T_TopUse.length; i++)
                {
                    var t = map.getMapMatrice()[line][column].T_Top[T_TopUse[i]];
                    if(t !== null)
                    {
                        var tt= t.isHarbor();
                        console.log(tt,' (',line,',',column,')',T_TopUse[i]);
                    }
                }
            }
        }
    }
    */
    
    
}

$(document).ready(function () {
    loadHexagons();
});
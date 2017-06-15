var lesHexagons = ["wood", "clay", "ore", "sheep", "corn", 'water'];

function loadHexagons() {
    var body = $("body");
    var map = new MapMatrice();
    map.init();
    var Cred = new Colony("Red", [60, 240]);
    var Cityred = new City("Red", [125, 185]);
    var R1red = new Road("Red", "vertical", [100, 195]);
    var R3red = new Road("Red", "right", [75, 200]);
    var div = $('<div style="position:absolute;top: 0px;left:150px"></div>');
    var div2 = $('<div style="position:absolute;top:76px;left:100px;"></div>');
    var div3 = $('<div style="position:absolute;top:152px;left:50px;"></div>');
    var div4 = $('<div style="position:absolute;top:228px;left:0px;"></div>');
    var div5 = $('<div style="position:absolute;top:304px;left:50px;"></div>');
    var div6 = $('<div style="position:absolute;top:380px;left:100px;"></div>');
    var div7 = $('<div style="position:absolute;top:456px;left:150px"></div>');

    for (var line = 0; line < map.getMapMatrice().length; line++) {
        for (var column = 0; column < map.getMapMatrice()[0].length; column++) {
            switch (line) {
                case 0:
                    if (map.getMapMatrice()[line][column] !== "null"){
                        $(map.getMapMatrice()[line][column].display()).appendTo(div);
                    }
                    break;
                case 1:
                    if (map.getMapMatrice()[line][column] !== "null")
                        $(map.getMapMatrice()[line][column].display()).appendTo(div2);
                    break;
                case 2:
                    if (map.getMapMatrice()[line][column] !== "null")
                        $(map.getMapMatrice()[line][column].display()).appendTo(div3);
                    break;
                case 3:
                    if (map.getMapMatrice()[line][column] !== "null")
                        $(map.getMapMatrice()[line][column].display()).appendTo(div4);
                    break;
                case 4:
                    if (map.getMapMatrice()[line][column] !== "null")
                        $(map.getMapMatrice()[line][column].display()).appendTo(div5);
                    break;
                case 5:
                    if (map.getMapMatrice()[line][column] !== "null")
                        $(map.getMapMatrice()[line][column].display()).appendTo(div6);
                    break;
                case 6:
                    if (map.getMapMatrice()[line][column] !== "null")
                        $(map.getMapMatrice()[line][column].display()).appendTo(div7);
                    break;
            }

        }
    }

    var divRed = $('<div style="position:absolute;top:' + Cred.top[0] + 'px;left:' + Cred.top[1] + 'px">' + Cred.display() + '</div>');
    var divRed2 = $('<div style="position:absolute;top:' + Cityred.top[0] + 'px;left:' + Cityred.top[1] + 'px">' + Cityred.display() + '</div>');
    var divRed3 = $('<div style="position:absolute;top:' + R1red.side[0] + 'px;left:' + R1red.side[1] + 'px">' + R1red.display() + '</div>');
    var divRed4 = $('<div style="position:absolute;top:' + R3red.side[0] + 'px;left:' + R3red.side[1] + 'px">' + R3red.display() + '</div>');
    div.appendTo(body);
    div2.appendTo(body);
    div3.appendTo(body);
    div4.appendTo(body);
    div5.appendTo(body);
    div6.appendTo(body);
    div7.appendTo(body);
    divRed3.appendTo(body);
    divRed4.appendTo(body);
    divRed.appendTo(body);
    divRed2.appendTo(body);
}

$(document).ready(function () {
    loadHexagons();
});
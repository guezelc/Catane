var lesHexagons = ["wood", "clay", "ore", "sheep", "corn", 'water'];

function loadHexagons() {
    var body = $("body");
    var map = new Map();
    map.init();
    var wood = new Hexagon("wood");
    var clay = new Hexagon("clay");
    var ore = new Hexagon("ore");
    var sheep = new Hexagon("sheep");
    var water = new Hexagon("water");
    var corn = new Hexagon("corn");
    var blanc = new Hexagon("white");
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
    for (var i = 0; i < 4; i++) {
        $(map.getMapArray()[i].display()).appendTo(div);
    }
    for (var i = 4; i < 9; i++) {
        $(map.getMapArray()[i].display()).appendTo(div2);
    }
    for (var i = 9; i < 15; i++) {
        $(map.getMapArray()[i].display()).appendTo(div3);
    }
    for (var i = 15; i < 22; i++) {
        $(map.getMapArray()[i].display()).appendTo(div4);
    }
    for (var i = 22; i < 28; i++) {
        $(map.getMapArray()[i].display()).appendTo(div5);
    }
    for (var i = 28; i < 33; i++) {
        $(map.getMapArray()[i].display()).appendTo(div6);
    }
    for (var i = 33; i < 37; i++) {
        $(map.getMapArray()[i].display()).appendTo(div7);
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
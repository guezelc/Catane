var lesHexagons = ["wood","clay","ore","sheep","corn",'water'];

function loadHexagons(){
    var body = $("body");
    var wood = new Hexagon("wood");
    var clay = new Hexagon("clay");
    var ore = new Hexagon("ore");
    var sheep = new Hexagon("sheep");
    var water = new Hexagon("water");
    var corn = new Hexagon("corn");
    var blanc = new Hexagon("white");
    var Cred= new Colony("Red",[60,240]);
    var Cityred= new City("Red",[125,185]);
    var R1red= new Road("Red","vertical",[100,195]);
    var R3red= new Road("Red","right",[75,200]);
    var div  = $('<div style="position:absolute;top: 0px;left:150px">'+ water.display() + water.display() +water.display() +water.display()+'</div>');
    var div2 = $('<div style="position:absolute;top:76px;left:100px;">'+ water.display() + wood.display() +corn.display() +ore.display() +water.display() + '</div>');
    var div3 = $('<div style="position:absolute;top:152px;left:50px;">'+ water.display() + clay.display() + sheep.display() + clay.display() + ore.display() + water.display() +'</div>');
    var div4 = $('<div style="position:absolute;top:228px;left:0px;">'+ water.display() + ore.display() + sheep.display() + blanc.display() + corn.display() + sheep.display() + water.display() +'</div>');
    var div5 = $('<div style="position:absolute;top:304px;left:50px;">'+ water.display() + clay.display() + wood.display() + corn.display() + wood.display() + water.display() +'</div>');
    var div6 = $('<div style="position:absolute;top:380px;left:100px;">'+ water.display() + corn.display() +wood.display() +sheep.display() +water.display() + '</div>');
    var div7 = $('<div style="position:absolute;top:456px;left:150px">'+ water.display() + water.display() +water.display() +water.display()+'</div>');
    var divRed  = $('<div style="position:absolute;top:' + Cred.position[0] + 'px;left:' + Cred.position[1] + 'px">'+ Cred.display()+'</div>');
    var divRed2 = $('<div style="position:absolute;top:' + Cityred.position[0] + 'px;left:' + Cityred.position[1] + 'px">'+ Cityred.display()+'</div>');
    var divRed3  = $('<div style="position:absolute;top:' + R1red.position[0] + 'px;left:' + R1red.position[1] + 'px">'+ R1red.display()+'</div>');
    var divRed4 = $('<div style="position:absolute;top:' + R3red.position[0] + 'px;left:' + R3red.position[1] + 'px">'+ R3red.display()+'</div>');
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
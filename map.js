var lesHexagons = ["wood","clay","ore","sheep","corn",'water'];

function loadHexagons(){
    var body = $("body");
<<<<<<< HEAD
    var map = new Map();
    map.init();
    alert(map.getMapArray()[17].type);
    var bois = new Hexagone("bois");
    var argile = new Hexagone("argile");
    var minerai = new Hexagone("minerai");
    var mouton = new Hexagone("mouton");
    var eau = new Hexagone("eau");
    var ble = new Hexagone("ble");
    var blanc = new Hexagone("blanc");
    var Crouge= new Colonie("Rouge",[60,240]);
    var Vrouge= new Ville("Rouge",[125,185]);
    var R1rouge= new Route("Rouge","verticale",[100,195]);
    var R3rouge= new Route("Rouge","droite",[75,200]);
    var div  = $('<div style="position:absolute;top: 0px;left:150px">'+ eau.afficher() + eau.afficher() +eau.afficher() +eau.afficher()+'</div>');
    var div2 = $('<div style="position:absolute;top:76px;left:100px;">'+ eau.afficher() + bois.afficher() +ble.afficher() +minerai.afficher() +eau.afficher() + '</div>');
    var div3 = $('<div style="position:absolute;top:152px;left:50px;">'+ eau.afficher() + argile.afficher() + mouton.afficher() + argile.afficher() + minerai.afficher() + eau.afficher() +'</div>');
    var div4 = $('<div style="position:absolute;top:228px;left:0px;">'+ eau.afficher() + minerai.afficher() + mouton.afficher() + blanc.afficher() + ble.afficher() + mouton.afficher() + eau.afficher() +'</div>');
    var div5 = $('<div style="position:absolute;top:304px;left:50px;">'+ eau.afficher() + argile.afficher() + bois.afficher() + ble.afficher() + bois.afficher() + eau.afficher() +'</div>');
    var div6 = $('<div style="position:absolute;top:380px;left:100px;">'+ eau.afficher() + ble.afficher() +bois.afficher() +mouton.afficher() +eau.afficher() + '</div>');
    var div7 = $('<div style="position:absolute;top:456px;left:150px">'+ eau.afficher() + eau.afficher() +eau.afficher() +eau.afficher()+'</div>');
    var divRouge  = $('<div style="position:absolute;top:' + Crouge.position[0] + 'px;left:' + Crouge.position[1] + 'px">'+ Crouge.afficher()+'</div>');
    var divRouge2 = $('<div style="position:absolute;top:' + Vrouge.position[0] + 'px;left:' + Vrouge.position[1] + 'px">'+ Vrouge.afficher()+'</div>');
    var divRouge3  = $('<div style="position:absolute;top:' + R1rouge.position[0] + 'px;left:' + R1rouge.position[1] + 'px">'+ R1rouge.afficher()+'</div>');
    var divRouge4 = $('<div style="position:absolute;top:' + R3rouge.position[0] + 'px;left:' + R3rouge.position[1] + 'px">'+ R3rouge.afficher()+'</div>');
=======
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
>>>>>>> master
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
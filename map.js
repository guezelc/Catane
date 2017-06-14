var lesHexagones = ["bois","argile","minerai","mouton","ble",'eau'];

function loadHexagones(){
    var body = $("body");
    var bois = new Hexagone("bois");
    var argile = new Hexagone("argile");
    var minerai = new Hexagone("minerai");
    var mouton = new Hexagone("mouton");
    var eau = new Hexagone("eau");
    var ble = new Hexagone("ble");
    var blanc = new Hexagone("blanc");
    var Crouge= new Colonie("rouge");
    var R1rouge= new Route("rouge");
    var R3rouge= new Route("rouge3");
    var div  = $('<div style="position:absolute;top: 0px;left:150px">'+ eau.afficher() + eau.afficher() +eau.afficher() +eau.afficher()+'</div>');
    var div2 = $('<div style="position:absolute;top:76px;left:100px;">'+ eau.afficher() + bois.afficher() +ble.afficher() +minerai.afficher() +eau.afficher() + '</div>');
    var div3 = $('<div style="position:absolute;top:152px;left:50px;">'+ eau.afficher() + argile.afficher() + mouton.afficher() + argile.afficher() + minerai.afficher() + eau.afficher() +'</div>');
    var div4 = $('<div style="position:absolute;top:228px;left:0px;">'+ eau.afficher() + minerai.afficher() + mouton.afficher() + blanc.afficher() + ble.afficher() + mouton.afficher() + eau.afficher() +'</div>');
    var div5 = $('<div style="position:absolute;top:304px;left:50px;">'+ eau.afficher() + argile.afficher() + bois.afficher() + ble.afficher() + bois.afficher() + eau.afficher() +'</div>');
    var div6 = $('<div style="position:absolute;top:380px;left:100px;">'+ eau.afficher() + ble.afficher() +bois.afficher() +mouton.afficher() +eau.afficher() + '</div>');
    var div7 = $('<div style="position:absolute;top:456px;left:150px">'+ eau.afficher() + eau.afficher() +eau.afficher() +eau.afficher()+'</div>');
    $("#hexagone").eq(0).text($("#hexagone").eq(0).text()+ ble.T_Sommet["Nord"] + " " );
    var divRouge  = $('<div style="position:absolute;top:60px;left:240px">'+ Crouge.afficher()+'</div>');
    var divRouge2 = $('<div style="position:absolute;top:135px;left:190px">'+ Crouge.afficher()+'</div>');
    var divRouge3  = $('<div style="position:absolute;top:100px;left:195px">'+ R1rouge.afficher()+'</div>');
    var divRouge4 = $('<div style="position:absolute;top:75px;left:200px">'+ R3rouge.afficher()+'</div>');
    div.appendTo(body);
    div2.appendTo(body);
    div3.appendTo(body);
    div4.appendTo(body);
    div5.appendTo(body);
    div6.appendTo(body);
    div7.appendTo(body);
    divRouge3.appendTo(body);
    divRouge4.appendTo(body);
    divRouge.appendTo(body);
    divRouge2.appendTo(body);
}

$(document).ready(function () {
    loadHexagones();
});
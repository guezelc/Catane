var lesHexagons = ["wood", "clay", "ore", "sheep", "corn", 'water'];
var dice = new Dice();
var card;
var txtCard;
var categResource=['corn','ore','sheep','wood','clay'];
function loadHexagons() {
    var body = $("body");
    var map = new MapMatrice();
    map.init("N");
    map.showMap(map.getMapMatrice());
    map.initMatriceTop();
    map.initMatriceSide();
    var matTop = map.matriceTop;
    var matSide = map.matriceSide;
    $('<button style="float:left" class="bouton">Roll the dice</button>').click(function ()
    {
        txtCard='';
        dice.roll();        
        player.giveResourcesCards(dice.result);
        card = player.T_resource_card;
        for(var i =0;i< categResource.length;i++)
        {
            txtCard += categResource[i]+':'+card[categResource[i]]+' ';
        }
        $("#resource").text(txtCard);
        $("#dee").text(dice.result);
    console.log();
    }).appendTo(body);
    
    //Debug test
    var player = new Player('red');
    player.T_colony[0] = new Colony('red',matTop[8][4]);
    player.T_colony[0].top = matTop[6][3];
    player.T_colony[0].top.occupy = player.T_colony[0];
    player.T_road[0] = new Road('red', matSide[6][5]);
    player.T_road[0].side.occupy = player.T_road[0];
    var t = player.T_city[0] = new City('red',matTop[10][6]);
    var u = player.T_city[1] = new City('red',matTop[3][0]);
    var v = player.T_city[2] = new City('red',matTop[15][4]);
    t.top = matTop[8][4];
    t.top.occupy = player.T_city[0];
    u.top = matTop[8][5];
    u.top.occupy = player.T_city[1];
    v.top = matTop[10][3];
    v.top.occupy = player.T_city[2];
    player.giveResourcesCards(8);
    console.log(player.T_resource_card);
    console.log(player.buy_Road());
    console.log(matTop);
    console.log(matSide);
}

function rollDice()
{
    console.log(111);
}

$(document).ready(function () {
    loadHexagons();
});
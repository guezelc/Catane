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
    player.T_colony[0] = new Colony('red');
    player.T_colony[0].top = matTop[6][3];
    var t = player.T_city[0] = new City('red');
    var u = player.T_city[0] = new City('red');
    var v = player.T_city[0] = new City('red');
    t.top = matTop[8][4];
    u.top = matTop[8][5];
    v.top = matTop[10][3];
    console.log(player.T_resource_card);

}

function rollDice()
{
    console.log(111);
}

$(document).ready(function () {
    loadHexagons();
});
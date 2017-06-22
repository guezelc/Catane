var lesHexagons = ["wood", "clay", "ore", "sheep", "corn", 'water'];
var card;
var txtCard;
var categResource=['corn','ore','sheep','wood','clay'];
var game = new Game('N',3);
var dice = game.dice;
function rollDice() 
{
    var player = game.getPlayer(1);
    var body = $("body");
    $('<button style="float:left" class="bouton">Roll the dice</button>').click(function () {
        txtCard = '';
        dice.roll();
        player.giveResourcesCards(dice.result);
        card = player.T_resource_card;
        for (var i = 0; i < categResource.length; i++) {
            txtCard += categResource[i] + ':' + card[categResource[i]] + ' ';
        }
        $("#resource").text(txtCard);
        $("#dee").text(dice.result);
    }).appendTo(body);
}

function testBuild()
{
    var matTop = game.topMatrice;
    var matSide = game.sideMatrice;
    var player = game.getPlayer(1);
    var colony = new Colony('red', matTop[2][1]);
    player.T_colony.push(colony);
    player.giveResourcesCards(8);
    console.log(player.T_resource_card);
    console.log(player.T_road);
    console.log("Achat d'une route");
    var roadBuildableList = player.buy_Road();
    console.log(roadBuildableList);
    player.build_Road(roadBuildableList[roadBuildableList.length-1]);
    console.log(player.T_road);
    console.log("Achat d'une seconde route");
    roadBuildableList = player.buy_Road();
    console.log(roadBuildableList);
    player.build_Road(roadBuildableList[roadBuildableList.length-1]);
    console.log(player.T_road);
    console.log("Achat d'une troisième route");
    roadBuildableList = player.buy_Road();
    console.log(roadBuildableList);
    player.build_Road(roadBuildableList[roadBuildableList.length-1]);
    console.log(player.T_road);
    console.log("Achat d'une colonie");
    var colonyBuildableList = player.buy_Colony();
    console.log(colonyBuildableList);
    player.build_Colony(colonyBuildableList[colonyBuildableList.length-1]);
    console.log(player.T_colony);
    console.log("Achat d'une ville");
    var colonyTops = player.buy_City();
    console.log(colonyTops);
    player.build_City(colonyTops[colonyTops.length-1]);
    console.log(player.T_city);
    console.log(player.T_colony);
    console.log("Achat d'une carte développement");
    player.buy_DeveloppementCard();
    console.log(player.T_developpement_card);
    console.log(player.T_resource_card);
}

function testExchange()
{
    var blue = game.getPlayer(0);
    var red = game.getPlayer(1);
    var white = game.getPlayer(2);
    console.log(blue.T_resource_card);
    console.log(red.T_resource_card);
    console.log(white.T_resource_card);
    blue.isPlaying=true;
    console.log("Le bleu donne 2 moutons, 1 bois, 1 argile contre 4blés , 2 minerais");
    var exchange = blue.exchange(4,2,-2,-1,-1);
    console.log(exchange);
    if(exchange.length >0){blue.acceptIsOwnExchange(exchange[exchange.length-1],true);}
    console.log(blue.T_resource_card);
    console.log(red.T_resource_card);
    console.log(white.T_resource_card);
    console.log(game);
}

$(document).ready(function () {
    rollDice();
    testBuild();
    testExchange();
    game.mapMatrice.showMap();
});
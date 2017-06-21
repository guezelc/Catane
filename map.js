var lesHexagons = ["wood", "clay", "ore", "sheep", "corn", 'water'];
var dice = new Dice();
var card;
var txtCard;
var categResource=['corn','ore','sheep','wood','clay'];
var game = new Game('N',3);
function loadHexagons() {
    var body = $("body");
    var matTop = game.topMatrice;
    var matSide = game.sideMatrice;
    game.mapMatrice.showMap();
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
        console.log();
    }).appendTo(body);

    //Debug test
    var player = game.getPlayer(1);
    var colony = new Colony('red', matTop[6][3]);
    player.T_colony.push(colony);
    player.giveResourcesCards(8);
    console.log(player.T_resource_card);
    console.log(player.T_road);
    console.log("Achat d'une route");
    var roadBuildableList = player.buy_Road();
    console.log(roadBuildableList);
    player.build_Road(roadBuildableList[2]);
    console.log(player.T_road);
    console.log("Achat d'une seconde route");
    roadBuildableList = player.buy_Road();
    console.log(roadBuildableList);
    player.build_Road(roadBuildableList[2]);
    console.log(player.T_road);
    console.log("Achat d'une troisième route");
    roadBuildableList = player.buy_Road();
    console.log(roadBuildableList);
    player.build_Road(roadBuildableList[3]);
    console.log(player.T_road);
    console.log("Achat d'une colonie");
    var colonyBuildableList = player.buy_Colony();
    console.log(colonyBuildableList);
    player.build_Colony(colonyBuildableList[0]);
    console.log(player.T_colony);
    console.log("Achat d'une ville");
    var colonyTops = player.buy_City();
    console.log(colonyTops);
    player.build_City(colonyTops[0]);
    console.log(player.T_city);
    console.log(player.T_colony);
    console.log("Achat d'une carte développement");
    player.buy_DeveloppementCard();
    console.log(player.T_developpement_card);
    console.log(player.T_resource_card);

    /*console.log(player.buy_Road());
    console.log(matTop);
    console.log(matSide);
    console.log(dvpCard.T_Card);
    player.T_resource_card.sheep++;
    player.T_resource_card.corn++;
    player.T_resource_card.ore++;
    player.buy_DeveloppementCard();
    console.log(dvpCard.T_Card);*/
}

function rollDice() {
    console.log(111);
}

$(document).ready(function () {
    loadHexagons();
});
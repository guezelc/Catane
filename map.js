var lesHexagons = ["wood", "clay", "ore", "sheep", "corn", 'water'];
var dice = new Dice();
var card;
var txtCard;
var categResource=['corn','ore','sheep','wood','clay'];
var dvpCard = new DeveloppementCards();
function loadHexagons() {
    var body = $("body");
    var map = new MapMatrice();
    map.init("N");
    map.showMap(map.getMapMatrice());
    map.initMatriceTop();
    map.initMatriceSide();
    var matTop = map.matriceTop;
    var matSide = map.matriceSide;
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
    var player = new Player('red',dvpCard);
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
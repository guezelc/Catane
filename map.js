var lesHexagons = ["wood", "clay", "ore", "sheep", "corn", 'water'];
var dice = new Dice();
var card;
var txtCard;
var categResource = ['corn', 'ore', 'sheep', 'wood', 'clay'];
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
    var player = new Player('red');
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
    console.log("Achat d'une colonie");
    var colonyBuildableList = player.buy_Colony();
    console.log(colonyBuildableList);
    console.log(player.T_resource_card);

}

function rollDice() {
    console.log(111);
}

$(document).ready(function () {
    loadHexagons();
});
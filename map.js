var lesHexagons = ["wood", "clay", "ore", "sheep", "corn", 'water'];
var dice = new Dice();
function loadHexagons() {
    var body = $("body");
    var map = new MapMatrice();
    var button = $('<button style="float:left" class="bouton">Roll the dice</button>').click(function ()
    {
        for (var i = 0; i < 1000; i++) {
            dice.roll();
        }
        console.log(dice.historical);
        $("#hexagon").text(dice.result);
    }).appendTo(body);
    map.init("N");
    map.showMap(map.getMapMatrice());
    map.initMatriceTop();
    map.initMatriceSide();
    console.log(map.getMapMatrice());
    console.log(map.matriceTop);
    console.log(map.matriceSide);
    console.log(button);
    var matTop = map.matriceTop;
    var lig = matTop.length;
    var col = matTop[0].length;
    var matHarbor = [];
    for (var l = 0; l < lig; l++)
    {
        matHarbor.push([]);
        for (var c = 0; c < col; c++)
        {
            var top = matTop[l][c];
            if (top !== null)
            {
                var hb = top.isHarbor();
                matHarbor[l].push(hb);
            } else
            {
                matHarbor[l].push(null);
            }
        }
    }
    console.log(matHarbor);
    
    //Debug test
    var player = new Player('red');
    player.T_colony[0] = new Colony('red');
    player.T_colony[0].top = matTop[6][3];
    player.T_city[0] = new City('red');
    player.T_city[0].top = matTop[8][4];
    player.giveResourcesCards(8);
    console.log(player.T_resource_card);

}

function rollDice()
{
    console.log(111);
}

$(document).ready(function () {
    loadHexagons();
});
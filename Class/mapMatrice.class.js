/*
 * A Catane game map uses matrice structure
 * 
 * Author :
 *  - Virgil Lacondemine
 *  - Clement Guezel
 */
function MapMatrice() {

    /*
     * The matrice where the gerated catane map are stocked
     * @type Array
     */
    var mapMatrice = [];

    /*
     * The model used to generate the catane map
     * - 0: water
     * - 1: clay, wood, sheep, ore, corn or desert
     * - 2: 31 harbor
     * - 3: item harbor
     * @type Array
     */
    var mapMatriceModelBase = [
        [2, 0, 3, 0, null, null, null],
        [0, 1, 1, 1, 2, null, null],
        [3, 1, 1, 1, 1, 0, null],
        [0, 1, 1, 1, 1, 1, 3],
        [3, 1, 1, 1, 1, 0, null],
        [0, 1, 1, 1, 2, null, null],
        [2, 0, 3, 0, null, null, null]
    ];

    /*
     * The model used to generate the catane map
     * - 0: water
     * - 1: clay, wood, sheep, ore, corn or desert
     * - 2: 31 harbor
     * - 3: item harbor
     * @type Array
     */
    var mapMatriceModelExtension = [
        [0, 3, 0, 3, 0, null, null, null, null],
        [2, 1, 1, 1, 0, 0, null, null, null],
        [0, 1, 1, 1, 1, 3, 0, null, null],
        [3, 1, 1, 1, 1, 1, 0, 0, null],
        [0, 0, 1, 1, 1, 1, 2, 1, 0],
        [0, 2, 1, 1, 1, 0, 1, 0, null],
        [1, 0, 2, 0, 3, 0, 0, null, null],
        [1, 1, 1, 0, 1, 0, null, null, null],
        [0, 0, 1, 1, 0, null, null, null, null]
    ];


    /*
     * The number of each hexagone type who can be on the catane map
     * @type type
     */
    var hexagonNumberBase = {
        corn: 4,
        wood: 4,
        sheep: 4,
        ore: 3,
        clay: 3,
        desert: 1,
        harbor31: 4,
        oreHarbor: 1,
        cornHarbor: 1,
        woodHarbor: 1,
        clayHarbor: 1,
        sheepHarbor: 1
    };

    /*
     * The number of each hexagone type who can be on the catane map
     * @type type
     */
    var hexagonNumberExtension = {
        corn: 6,
        wood: 6,
        sheep: 6,
        ore: 5,
        clay: 5,
        desert: 1,
        harbor31: 4,
        oreHarbor: 1,
        cornHarbor: 1,
        woodHarbor: 1,
        clayHarbor: 1,
        sheepHarbor: 1
    };

    /*
     * 
     * @type Array
     */
    var matriceTop;

    /*
     * 
     * @type Array
     */
    var matriceSide;

    /*
     * Line coord to see where we need to tilt
     * @type Array
     */
    var lineTilt = [-1, -1, 0, 0, 1, 1];

    /*
     * Column coord before matrice middle to see where we need to tilt
     * @type Array
     */
    var columnTiltBeforeMid = [0, -1, 1, -1, 1, 0];

    /*
     * Column coord at matrice middle to see where we need to tilt
     * @type Array
     */
    var columnTiltAtMid = [0, -1, 1, -1, 0, -1];

    /*
     * Column coord after matrice middle to see where we need to tilt
     * @type Array
     */
    var columnTiltAfterMid = [1, 0, 1, -1, 0, -1];


    /*
     * Each posible tilt sync with columnTilt and lineTilt array index
     * @type Array
     */
    var tilt = ['NE', 'NW', 'E', 'W', 'SE', 'SW'];

    /*
     * 
     * @type Array
     */
    this.matriceTop = [];

    /*
     * 
     * @type Array
     */
    this.matriceSide = [];

    /*
     * Init mapMaptrice object:
     *  - create a catane map
     *  @param extension "B" for Base, "N" for navy
     */
    this.init = function (extension) {
        switch (extension)
        {
            case "B":
                mapMatrice = generateCataneMap(mapMatriceModelBase, hexagonNumberBase);
                break;
            case "N":
                mapMatrice = generateCataneMap(mapMatriceModelExtension, hexagonNumberExtension);
                break;
        }
    };

    /*
     * Init a matrice with model's dimention at null
     * @param {type} mapMatriceModel
     * @returns {Array|MapMatrice.initMatrice.matrice}
     */
    function initMatrice(mapMatriceModel) {
        var model = mapMatriceModel;
        var matrice = [];
        for (var line = 0; line < model.length; line++) {
            matrice.push([]);
            for (var column = 0; column < model[0].length; column++) {
                matrice[line].push(null);
            }
        }
        return matrice;
    }

    /*
     * Generate the catane map
     * @param {type} Pmodel
     * @param {type} PhexagonNumber
     * @returns {Array}
     */
    function generateCataneMap(Pmodel, PhexagonNumber) {

        /*
         * Matrice where we stock hexagones during map generation
         * @type Array|MapMatrice.initMatrice.matrice
         */
        var matrice = initMatrice(Pmodel);

        /*
         * Model used to generate the catane map
         * @type type
         */
        var model = Pmodel;

        /*
         * Number of each hexagone type who can be on the catane map
         * @type type
         */
        var hexagonNumber = PhexagonNumber;

        /*
         * Information on mapMatriceModel useful to generate catane ma
         */
        var mapMatriceInfo = {
            line: model.length,
            column: model[0].length
        };

        for (var line = 0; line < mapMatriceInfo.line; line++) {
            for (var column = 0; column < mapMatriceInfo.column; column++) {
                switch (model[line][column]) {
                    case 0:
                        matrice[line][column] = new Hexagon('water');
                        matrice = addTopsAndSides(mapMatriceInfo, matrice, line, column);
                        break;
                    case 1:
                        var res = '';
                        while (true) {
                            var rand = getRandomIntInclusive(0, 5);
                            if (rand === 0 && hexagonNumber.corn > 0) {
                                res = 'corn';
                                hexagonNumber.corn--;
                                break;
                            } else if (rand === 1 && hexagonNumber.wood > 0) {
                                res = 'wood';
                                hexagonNumber.wood--;
                                break;
                            } else if (rand === 2 && hexagonNumber.ore > 0) {
                                res = 'ore';
                                hexagonNumber.ore--;
                                break;
                            } else if (rand === 3 && hexagonNumber.clay > 0) {
                                res = 'clay';
                                hexagonNumber.clay--;
                                break;
                            } else if (rand === 4 && hexagonNumber.sheep > 0) {
                                res = 'sheep';
                                hexagonNumber.sheep--;
                                break;
                            } else if (rand === 5 && hexagonNumber.desert > 0) {
                                res = 'desert';
                                hexagonNumber.desert--;
                                break;
                            }
                        }
                        matrice[line][column] = new Hexagon(res);
                        matrice = addTopsAndSides(mapMatriceInfo, matrice, line, column);
                        break;
                    case 2:
                        var columnTilt = [];
                        if (line < Math.ceil(mapMatriceInfo.line / 2)) {
                            columnTilt = columnTiltBeforeMid;
                        } else if (line === Math.ceil(mapMatriceInfo.line / 2)) {
                            columnTilt = columnTiltAtMid;
                        } else if (line > Math.ceil(mapMatriceInfo.line / 2)) {
                            columnTilt = columnTiltAfterMid;
                        }
                        for (var index = 0; index < tilt.length; index++) {
                            if (0 <= line + lineTilt[index] && line + lineTilt[index] <= mapMatriceInfo.line && 0 <= column + columnTilt[index] && column + columnTilt[index] <= mapMatriceInfo.column && model[line + lineTilt[index]][column + columnTilt[index]] === 1) {
                                matrice[line][column] = new Hexagon('31', tilt[index]);
                                matrice = addTopsAndSides(mapMatriceInfo, matrice, line, column);
                                hexagonNumber.harbor31--;
                                break;
                            }
                        }
                        break;
                    case 3:
                        var columnTilt = [];
                        if (line < Math.ceil(mapMatriceInfo.line / 2)) {
                            columnTilt = columnTiltBeforeMid;
                        } else if (line === Math.ceil(mapMatriceInfo.line / 2)) {
                            columnTilt = columnTiltAtMid;
                        } else if (line > Math.ceil(mapMatriceInfo.line / 2)) {
                            columnTilt = columnTiltAfterMid;
                        }
                        var res = '';
                        while (true) {
                            var rand = getRandomIntInclusive(0, 4);
                            if (rand === 0 && hexagonNumber.cornHarbor > 0) {
                                res = 'corn';
                                hexagonNumber.cornHarbor--;
                                break;
                            } else if (rand === 1 && hexagonNumber.woodHarbor > 0) {
                                res = 'wood';
                                hexagonNumber.woodHarbor--;
                                break;
                            } else if (rand === 2 && hexagonNumber.oreHarbor > 0) {
                                res = 'ore';
                                hexagonNumber.oreHarbor--;
                                break;
                            } else if (rand === 3 && hexagonNumber.clayHarbor > 0) {
                                res = 'clay';
                                hexagonNumber.clayHarbor--;
                                break;
                            } else if (rand === 4 && hexagonNumber.sheepHarbor > 0) {
                                res = 'sheep';
                                hexagonNumber.sheepHarbor--;
                                break;
                            }
                        }
                        for (var index = 0; index < tilt.length; index++) {
                            if (0 <= line + lineTilt[index]
                                    && line + lineTilt[index] <= mapMatriceInfo.line
                                    && 0 <= column + columnTilt[index]
                                    && column + columnTilt[index] <= mapMatriceInfo.column
                                    && model[line + lineTilt[index]][column + columnTilt[index]] === 1) {
                                matrice[line][column] = new Hexagon(res, tilt[index]);
                                matrice = addTopsAndSides(mapMatriceInfo, matrice, line, column);
                                break;
                            }
                        }
                        break;
                }
            }
        }
        this.initMatriceTop;
        return matrice;
    }

    /*
     * Randomly return a int between min and max inlcluded
     */
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    /*
     * Return mapMatrice
     */
    this.getMapMatrice = function () {
        return mapMatrice;
    };

    /*
     * 
     */
    function addTopsAndSides(modelInfo, matrice, x, y)
    {
        var mat = matrice;
        var middle = parseInt(modelInfo.line / 2);
        var tiltX;
        var tiltY;
        var T_hexa = [];
        if (x >= middle)
        {
            var T_hexa = [];
            if (y === 0)
            {
                T_hexa = [];
                T_hexa = addTops(null, matrice[x][y], null, null);
                T_hexa = addSides(null, matrice[x][y], null, null);
                mat = setHexagon(modelInfo, T_hexa[1], mat, x, y);
            }
            if (Math.abs(x - middle) + y === modelInfo.column - 1)
            {
                if (x > middle)
                {
                    T_hexa = [];
                    T_hexa = addTops(null, null, matrice[x - 1][y + 1], matrice[x][y]);
                    T_hexa = addSides(null, null, matrice[x - 1][y + 1], matrice[x][y]);
                    mat = setHexagon(modelInfo, T_hexa[2], mat, x - 1, y + 1);
                    mat = setHexagon(modelInfo, T_hexa[3], mat, x, y);
                }
                T_hexa = [];
                T_hexa = addTops(null, null, matrice[x][y], null);
                T_hexa = addSides(null, null, matrice[x][y], null);
                mat = setHexagon(modelInfo, T_hexa[2], mat, x, y);
            }
            if (x === modelInfo.line - 1)
            {
                var hexa2 = getHexagon(modelInfo, matrice, x, y - 1)
                T_hexa = [];
                T_hexa = addTops(null, matrice[x][y], hexa2, null);
                T_hexa = addSides(null, matrice[x][y], hexa2, null);
                mat = setHexagon(modelInfo, T_hexa[1], mat, x, y);
                if (hexa2 !== null)
                {
                    mat = setHexagon(modelInfo, T_hexa[2], mat, x, y - 1);
                }
            }
            T_hexa = [];
            tiltX = [x, x - 1, x - 1, x];
            tiltY = [y, y + 1, y, y - 1];
            T_hexa.push(getHexagon(modelInfo, matrice, tiltX[0], tiltY[0])); //hexagon South-East
            T_hexa.push(getHexagon(modelInfo, matrice, tiltX[1], tiltY[1])); //hexagon East
            T_hexa.push(getHexagon(modelInfo, matrice, tiltX[2], tiltY[2]));
            T_hexa.push(getHexagon(modelInfo, matrice, tiltX[3], tiltY[3])); //hexagon South-West

            T_hexa = addTops(T_hexa[0], T_hexa[1], T_hexa[2], T_hexa[3]);
            T_hexa = addSides(T_hexa[0], T_hexa[1], T_hexa[2], T_hexa[3]);

            mat = setHexagon(modelInfo, T_hexa[0], mat, tiltX[0], tiltY[0]); //hexagon South-East
            mat = setHexagon(modelInfo, T_hexa[1], mat, tiltX[1], tiltY[1]); //hexagon East
            mat = setHexagon(modelInfo, T_hexa[2], mat, tiltX[2], tiltY[2]);
            mat = setHexagon(modelInfo, T_hexa[3], mat, tiltX[3], tiltY[3]); //hexagon South-West
        }
        if (x <= middle)
        {
            if (Math.abs(x - middle) + y === modelInfo.column - 1)
            {
                T_hexa = [];
                T_hexa = addTops(null, null, null, matrice[x][y]);
                T_hexa = addSides(null, null, null, matrice[x][y]);
                mat = setHexagon(modelInfo, T_hexa[3], mat, x, y);
            }
            var T_hexa = [];
            tiltX = [x, x - 1, x - 1, x];
            tiltY = [y, y, y - 1, y - 1];
            T_hexa.push(getHexagon(modelInfo, matrice, tiltX[0], tiltY[0]));
            T_hexa.push(getHexagon(modelInfo, matrice, tiltX[1], tiltY[1])); //hexagon North-East
            T_hexa.push(getHexagon(modelInfo, matrice, tiltX[2], tiltY[2])); //hexagon North-West
            T_hexa.push(getHexagon(modelInfo, matrice, tiltX[3], tiltY[3])); //hexagon West

            T_hexa = addTops(T_hexa[0], T_hexa[1], T_hexa[2], T_hexa[3]);
            T_hexa = addSides(T_hexa[0], T_hexa[1], T_hexa[2], T_hexa[3]);

            mat = setHexagon(modelInfo, T_hexa[0], mat, tiltX[0], tiltY[0]);
            mat = setHexagon(modelInfo, T_hexa[1], mat, tiltX[1], tiltY[1]); //hexagon North-East
            mat = setHexagon(modelInfo, T_hexa[2], mat, tiltX[2], tiltY[2]); //hexagon North-West
            mat = setHexagon(modelInfo, T_hexa[3], mat, tiltX[3], tiltY[3]); //hexagon West
        }

        return mat;
    }

    /*
     * 
     */
    function addTops(hexagon, hexaNE, hexaNW, hexaW)
    {
        var top1 = new Top(hexagon, hexaNE, hexaNW, "21");
        if (hexagon !== null)
        {
            hexagon.T_Top["N"] = top1;
        }
        if (hexaNE !== null)
        {
            hexaNE.T_Top["S-W"] = top1;
        }
        if (hexaNW !== null)
        {
            hexaNW.T_Top["S-E"] = top1;
        }
        var top2 = new Top(hexagon, hexaNW, hexaW, "12");
        if (hexagon !== null)
        {
            hexagon.T_Top["N-W"] = top2;
        }
        if (hexaNW !== null)
        {
            hexaNW.T_Top["S"] = top2;
        }
        if (hexaW !== null)
        {
            hexaW.T_Top["N-E"] = top2;
        }
        return [hexagon, hexaNE, hexaNW, hexaW];
    }

    /*
     * 
     */
    function addSides(hexagon, hexaNE, hexaNW, hexaW)
    {
        var side1 = new Side(hexagon, hexaNE, "gauche");
        if (hexagon !== null)
        {
            hexagon.T_Side['N-E'] = side1;
        }
        if (hexaNE !== null)
        {
            hexaNE.T_Side['S-W'] = side1;
        }
        var side2 = new Side(hexagon, hexaNW, "droite");
        if (hexagon !== null)
        {
            hexagon.T_Side['N-W'] = side2;
        }
        if (hexaNW !== null)
        {
            hexaNW.T_Side['S-E'] = side2;
        }
        var side3 = new Side(hexagon, hexaW, "vertical");
        if (hexagon !== null)
        {
            hexagon.T_Side['W'] = side3;
        }
        if (hexaW !== null)
        {
            hexaW.T_Side['E'] = side3;
        }
        return [hexagon, hexaNE, hexaNW, hexaW];
    }

    /*
     * 
     */
    function getHexagon(modelInfo, matrice, x, y)
    {
        if (x >= 0 && y >= 0 && x < modelInfo.line && y < modelInfo.column)
        {
            return matrice[x][y];
        }
        return null;
    }

    /*
     * 
     */
    function setHexagon(modelInfo, hexagon, matrice, x, y)
    {
        var middle = parseInt(matrice.length / 2);
        var mat = matrice;
        if (x >= 0 && y >= 0 && x < modelInfo.line && y <= modelInfo.column)
        {
            if (hexagon !== null)
            {
                hexagon.position = [x, y];
                if (middle > x)
                {
                    hexagon.positionOnMap = 0;
                }
                if (middle < x)
                {
                    hexagon.positionOnMap = 2;
                }
                if (middle === x)
                {
                    hexagon.positionOnMap = 1;
                }
                mat[x][y] = hexagon;
            }
        }
        return mat;
    }

    /*
     * 
     */
    this.showMap = function (matrice)
    {
        var body = $("body");
        var nbDiv = matrice.length;
        var nbCol = matrice[0].length;
        var milieu = parseInt(nbDiv / 2);
        for (var divCurr = 0; divCurr < nbDiv; divCurr++)
        {
            var div;
            if (divCurr < milieu)
            {
                div = $('<div style="position:absolute;top: ' + divCurr * 76 + 'px;left:' + (milieu - divCurr) * 50 + 'px"></div>');
            } else
            {
                if (divCurr > milieu)
                {
                    div = $('<div style="position:absolute;top: ' + divCurr * 76 + 'px;left:' + (divCurr - milieu) * 50 + 'px"></div>');
                } else
                {
                    div = $('<div style="position:absolute;top: ' + divCurr * 76 + 'px;left:0px"></div>');
                }
            }
            for (var column = 0; column < nbCol; column++) {
                if (matrice[divCurr][column] !== null) {
                    $(matrice[divCurr][column].display()).appendTo(div);
                }
            }
            div.appendTo(body);
        }
    };

    /*
     * 
     */
    this.initMatriceTop = function ()
    {
        var matLines = mapMatrice.length;
        var matColumns = mapMatrice[0].length;
        var matMiddle = parseInt(mapMatrice.length / 2);
        for (var line = 0; line < matLines; line++)
        {
            var topN = [];
            var topS = [];
            var topNE = [];
            var topSE = [];
            for (var column = 0; column < matColumns; column++)
            {
                var hexa1 = mapMatrice[line][column];
                var hexa2 = mapMatrice[line][column];
                if (hexa1 !== null)
                {
                    if (line <= matMiddle)
                    {
                        var hexaTopN = hexa1.T_Top["N"];
                        if (hexaTopN !== null)
                        {
                            topN.push(hexaTopN);
                        }
                        //else topN.push("N");
                    }
                    if (line >= matMiddle)
                    {
                        var hexaTopS = hexa1.T_Top["S"];
                        if (hexaTopS !== null)
                        {
                            topS.push(hexaTopS);
                        }
                        //else topS.push("S");
                    }
                }
                if (hexa2 !== null)
                {
                    if (line <= matMiddle)
                    {
                        if (column === 0)
                        {
                            var hexaTopN = hexa2.T_Top["N-W"];
                            if (hexaTopN !== null)
                            {
                                topNE.push(hexaTopN);
                            }
                        }
                        var hexaTopN = hexa2.T_Top["N-E"];
                        if (hexaTopN !== null)
                        {
                            topNE.push(hexaTopN);
                        }
                        //else topNE.push("NE");
                    }
                    if (line >= matMiddle)
                    {
                        if (column === 0)
                        {
                            var hexaTopS = hexa2.T_Top["S-W"];
                            if (hexaTopS !== null)
                            {
                                topSE.push(hexaTopS);
                            }
                        }
                        var hexaTopS = hexa2.T_Top["S-E"];
                        if (hexaTopS !== null)
                        {
                            topSE.push(hexaTopS);
                        }
                        //else topSE.push("SE");
                    }
                }
            }
            if (topN.length !== 0)
            {
                while (topN.length < matLines + 1)
                {
                    topN.push(null);
                }
                this.matriceTop.push(topN);
            }
            if (topNE.length !== 0)
            {
                while (topNE.length < matLines + 1)
                {
                    topNE.push(null);
                }
                this.matriceTop.push(topNE);
            }
            if (topSE.length !== 0)
            {
                while (topSE.length < matLines + 1)
                {
                    topSE.push(null);
                }
                this.matriceTop.push(topSE);
            }
            if (topS.length !== 0)
            {
                while (topS.length < matLines + 1)
                {
                    topS.push(null);
                }
                this.matriceTop.push(topS);
            }
        }
        this.addTopsPosition(this.matriceTop);
    };

    this.addTopsPosition = function (matriceTop)
    {
        var nbLine = matriceTop.length;
        var nbColumn = matriceTop[0].length;
        for (var line = 0; line < nbLine; line++)
        {
            for (var column = 0; column < nbColumn; column++)
            {
                var top = matriceTop[line][column];
                if (top !== null)
                {
                    top.position = [line, column];
                }
            }
        }
    };

    /*
     * 
     */
    this.initMatriceSide = function ()
    {
        var matLines = mapMatrice.length;
        var matColumns = mapMatrice[0].length;
        var matMiddle = parseInt(mapMatrice.length / 2);
        for (var line = 0; line < matLines; line++)
        {
            var topN = [];
            var topS = [];
            var topW = [];
            for (var column = 0; column < matColumns; column++)
            {
                var hexagon = mapMatrice[line][column];
                if (hexagon !== null)
                {
                    if (column === 0)
                    {
                        var hexaSideE = hexagon.T_Side["W"];
                        if (hexaSideE !== null)
                        {
                            topW.push(hexaSideE);
                        }
                    }
                    var hexaSideE = hexagon.T_Side["E"];
                    if (hexaSideE !== null)
                    {
                        topW.push(hexaSideE);
                    }

                    if (line <= matMiddle)
                    {
                        var hexaSideN = hexagon.T_Side["N-W"];
                        if (hexaSideN !== null)
                        {
                            topN.push(hexaSideN);
                        }
                        hexaSideN = hexagon.T_Side["N-E"];
                        if (hexaSideN !== null)
                        {
                            topN.push(hexaSideN);
                        }
                        //else topE.push("NE");
                    }

                    if (line >= matMiddle)
                    {
                        var hexaSideS = hexagon.T_Side["S-W"];
                        if (hexaSideS !== null)
                        {
                            topS.push(hexaSideS);
                        }
                        hexaSideS = hexagon.T_Side["S-E"];
                        if (hexaSideS !== null)
                        {
                            topS.push(hexaSideS);
                        }
                        //else topW.push("SE");
                    }
                }
            }
            if (topN.length !== 0)
            {
                while (topN.length < matLines * 2)
                {
                    topN.push(null);
                }
                this.matriceSide.push(topN);
            }
            if (topW.length !== 0)
            {
                while (topW.length < matLines * 2)
                {
                    topW.push(null);
                }
                this.matriceSide.push(topW);
            }
            if (topS.length !== 0)
            {
                while (topS.length < matLines * 2)
                {
                    topS.push(null);
                }
                this.matriceSide.push(topS);
            }
        }
        this.addSidesPosition(this.matriceSide);
    };

    this.addSidesPosition = function (matriceSide)
    {
        var nbLine = matriceSide.length;
        var nbColumn = matriceSide[0].length;
        for (var line = 0; line < nbLine; line++)
        {
            for (var column = 0; column < nbColumn; column++)
            {
                var side = matriceSide[line][column];
                if (side !== null)
                {
                    side.position = [line, column];
                }
            }
        }
    };
}



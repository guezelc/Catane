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
    var mapMatriceModel = [
        [2, 0, 3, 0, null, null, null],
        [0, 1, 1, 1, 2, null, null],
        [3, 1, 1, 1, 1, 0, null],
        [0, 1, 1, 1, 1, 1, 3],
        [3, 1, 1, 1, 1, 0, null],
        [0, 1, 1, 1, 2, null, null],
        [2, 0, 3, 0, null, null, null]
    ];

    /*
     * The number of each hexagone type who can be on the catane map
     * @type type
     */
    var hexagonNumber = {
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
     * Init mapMaptrice object:
     *  - create a catane map
     */
    this.init = function () {
        mapMatrice = generateCataneMap(mapMatriceModel, hexagonNumber);
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
                matrice[line].push('null');
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
        var tiltX = [-1, -1, 0];
        var tiltY = [-1, 0, -1];
        var T_hexa = [];

        T_hexa.push(getHexagon(modelInfo, matrice, x, y));
        T_hexa.push(getHexagon(modelInfo, matrice, x + tiltX[0], y + tiltY[0])); //hexagon North-East
        T_hexa.push(getHexagon(modelInfo, matrice, x + tiltX[1], y + tiltY[1])); //hexagon North-West
        T_hexa.push(getHexagon(modelInfo, matrice, x + tiltX[2], y + tiltY[2])); //hexagon West

        T_hexa = addTops(T_hexa[0], T_hexa[1], T_hexa[2], T_hexa[3]);
        T_hexa = addSides(T_hexa[0], T_hexa[1], T_hexa[2], T_hexa[3]);

        mat = setHexagon(T_hexa[0], mat, x, y);
        mat = setHexagon(T_hexa[1], mat, x + tiltX[0], y + tiltY[0]); //hexagon North-East
        mat = setHexagon(T_hexa[2], mat, x + tiltX[1], y + tiltY[1]); //hexagon North-West
        mat = setHexagon(T_hexa[3], mat, x + tiltX[2], y + tiltY[2]); //hexagon West

        return mat;
    }

    /*
     * 
     */
    function addTops(hexagon, hexaNE, hexaNW, hexaW)
    {
        var top1 = new Top(hexagon, hexaNE, hexaNW);
        hexagon.T_Top["N"] = top1;
        if (hexaNE !== null)
        {
            hexaNE.T_Top["S-W"] = top1;
        }
        if (hexaNW !== null)
        {
            hexaNW.T_Top["S-E"] = top1;
        }
        var top2 = new Top(hexagon, hexaNW, hexaW);
        hexagon.T_Top["N-W"] = top2;
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
        var side1 = new Side(hexagon, hexaNE);
        hexagon.T_Side['N-E'];
        if (hexaNE !== null)
        {
            hexagon.T_Side['S-W'];
        }
        var side2 = new Side(hexagon, hexaNW);
        hexagon.T_Side['N-W'];
        if (hexaNW !== null)
        {
            hexagon.T_Side['S-E'];
        }
        var side3 = new Side(hexagon, hexaW);
        hexagon.T_Side['W'];
        if (hexaW !== null)
        {
            hexagon.T_Side['E'];
        }
        return [hexagon, hexaNE, hexaNW, hexaW];
    }

    /*
     * 
     */
    function getHexagon(modelInfo, matrice, x, y)
    {
        var hexagon = null;

        if (x >= 0 && y >= 0 && x < modelInfo.line && y <= modelInfo.column)
        {
            hexagon = matrice[x][y];
        }
        return hexagon;
    }

    /*
     * 
     */
    function setHexagon(hexagon, matrice, x, y)
    {
        var mat = matrice;
        mat[x][y] = hexagon;
        return mat;
    }

    /*
     * 
     */
    function setSidesOfTop(modelInfo, matrice)
    {
        var matX = 0;
        var matY = 0;
    }

    /*
     * 
     */
    function setTopsOfSide(modelInfo, matrice)
    {

    }
}



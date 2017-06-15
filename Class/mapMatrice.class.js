/*
 * A Catane game map uses matrice structure
 */
function MapMatrice() {
    /*
     * The matrice where the gerated catane map was stocked
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
     * 
     * @type Array
     */
    var lineTilt = [-1, -1, 0, 0, 1, 1];
    
    /*
     * 
     * @type Array
     */
    var columnTilt = [-1, 0, -1, 1, -1, 0];
    
    /*
     * Each posible tilt sync with columnTilt and lineTilt array index
     * @type Array
     */
    var tilt = ['NE', 'NW', 'E', 'W', 'SE', 'SW'];
    
    /*
     * Init mapMaptrice object:
     *  - create a catane map
     * @returns {undefined}
     */
    this.init = function () {
        mapMatrice = generateCataneMap(mapMatriceModel, hexagonNumber);
    };
    
    /*
     * Generate the catane map
     * @param {type} Pmodel
     * @param {type} PhexagonNumber
     * @returns {Array}
     */
    function generateCataneMap(Pmodel, PhexagonNumber) {
        var matrice = [];

        var model = Pmodel;
        
        var hexagonNumber = PhexagonNumber;

        /*
         * Information on mapMatriceModel useful to generate catane ma
         */
        var mapMatriceInfo = {
            line: model.lenght,
            column: model[0].lenght
        };

        for (var line = 0; line <= mapMatriceInfo.line; line++) {
            for (var column = 0; column <= mapMatriceInfo.column; column++) {
                switch (model[line][column]) {
                    case 0:
                        matrice[line][column] = new Hexagon('water');
                        //matrice = addTopsAndSides(mapMatriceInfo, matrice, line, column);
                        break;
                    case 1:
                        var res = '';
                        while (res === '') {
                            var rand = getRandomIntInclusive(0, 5);
                            if (rand === 0 && hexagonNumber.corn > 0) {
                                res = 'corn';
                                hexagonNumber.corn--;
                            } else if (rand === 1 && hexagonNumber.wood > 0) {
                                res = 'wood';
                                hexagonNumber.wood--;
                            } else if (rand === 2 && hexagonNumber.ore > 0) {
                                res = 'ore';
                                hexagonNumber.ore--;
                            } else if (rand === 3 && hexagonNumber.clay > 0) {
                                res = 'clay';
                                hexagonNumber.clay--;
                            } else if (rand === 4 && hexagonNumber.sheep > 0) {
                                res = 'sheep';
                                hexagonNumber.sheep--;
                            } else if (rand === 5 && hexagonNumber.desert > 0) {
                                res = 'desert';
                                hexagonNumber.desert--;
                            }
                        }
                        matrice[line][column] = new Hexagon(res);
                        //matrice = addTopsAndSides(mapMatriceInfo, matrice, line, column);
                        break;
                    case 2:
                    for (var index = 0; index <= tilt.length; index++) {
                        if (0 <= line + lineTilt[index] <= mapMatriceInfo.line
                                && 0 <= column + columnTilt[index] <= mapMatriceInfo.column
                                && model[line + lineTilt[index]][column + columnTilt[index]] === 1) {
                            matrice[line][column] = new Hexagon('31', tilt[index]);
                            //matrice = addTopsAndSides(mapMatriceInfo, matrice, line, column);
                            hexagonNumber.harbor31--;
                            break;
                        }
                    }
                    case 3:
                        var res = '';
                        while (res === '') {
                            var rand = getRandomIntInclusive(0, 4);
                            if (rand === 0 && hexagonNumber.cornHarbor > 0) {
                                res = 'corn';
                                hexagonNumber.cornHarbor--;
                            } else if (rand === 1 && hexagonNumber.woodHarbor > 0) {
                                res = 'wood';
                                hexagonNumber.woodHarbor--;
                            } else if (rand === 2 && hexagonNumber.oreHarbor > 0) {
                                res = 'ore';
                                hexagonNumber.oreHarbor--;
                            } else if (rand === 3 && hexagonNumber.clayHarbor > 0) {
                                res = 'clay';
                                hexagonNumber.clayHarbor--;
                            } else if (rand === 4 && hexagonNumber.sheepHarbor > 0) {
                                res = 'sheep';
                                hexagonNumber.sheepHarbor--;
                            }
                        }
                        for (var index = 0; index <= tilt.length; index++) {
                            if (0 <= line + lineTilt[index] <= mapMatriceInfo.line
                                    && 0 <= column + columnTilt[index] <= mapMatriceInfo.column
                                    && model[line + lineTilt[index]][column + columnTilt[index]] === 1) {
                                matrice[line][column] = new Hexagon(res, tilt[index]);
                                //matrice = addTopsAndSides(mapMatriceInfo, matrice, line, column);
                                break;
                            }
                        }
                }
            }
        }
        return matrice;
    }

    this.getMapMatrice = function () {
        return mapMatrice;
    };
    
    function addTopsAndSides(modelInfo,matrice,x,y)
    {
        var mat = matrice;        
        var tiltX = [-1,-1,0,];
        var tiltY = [-1,0,-1];
        var T_hexa;
        
        T_hexa[0]=getHexagon(modelInfo,matrice,x,y);
        T_hexa[1]=getHexagon(modelInfo,matrice,x+tiltX[0],y+tiltY[0]); //hexagon North-East
        T_hexa[2]=getHexagon(modelInfo,matrice,x+tiltX[1],y+tiltY[1]); //hexagon North-West
        T_hexa[3]=getHexagon(modelInfo,matrice,x+tiltX[2],y+tiltY[2]); //hexagon West
        
        T_hexa = addTops(T_hexa[0],T_hexa[1],T_hexa[2],T_hexa[3]);
        T_hexa = addSides(T_hexa[0],T_hexa[1],T_hexa[2],T_hexa[3]);
        
        mat = setHexagon(T_hexa[0],mat,x,y);
        mat = setHexagon(T_hexa[1],mat,x+tiltX[0],y+tiltY[0]); //hexagon North-East
        mat = setHexagon(T_hexa[2],mat,x+tiltX[1],y+tiltY[1]); //hexagon North-West
        mat = setHexagon(T_hexa[3],mat,x+tiltX[2],y+tiltY[2]); //hexagon West
        
        return mat;
    }
    
    function addTops(hexagon,hexaNE,hexaNW,hexaW)
    {
        var top1 = new Top(hexagon,hexaNE,hexaNW);
        hexagon.T_Top["N"]=top1;
        if(hexaNE != null)
        {
            hexaNE.T_Top["S-W"]=top1;
        }
        if(hexaNW != null)
        {
            hexaNW.T_Top["S-E"]=top1;
        }
        var top2 = new Top(hexagon,hexaNW,hexaW);
        hexagon.T_Top["N-W"]=top2;
        if(hexaNW != null)
        {
            hexaNW.T_Top["S"]=top2;
        }
        if(hexaW != null)
        {
            hexaW.T_Top["N-E"]=top2;
        }
        return [hexagon,hexaNE,hexaNW,hexaW];
    }
    
    function addSides(hexagon,hexaNE,hexaNW,hexaW)
    {
        var side1 = new Side(hexagon,hexaNE);
        hexagon.T_Side['N-E'];
        if(hexaNE != null)
        {
            hexagon.T_Side['S-W'];
        }
        var side2 = new Side(hexagon,hexaNW);
        hexagon.T_Side['N-W'];
        if(hexaNW != null)
        {
            hexagon.T_Side['S-E'];
        }
        var side3 = new Side(hexagon,hexaW);
        hexagon.T_Side['W'];
        if(hexaW != null)
        {
            hexagon.T_Side['E'];
        }
        return [hexagon,hexaNE,hexaNW,hexaW];
    }
    
    function getHexagon(modelInfo,matrice,x,y)
    {
        var hexagon = null;
        
        if(x>=0 && y>=0 && x<modelInfo.line && y<=modelInfo.column)
        {
            hexagon = matrice[x][y];
        }
        return hexagon;
    }
    
    function setHexagon(hexagon,matrice,x,y)
    {
        var mat = matrice;
        mat[x][y]=hexagon;
        return mat
    }
    
    function setSidesOfTop(modelInfo,matrice)
    {
        var matX = 0;
        var matY = 0;
    }
    
    function setTopsOfSide(modelInfo,matrice)
    {
        
    }
}



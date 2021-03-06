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
        [0, 0, 1, 1, 1, 1, 2, 4, 0],
        [0, 2, 1, 1, 1, 0, 4, 0, null],
        [4, 0, 2, 0, 3, 0, 0, null, null],
        [4, 4, 4, 0, 4, 0, null, null, null],
        [0, 0, 4, 4, 0, null, null, null, null]
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
     * The number of each number who can be on the catane map
     * @type int
     */
    var numberBase = {
        2: 1,
        3: 2,
        4: 2,
        5: 2,
        6: 2,
        8: 2,
        9: 2,
        10: 2,
        11: 2,
        12: 1
    };
    /*
     * The number of each hexagone type who can be on the catane map
     * @type type
     */
    var hexagonNumberExtension = {
        cornIsland: 2,
        woodIsland: 2,
        sheepIsland: 2,
        oreIsland: 2,
        clayIsland: 2,
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
     * The number of each number who can be on the catane map
     * @type int
     */
    var numberExtension = {
        2: 2,
        3: 4,
        4: 4,
        5: 4,
        6: 4,
        7: 4,
        8: 4,
        9: 4,
        10: 4,
        11: 4,
        12: 2
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
        switch (extension) {
            case "B":
                this.
                        mapMatrice = generateCataneMap(mapMatriceModelBase, hexagonNumberBase, numberBase);
                break;
            case "N":
                mapMatrice = generateCataneMap(mapMatriceModelExtension, hexagonNumberExtension, numberExtension);
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
    function generateCataneMap(Pmodel, PhexagonNumber, Pnumber) {

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
         * Number of each hexagon number available
         * @type type
         */
        var number = Pnumber;

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
                        break;
                    case 1:
                        var res = '';
                        while (true) {
                            var rand = getRandomIntInclusive(0, 5);
                            var resources = ['corn','wood','ore','clay','sheep','desert'];
                            if (hexagonNumber[resources[rand]] > 0) {
                                res = resources[rand];
                                hexagonNumber[resources[rand]]--;
                                break;
                            } 
                        }
                        matrice[line][column] = new Hexagon(res);                        
                        break;
                    case 2:
                        var columnTilt = [];
                        if (line < Math.ceil(mapMatriceInfo.line / 2)) {
                            columnTilt = columnTiltBeforeMid;
                        }
                        else if (line === Math.ceil(mapMatriceInfo.line / 2)) {
                            columnTilt = columnTiltAtMid;
                        }
                        else if (line > Math.ceil(mapMatriceInfo.line / 2)) {
                            columnTilt = columnTiltAfterMid;
                        }                                
                        hexagonNumber.harbor31--;
                        for (var index = 0; index < tilt.length; index++) {
                            if (0 <= line + lineTilt[index] && line + lineTilt[index] <= mapMatriceInfo.line && 0 <= column + columnTilt[index] && column + columnTilt[index] <= mapMatriceInfo.column && model[line + lineTilt[index]][column + columnTilt[index]] === 1) {
                                matrice[line][column] = new Hexagon('31', tilt[index]);
                                break;
                            }
                        }
                        break;
                    case 3:
                        var columnTilt = [];
                        if (line < Math.ceil(mapMatriceInfo.line / 2)) {
                            columnTilt = columnTiltBeforeMid;
                        }
                        else if (line === Math.ceil(mapMatriceInfo.line / 2)) {
                            columnTilt = columnTiltAtMid;
                        }
                        else if (line > Math.ceil(mapMatriceInfo.line / 2)) {
                            columnTilt = columnTiltAfterMid;
                        }
                        var res = '';
                        while (true) {
                            var rand = getRandomIntInclusive(0, 4);
                            var resources = ['corn','wood','ore','clay','sheep'];
                            if (hexagonNumber[resources[rand]+'Harbor'] > 0) {
                                res = resources[rand];
                                hexagonNumber[resources[rand]+'Harbor']--;
                                break;
                            }
                        }
                        for (var index = 0; index < tilt.length; index++) {
                            if (0 <= line + lineTilt[index] && line + lineTilt[index] <= mapMatriceInfo.line && 0 <= column + columnTilt[index] && column + columnTilt[index] <= mapMatriceInfo.column && model[line + lineTilt[index]][column + columnTilt[index]] === 1) {
                                matrice[line][column] = new Hexagon(res, tilt[index]);                                
                                break;
                            }
                        }
                        break;
                    case 4 :
                        var res = '';
                        while (true) {
                            var rand = getRandomIntInclusive(0, 4);
                            var resources = ['corn','wood','ore','clay','sheep'];
                            if (hexagonNumber[resources[rand]+'Island'] > 0) {
                                res = resources[rand];
                                hexagonNumber[resources[rand]+'Island']--;
                                break;
                            } 
                        }
                        matrice[line][column] = new Hexagon(res);                        
                        break;
                        
                }
            }
        } 
        addTopsAndSides(mapMatriceInfo, matrice);
        addTopsToSidesAndSidesToTops(mapMatriceInfo, matrice);
        addHexagonNumber(matrice,model,number);
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
     * Get mapMatrice
     */
    this.getMapMatrice = function () {
        return mapMatrice;
    };

    /*
     * add top and side to hexagon in function of their position on the catane map
     * @return matrice update
     */
    function addTopsAndSides(modelInfo, matrice)
    {
        var nbLine = modelInfo.line;
        var nbColumn = modelInfo.column;
        var middle = parseInt(modelInfo.line / 2);
        var tiltX;
        var tiltY;
        var T_hexa = [];
        for(var line = 0; line < nbLine; line++)
        {
            for(var column = 0; column < nbColumn; column++)
            {
                if (line <= middle)
                {
                    var T_hexa = [];
                    tiltX = [line , line - 1, line - 1, line ];
                    tiltY = [column, column, column - 1, column - 1];
                    T_hexa.push(getHexagon(modelInfo, matrice, tiltX[0], tiltY[0]));
                    T_hexa.push(getHexagon(modelInfo, matrice, tiltX[1], tiltY[1])); //hexagon North-East
                    T_hexa.push(getHexagon(modelInfo, matrice, tiltX[2], tiltY[2])); //hexagon North-West
                    T_hexa.push(getHexagon(modelInfo, matrice, tiltX[3], tiltY[3])); //hexagon West

                    addTops(T_hexa[0], T_hexa[1], T_hexa[2], T_hexa[3]);
                    addSides(T_hexa[0], T_hexa[1], T_hexa[2], T_hexa[3],'North');
                    addTops(null, null, null, T_hexa[0]);
                    addSides(null, null, null, T_hexa[0],'North');

                    setHexagon(modelInfo, T_hexa[0], matrice, tiltX[0], tiltY[0]);
                    setHexagon(modelInfo, T_hexa[1], matrice, tiltX[1], tiltY[1]); //hexagon North-East
                    setHexagon(modelInfo, T_hexa[2], matrice, tiltX[2], tiltY[2]); //hexagon North-West
                    setHexagon(modelInfo, T_hexa[3], matrice, tiltX[3], tiltY[3]); //hexagon West
                }
                if (line >= middle)
                {
                    var T_hexa = [];
                    tiltX = [line + 1,line ,line ,line + 1];
                    tiltY = [column ,column + 1,column ,column - 1];
                    T_hexa.push(getHexagon(modelInfo, matrice, tiltX[0], tiltY[0]));
                    T_hexa.push(getHexagon(modelInfo, matrice, tiltX[1], tiltY[1])); //hexagon North-East
                    T_hexa.push(getHexagon(modelInfo, matrice, tiltX[2], tiltY[2])); //hexagon North-West
                    T_hexa.push(getHexagon(modelInfo, matrice, tiltX[3], tiltY[3])); //hexagon West

                    addTops(T_hexa[0], T_hexa[1], T_hexa[2], T_hexa[3]);
                    addSides(T_hexa[2], T_hexa[3],T_hexa[0] , T_hexa[1],'South');
                    addTops(null, T_hexa[2], null, null);
                    addSides(null, null, null, T_hexa[2],'South');

                    setHexagon(modelInfo, T_hexa[0], matrice, tiltX[0], tiltY[0]);
                    setHexagon(modelInfo, T_hexa[1], matrice, tiltX[1], tiltY[1]); //hexagon North-East
                    setHexagon(modelInfo, T_hexa[2], matrice, tiltX[2], tiltY[2]); //hexagon North-West
                    setHexagon(modelInfo, T_hexa[3], matrice, tiltX[3], tiltY[3]); //hexagon West
                }
            }
        }
    }

    /*
     * add tops to the hexagons in paramater
     * @return a table with the 4 hexagons update
     */
    function addTops(hexa, hexa2, hexa3, hexa4) {
        var top1 = new Top(hexa, hexa2, hexa3, "21");
        if (hexa !== null) {
            hexa.T_Top["N"] = top1;
        }
        if (hexa2 !== null) {
            hexa2.T_Top["S-W"] = top1;
        }
        if (hexa3 !== null) {
            hexa3.T_Top["S-E"] = top1;
        }
        var top2 = new Top(hexa, hexa3, hexa4, "12");
        if (hexa !== null) {
            hexa.T_Top["N-W"] = top2;
        }
        if (hexa3 !== null) {
            hexa3.T_Top["S"] = top2;
        }
        if (hexa4 !== null) {
            hexa4.T_Top["N-E"] = top2;
        }
    }
    
    /*
     * Add the sides to the hexagons in parameter
     * 
     * @param {type} hexa1
     * @param {type} hexa2
     * @param {type} hexa3
     * @param {type} hexa4
     * @param {type} position
     * @returns {Array} with the 4 hexagon update
     */
    function addSides(hexa1, hexa2, hexa3, hexa4,position) {
        if(position === 'North')
        {
            var side1 = new Side(hexa1, hexa2, "left");
            if (hexa1 !== null) {
                hexa1.T_Side['N-E'] = side1;
            }
            if (hexa2 !== null) {
                hexa2.T_Side['S-W'] = side1;
            }
            var side2 = new Side(hexa1, hexa3, "right");
            if (hexa1 !== null) {
                hexa1.T_Side['N-W'] = side2;
            }
            if (hexa3 !== null) {
                hexa3.T_Side['S-E'] = side2;
            }
            var side3 = new Side(hexa1, hexa4, "vertical");
            if (hexa1 !== null) {
                hexa1.T_Side['W'] = side3;
            }
            if (hexa4 !== null) {
                hexa4.T_Side['E'] = side3;
            }
        }
        if(position === 'South')
        {
            var side1 = new Side(hexa2, hexa1, "left");
            if (hexa2 !== null) {
                hexa2.T_Side['N-E'] = side1;
            }
            if (hexa1 !== null) {
                hexa1.T_Side['S-W'] = side1;
            }
            var side2 = new Side(hexa3, hexa1, "right");
            if (hexa3 !== null) {
                hexa3.T_Side['N-W'] = side2;
            }
            if (hexa1 !== null) {
                hexa1.T_Side['S-E'] = side2;
            }
            var side3 = new Side(hexa4, hexa1, "vertical");
            if (hexa4 !== null) {
                hexa4.T_Side['W'] = side3;
            }
            if (hexa1 !== null) {
                hexa1.T_Side['E'] = side3;
            }
        }
    }

    /**
     * 
     * @param {type} modelInfo
     * @param {type} matrice
     * @param {type} x
     * @param {type} y
     * 
     * @returns {unresolved}
     */
    function getHexagon(modelInfo, matrice, x, y) {
        if (x >= 0 && y >= 0 && x < modelInfo.line && y < modelInfo.column) {
            return matrice[x][y];
        }
        return null;
    }

    /**
     * Update an hexagon
     * 
     * @param {type} modelInfo
     * @param {type} hexagon
     * @param {type} matrice
     * @param {type} x
     * @param {type} y
     * 
     * @returns {MapMatrice.setHexagon.mat}
     */
    function setHexagon(modelInfo, hexagon, matrice, x, y) {
        var middle = parseInt(matrice.length / 2);
        if (x >= 0 && y >= 0 && x < modelInfo.line && y <= modelInfo.column)
        {
            if (hexagon !== null)
            {
                hexagon.position = [x, y];
                if (middle > x) {
                    hexagon.positionOnMap = 0;
                }
                if (middle < x) {
                    hexagon.positionOnMap = 2;
                }
                if (middle === x) {
                    hexagon.positionOnMap = 1;
                }
                matrice[x][y] = hexagon;
            }
        }
    }

    /**
     * Show the map in html
     */
    this.showMap = function () {
        var matrice = mapMatrice;
        var body = $("body");
        var nbDiv = matrice.length;
        var nbCol = matrice[0].length;
        var milieu = parseInt(nbDiv / 2);
        for (var divCurr = 0; divCurr < nbDiv; divCurr++) {
            var div;
            if (divCurr < milieu) {
                div = $('<div style="position:absolute;top: ' + divCurr * 76 + 'px;left:' + (milieu - divCurr) * 50 + 'px"></div>');
            }
            else {
                if (divCurr > milieu) {
                    div = $('<div style="position:absolute;top: ' + divCurr * 76 + 'px;left:' + (divCurr - milieu) * 50 + 'px"></div>');
                }
                else {
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

    /**
     * Initialise matrice of top in order to linking them to hexagons
     * @returns {undefined}
     */
    this.initMatriceTop = function () {
        var matLines = mapMatrice.length;
        var matColumns = mapMatrice[0].length;
        var matMiddle = parseInt(mapMatrice.length / 2);
        for (var line = 0; line < matLines; line++) {
            var topN = [];
            var topS = [];
            var topNE = [];
            var topSE = [];
            for (var column = 0; column < matColumns; column++) {
                var hexa1 = mapMatrice[line][column];
                var hexa2 = mapMatrice[line][column];
                if (hexa1 !== null)
                {
                    if (line <= matMiddle)
                    {
                        topN = setTop(hexa1, "N", topN);
                    }
                    if (line >= matMiddle)
                    {
                        topS = setTop(hexa1, "S", topS);
                    }
                }
                if (hexa2 !== null)
                {
                    if (line <= matMiddle)
                    {
                        if (column === 0)
                        {
                            topNE = setTop(hexa2, "N-W", topNE);
                        }
                        topNE = setTop(hexa2, "N-E", topNE);
                    }
                    if (line >= matMiddle)
                    {
                        if (column === 0)
                        {
                            topSE = setTop(hexa2, "S-W", topSE);
                        }
                        topSE = setTop(hexa2, "S-E", topSE);
                    }
                }
            }
            
            completeAndPushArray(topN,this.matriceTop,matLines);
            completeAndPushArray(topNE,this.matriceTop,matLines);
            completeAndPushArray(topSE,this.matriceTop,matLines);
            completeAndPushArray(topS,this.matriceTop,matLines);
        }
        this.addTopsPosition(this.matriceTop);
    };
    
    /*
     * 
     * @param array array
     * @param array of array matrice
     * @param int length
     */
    function completeAndPushArray(array,matrice,length)
    {
        if(array.length !== 0 )
        {
            completeArray(array, length);
            matrice.push(array);
        }
    }
    
    /*
     * Complete an array with null value to the length wanted
     * @param array array
     * @param int length
     * @returns array
     */
    function completeArray(array, length)
    {
        
        while (array.length < length + 1)
        {
            array.push(null);
        }
        return array;
    }
    
    /*
     * Update an array on the matrice of top
     * @param Hexagon hexagon
     * @param tilt tilt
     * @param array array
     * @returns array
     */
    function setTop(hexagon, tilt, array)
    {
        var top = hexagon.T_Top[tilt];
        if(hexagon !== null )
        {
            array.push(top);
        }
        return array;
    }

    /**
     * Add the position of all the tops in the matrice
     * 
     * @param {type} matriceTop
     * @returns {undefined}
     */
    this.addTopsPosition = function (matriceTop) {
        var nbLine = matriceTop.length;
        var nbColumn = matriceTop[0].length;
        for (var line = 0; line < nbLine; line++) {
            for (var column = 0; column < nbColumn; column++) {
                var top = matriceTop[line][column];
                if (top !== null) {
                    top.position = [line, column];
                }
            }
        }
    };

    /**
     * Initialise matrice of side in order to linking them to hexagons
     * 
     * @returns {undefined}
     */
    this.initMatriceSide = function () {
        var matLines = mapMatrice.length;
        var matColumns = mapMatrice[0].length;
        var matMiddle = parseInt(mapMatrice.length / 2);
        for (var line = 0; line < matLines; line++) {
            var topN = [];
            var topS = [];
            var topW = [];
            for (var column = 0; column < matColumns; column++) {
                var hexagon = mapMatrice[line][column];
                if (hexagon !== null)
                {
                    if (column === 0)
                    {
                        setSide(hexagon, "W", topW);
                    }
                    setSide(hexagon, "E", topW);

                    if (line <= matMiddle)
                    {
                        setSide(hexagon, "N-W", topN);
                        setSide(hexagon, "N-E", topN);
                    }

                    if (line >= matMiddle)
                    {
                        setSide(hexagon, "S-W", topS);
                        setSide(hexagon, "S-E", topS);
                    }
                }
            }
            
            completeAndPushArray(topN,this.matriceSide,matLines * 2);
            completeAndPushArray(topW,this.matriceSide,matLines * 2);
            completeAndPushArray(topS,this.matriceSide,matLines * 2);
        }
        this.addSidesPosition(this.matriceSide);
    };
    
    /*
     * Update an array on the matrice of side
     * @param Hexagon hexagon
     * @param tilt tilt
     * @param array array
     * @returns array
     */
    function setSide(hexagon, tilt, array)
    {
        var side = hexagon.T_Side[tilt];
        if(hexagon !== null )
        {
            array.push(side);
        }
    }

    /**
     * Add the coordonate of all the side in the matrice
     * 
     * @param {type} matriceSide
     * @returns {undefined}
     */
    this.addSidesPosition = function (matriceSide) {
        var nbLine = matriceSide.length;
        var nbColumn = matriceSide[0].length;
        for (var line = 0; line < nbLine; line++) {
            for (var column = 0; column < nbColumn; column++) {
                var side = matriceSide[line][column];
                if (side !== null) {
                    side.position = [line, column];
                }
            }
        }
    };

    /**
     * Add the number on all the hexagon in the matrice who needs
     * 
     * @param {type} matrice
     * @param {type} model
     * @param {type} number
     * @returns {unresolved}
     */
    function addHexagonNumber(matrice, model, number) {
        var nbLine = matrice.length;
        var nbColumn = matrice[0].length;
        for (var line = 0; line < nbLine; line++) {
            for (var column = 0; column < nbColumn; column++) {
                if (model[line][column] === 1 && matrice[line][column].type !== 'desert') {
                    var rand = getRandomIntInclusive(2, 12);
                    while (number[rand] === 0) {
                        rand = getRandomIntInclusive(2, 12);
                    }
                    matrice[line][column].number = rand;
                    number[rand]--;
                }
            }
        }
        return matrice;
    }
    
    /*
     * associate tops to sides and sides to tops
     */
    function addTopsToSidesAndSidesToTops(modelInfo, matrice)
    {
        var nbLine = modelInfo.line;
        var nbColumn = modelInfo.column;
        var middle = parseInt(modelInfo.line / 2);
        for(var line = 0; line < nbLine; line++)
        {
            for(var column = 0; column < nbColumn; column++)
            {
                if (line <= middle)
                {
                    var T_TopUsefull = ['N-E','N','N-W','S-W'];
                    var T_SideUsefull = ['N-E','N-W','W'];
                    var T_Top = [];
                    var T_Side = [];
                    var hexagon = getHexagon(modelInfo, matrice, line, column);
                    var hexagon2 = getHexagon(modelInfo, matrice, line-1, column-1);
                    var hexagon3 = getHexagon(modelInfo, matrice, line, column-1);
                    for(var i =0; i < T_TopUsefull.length; i++)
                    {
                        T_Top.push(getTop(hexagon,T_TopUsefull[i]));
                    }
                    for(var i =0; i < T_SideUsefull.length; i++)
                    {
                        T_Side.push(getHexagonSide(hexagon,T_SideUsefull[i]));
                    }
                    T_Side.push(getHexagonSide(hexagon2,'E'));
                    T_Side.push(getHexagonSide(hexagon2,'S-W'));
                    if(line === 0){T_Side[4] = getHexagonSide(hexagon3,'N-E');}
                    addTopsToSides(T_Side,T_Top,"North");
                    addSidesToTops(T_Top,T_Side,"North");
                    if(column === nbColumn -1 || matrice[line][column+1] === null)
                    {
                        var T_Side = [null,null];
                        var T_Top = [null,null];
                        T_Side.push(getHexagonSide(hexagon,'E'));
                        T_Side.push(null);
                        T_Side.push(getHexagonSide(hexagon,'N-E'));
                        T_Top.push(getTop(hexagon,'N-E'));
                        T_Top.push(getTop(hexagon,'S-E'));
                        addTopsToSides(T_Side,T_Top,"South");
                        addSidesToTops(T_Top,T_Side,"South");
                    }
                }
                if (line >= middle)
                {
                    var T_TopUsefull = ['S-W','S','S-E','N-E'];
                    var T_SideUsefull = ['S-W','S-E','E'];
                    var T_Top = [];
                    var T_Side = [];
                    var hexagon = getHexagon(modelInfo, matrice, line, column);
                    var hexagon2 = getHexagon(modelInfo, matrice, line+1, column);
                    var hexagon3 = getHexagon(modelInfo, matrice, line, column+1);
                    for(var i =0; i < T_TopUsefull.length; i++)
                    {
                        T_Top.push(getTop(hexagon,T_TopUsefull[i]));
                    }
                    for(var i =0; i < T_SideUsefull.length; i++)
                    {
                        T_Side.push(getHexagonSide(hexagon,T_SideUsefull[i]));
                    }
                    T_Side.push(getHexagonSide(hexagon2,'W'));
                    T_Side.push(getHexagonSide(hexagon2,'N-E'));
                    if(line === nbLine-1){T_Side[4] = getHexagonSide(hexagon3,'S-W');}
                    addTopsToSides(T_Side,T_Top,"South");
                    addSidesToTops(T_Top,T_Side,"South");
                    if(column === 0)
                    {
                        var T_Side = [null,null];
                        var T_Top = [null,null];
                        T_Side.push(getHexagonSide(hexagon,'W'));
                        T_Side.push(null);
                        T_Side.push(getHexagonSide(hexagon,'S-W'));
                        T_Top.push(getTop(hexagon,'S-W'));
                        T_Top.push(getTop(hexagon,'N-W'));
                        addTopsToSides(T_Side,T_Top,"South");
                        addSidesToTops(T_Top,T_Side,"South");
                    }
                }
            }
        }
    }
    
    /*
     * 
     * @param hexagon hexagon
     * @param string tilt
     * @returns top
     */
    function getTop(hexagon, tilt)
    {
        if(hexagon === null)
        {
            return null;
        }
        return hexagon.T_Top[tilt];
    }
    
    /*
     * 
     * @param hexagon hexagon
     * @param string tilt
     * @returns side
     */
    function getHexagonSide(hexagon, tilt)
    {
        if(hexagon === null)
        {
            return null;
        }
        return hexagon.T_Side[tilt];
    }
    
    /*
     * add tops to sides
     */
    function addTopsToSides(T_Side,T_Top,position)
    {
        if(position === 'North')
        {
            addTopToSide(T_Side[0],T_Top[1],T_Top[0]);
            addTopToSide(T_Side[1],T_Top[1],T_Top[2]);
            addTopToSide(T_Side[2],T_Top[2],T_Top[3]);
        }
        if(position === 'South')
        {
            addTopToSide(T_Side[0],T_Top[0],T_Top[1]);
            addTopToSide(T_Side[1],T_Top[2],T_Top[1]);
            addTopToSide(T_Side[2],T_Top[3],T_Top[2]);
        }
    }
    
    /*
     * add sides to tops
     */
    function addSidesToTops(T_Top,T_Side,position)
    {
        if(position === 'North')
        {
            addSideToTop(T_Top[1],T_Side[0],T_Side[1],T_Side[3]);
            addSideToTop(T_Top[2],T_Side[1],T_Side[4],T_Side[2]);
        }
        if(position === 'South')
        {
            addSideToTop(T_Top[1],T_Side[1],T_Side[0],T_Side[3]);
            addSideToTop(T_Top[2],T_Side[4],T_Side[1],T_Side[2]);
        }
    }
    
    /*
     * add sides to one top
     */
    function addSideToTop(top,side1,side2,side3)
    {
        if(top !== null)
        {
            top.side1 = side1;
            top.side2 = side2;
            top.side3 = side3;
        }
    }
    
    /*
     * add tops to one side
     */
    function addTopToSide(side,top1,top2)
    {
        if(side !== null)
        {
            side.top1 = top1;
            side.top2 = top2;
        }
    }
    

}
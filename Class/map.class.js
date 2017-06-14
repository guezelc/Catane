/*
 * A Catane game map
 */
function Map() {
    /*
     * 
     * @type Array|Map.generateMap.array
     */
    var mapArray = [];

    /*
     * The model of a catane map:
     *  - 0: water or harbor
     *  - 1: clay, wood, sheep, ore or corn
     *  - 2: desert 
     */
    var mapModel = [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 2, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0];

    /*
     * The number of each type of hexagone
     * @type type
     */
    var hexagonNumber = {
        water: 9,
        corn: 4,
        wood: 4,
        sheep: 4,
        ore: 3,
        clay: 3,
        port31: 4,
        orePort: 1,
        cornPort: 1,
        woodPort: 1,
        clayPort: 1,
        sheepPort: 1
    };

    /*
     * Init a catane map
     */
    this.init = function () {
        mapArray = generateMap();
    };

    this.getMapArray = function () {
        return mapArray;
    };

    /*
     * Generate a catane map with the mapModel
     */
    function generateMap() {
        var array = [];

        for (var i = 0; i <= mapModel.length; i++) {
            switch (mapModel[i]) {
                case 0:
                    var ok = false;
                    while (!ok) {
                        var rand = getRandomIntInclusive(0, 2);
                        if (rand === 0 && hexagonNumber.water > 0) {
                            array.push(new Hexagon('water'));
                            hexagonNumber.water--;
                            ok = true;
                        }
                        if (rand === 1 && hexagonNumber.port31 > 0) {
                            array.push(new Hexagon('water'));
                            hexagonNumber.port31--;
                            ok = true;
                        }
                        if (rand === 2) {
                            if (hexagonNumber.orePort > 0) {
                                array.push(new Hexagon('water'));
                                hexagonNumber.orePort--;
                                ok = true;
                            } else if (hexagonNumber.cornPort > 0) {
                                array.push(new Hexagon('water'));
                                hexagonNumber.cornPort--;
                                ok = true;
                            } else if (hexagonNumber.clayPort > 0) {
                                array.push(new Hexagon('water'));
                                hexagonNumber.clayPort--;
                                ok = true;
                            } else if (hexagonNumber.sheepPort > 0) {
                                array.push(new Hexagon('water'));
                                hexagonNumber.sheepPort--;
                                ok = true;
                            } else if (hexagonNumber.woodPort > 0) {
                                array.push(new Hexagon('water'));
                                hexagonNumber.woodPort--;
                                ok = true;
                            }
                        }
                    }
                    break;
                case 1:
                    var ok = false;
                    while (!ok) {
                        var rand = getRandomIntInclusive(0, 4);
                        if (rand === 0 && hexagonNumber.corn > 0) {
                            array.push(new Hexagon('corn'));
                            hexagonNumber.corn--;
                            ok = true;
                        }
                        else if (rand === 1 && hexagonNumber.wood > 0) {
                            array.push(new Hexagon('wood'));
                            hexagonNumber.wood--;
                            ok = true;
                        }
                        else if (rand === 2 && hexagonNumber.ore > 0) {
                            array.push(new Hexagon('ore'));
                            hexagonNumber.ore--;
                            ok = true;
                        }
                        else if (rand === 3 && hexagonNumber.clay > 0) {
                            array.push(new Hexagon('clay'));
                            hexagonNumber.clay--;
                            ok = true;
                        }
                        else if (rand === 4 && hexagonNumber.sheep > 0) {
                            array.push(new Hexagon('sheep'));
                            hexagonNumber.sheep--;
                            ok = true;
                        }
                    }
                    break;
                case 2:
                    array.push(new Hexagon('white'));
                    break;
            }
        }
        return array;
    }

    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}



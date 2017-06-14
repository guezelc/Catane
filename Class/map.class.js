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
     *  - 0: water or port
     *  - 1: clay, wood, sheep, ore or corn
     *  - 2: desert 
     */
    var mapModel = [0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 2, 1, 1, 0, 0, 1, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0];

    /*
     * The number of each type of hexagone
     * @type type
     */
    var hexagonesNumber = {
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
                        if (rand === 0 && hexagonesNumber.water > 0) {
                            array.push(new Hexagone('water'));
                            hexagonesNumber.water--;
                            ok = true;
                        }
                        if (rand === 1 && hexagonesNumber.port31 > 0) {
                            array.push(new Hexagone('port31'));
                            hexagonesNumber.port31--;
                            ok = true;
                        }
                        if (rand === 2) {
                            if (hexagonesNumber.orePort > 0) {
                                array.push(new Hexagone('orePort'));
                                hexagonesNumber.orePort--;
                                ok = true;
                            } else if (hexagonesNumber.cornPort > 0) {
                                array.push(new Hexagone('cornPort'));
                                hexagonesNumber.cornPort--;
                                ok = true;
                            } else if (hexagonesNumber.clayPort > 0) {
                                array.push(new Hexagone('clayPort'));
                                hexagonesNumber.clayPort--;
                                ok = true;
                            } else if (hexagonesNumber.sheepPort > 0) {
                                array.push(new Hexagone('sheepPort'));
                                hexagonesNumber.sheepPort--;
                                ok = true;
                            } else if (hexagonesNumber.woodPort > 0) {
                                array.push(new Hexagone('woodPort'));
                                hexagonesNumber.woodPort--;
                                ok = true;
                            }
                        }
                    }
                    break;
                case 1:
                    var ok = false;
                    while (!ok) {
                        var rand = getRandomIntInclusive(0, 4);
                        if (rand === 0 && hexagonesNumber.corn > 0) {
                            array.push(new Hexagone('corn'));
                            hexagonesNumber.corn--;
                            ok = true;
                        }
                        if (rand === 1 && hexagonesNumber.wood > 0) {
                            array.push(new Hexagone('wood'));
                            hexagonesNumber.wood--;
                            ok = true;
                        }
                        if (rand === 2 && hexagonesNumber.ore > 0) {
                            array.push(new Hexagone('ore'));
                            hexagonesNumber.ore--;
                            ok = true;
                        }
                        if (rand === 3 && hexagonesNumber.clay > 0) {
                            array.push(new Hexagone('clay'));
                            hexagonesNumber.clay--;
                            ok = true;
                        }
                        if (rand === 4 && hexagonesNumber.sheep > 0) {
                            array.push(new Hexagone('sheep'));
                            hexagonesNumber.sheep--;
                            ok = true;
                        }
                    }
                    break;
                case 2:
                    array.push(new Hexagone('blanc'));
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



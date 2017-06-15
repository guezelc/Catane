/*
 * A Catane game map uses matrice structure
 */
function MapMatrice(){
    /*
     * The matrice where the gerated catane map was stocked
     */
    var mapMatrice = [];
    
    /*
     * The model used to generate the catane map
     * - 0: water
     * - 1: clay, wood, sheep, ore, corn or desert
     * - 2: harbor 
     */
    var mapMatriceModel = [
        [2,0,2,0,null,null,null],
        [0,1,1,1, 2  ,null,null],
        [2,1,1,1, 1  , 0  ,null],
        [0,1,1,1, 1  , 1  , 2  ],
        [2,1,1,1, 1  , 0  ,null],
        [0,1,1,1, 2  ,null,null],
        [2,0,2,0,null,null,null]
    ];
    
    /*
     * Information on mapMatriceModel useful to generate catane map
     */
    var mapMatriceInfo = {
        'width': 7,
        'height': 7
    };
    
    /*
     * The number of each hexagone type who can be on the catane map
     */
    var hexagonNumber = {
        water: 9,
        corn: 4,
        wood: 4,
        sheep: 4,
        ore: 3,
        clay: 3,
        harbor31: 4,
        oreHarbor: 1,
        cornHarbor: 1,
        woodHarbor: 1,
        clayHarbor: 1,
        sheepHarbor: 1
    };
    
    /*
     * Init mapMaptrice object:
     *  - create a catane map
     */
    this.init = function() {
        mapMatrice = generateCataneMap();
    };
    
    function generateCataneMap() {
        
    }
}



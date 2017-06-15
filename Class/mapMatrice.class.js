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
}



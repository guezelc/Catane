/*
 * Author:
 * - Clement Guezel
 * - Virgil Lacondemine
 * 
 * @param {type} color
 * @returns {Game}
 */
function Game(type, nbPlayer)
{
    /*
     * The instance of the developpementCards of the game
     * @type DeveloppementCards
     */
    var developpementCards;
    
    /*
     * An array with all the player of the game
     * @type array
     */
    var T_player;
    
    /*
     * The type of game : extension, basic ...
     * @type string
     */
    var type;
    
    /*
     * The number of player of this game
     * @type int
     */
    var nbPlayer;
    
    /*
     * The number of player of this game
     * @type int
     */
    var playerColorAvailable = ['blue','red','white','orange'];
    
    /*
     * The map matrice
     * @type MapMatrice
     */
    var mapMatrice;
    
    /*
     * The matrice of top
     * @type array[array]
     */
    var topMatrice;
    
    /*
     * The matrice of side
     * @type array[array]
     */
    var sideMatrice;
    
    this.mapMatrice = null;
    this.sideMatrice = null;
    this.topMatrice = null;
    this.nbPlayer = nbPlayer;
    this.type = type;
    this.developpementCards = null;
    T_player = [];
    
    if(this.mapMatrice === null)
    {
        this.mapMatrice = new MapMatrice();
        this.mapMatrice.init(this.type);
        this.mapMatrice.initMatriceSide();
        this.mapMatrice.initMatriceTop();
        this.sideMatrice = this.mapMatrice.matriceSide;
        this.topMatrice = this.mapMatrice.matriceTop;
        this.developpementCards = new DeveloppementCards();
        for(var player = 0 ; player < nbPlayer;player++)
        {
            T_player.push(new Player(playerColorAvailable[player],this));
        }
    }
    
    this.getPlayer = function(int)
    {
        if(int >= nbPlayer)
        {
            return null;
        }
        return T_player[int];
    }
}
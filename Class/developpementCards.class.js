/*
 * Author:
 * - Clement Guezel
 * - Virgil Lacondemine
 * 
 * @returns {DeveloppementCards}
 */
function DeveloppementCards()
{
    /*
     * The number of developpement card
     * @type Number
     */
    var numberCardBase = 25;
    /*
     * The number of each developpement cards available at the begining of a game
     * @type int
     */
    var numberCardByTypeBase = {
        'VictoryPoint': 5, // 1 Victory point
        'Monopoly': 2, // Choose 1 resource an all player should give all of them to hte player
        'Road construction': 2, // 2 free roads
        'Discovery': 2, // 2 free resources
        'Knight' : 14 // 1 Knight
    };
    
    var developpementCardsAvailable;
    this.developpementCardsAvailable = 25;
    var T_Card;
    T_Card = null;
    
    /*
     * Initialize the table of cards randomly
     */
    if(T_Card === null)
    {
        T_Card = []
        for(var currentCard = 0; currentCard < numberCardBase;currentCard++)
        {
            while(true)
            {
                var cardType = ['VictoryPoint','Monopoly','Road construction','Discovery','Knight'];
                var rand = getRandomIntInclusive(0, 4);
                if(numberCardByTypeBase[cardType[rand]] > 0)
                {
                    T_Card.push({'type' : cardType[rand], 'player' : null, 'play' : false});
                    numberCardByTypeBase[cardType[rand]]--;
                    break;
                }
            }
        }
    }
    
    this.takeACard = function(player)
    {
        var currentCard = 0
        while(currentCard < numberCardBase && T_Card[currentCard]['player'] !== null)
        {
            currentCard ++;
        }
        T_Card[currentCard]['player']=player;
        this.developpementCardsAvailable--;
        return T_Card[currentCard];
    }

    /*
     * Randomly return a int between min and max inlcluded
     */
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}
/*
 * Author:
 * - Clement Guezel
 * - Virgil Lacondemine
 */
function Player(color ,game) {

    /**
     * Player's color
     */
    var color;

    /**
     * Player's colony table
     * @type Array
     */
    var T_colony;

    /**
     * Player's city table
     * @type Array
     */
    var T_city;

    /**
     * Player's road table
     * @type Array
     */
    var T_road;
    
    /*
     * The instance of the current game
     * @type Game
     */
    var game;
    
    /**
     * Player's available colony number
     * @type Number
     */
    var nbColonyAvailable;

    /**
     * Player's available city number
     * @type Number
     */
    var nbCityAvailable;

    /**
     * Player's available road number
     * @type Number
     */
    var nbRoadAvailable;

    /**
     * The player turn statut
     * @type boolean
     */
    var isPlaying;

    /**
     * Player's resource card table
     * @type type
     */
    var T_resource_card;

    /**
     * Player's development card table
     * @type Array
     */
    var T_developpement_card;

    //Object var init
    this.color = color;
    this.T_road = [];
    this.T_colony = [];
    this.T_city = [];
    this.T_resource_card = {
        corn: 24,
        ore: 24,
        sheep: 22,
        wood: 24,
        clay: 24
    };
    this.T_developpement_card = [];
    this.nbColonyAvailable = 5;
    this.nbCityAvailable = 4;
    this.nbRoadAvailable = 13;
    this.game = game;
    this.isPlaying= false;

    /**
     * Give resources to the player in function of diceRoll
     * 
     * @param {type} diceRoll
     */
    this.giveResourcesCards = function (diceRoll) {

        for (var i = 0; i < this.T_colony.length; i++) {
            if (this.T_colony[i] !== null && this.T_colony[i].top.haveHexagonWithNumber(diceRoll)) {
                var hexagones = this.T_colony[i].top.getHexagonsByNumber(diceRoll);
                for (var j = 0; j < hexagones.length; j++)
                    this.T_resource_card[hexagones[j]]++;
            }
        }

        for (var i = 0; i < this.T_city.length; i++) {
            if (this.T_city[i] !== null && this.T_city[i].top.haveHexagonWithNumber(diceRoll)) {
                var hexagones = this.T_city[i].top.getHexagonsByNumber(diceRoll);
                for (var j = 0; j < hexagones.length; j++)
                    this.T_resource_card[hexagones[j]] = this.T_resource_card[hexagones[j]] + 2;
            }
        }
    };

    /**
     * Add road buy by the player in T_Road
     * 
     * @param {type} side
     * @returns {undefined}
     */
    this.build_Road = function (side) {

        var road = new Road(this.color, side);
        road.side.occupy = road;
        this.T_road.push(road);
        this.nbRoadAvailable--;
        this.T_resource_card.wood--;
        this.T_resource_card.clay--;

    };

    /*
     * 
     */
    this.build_City = function (colony) {
        
        var city = new City(this.color, colony.top);
        city.top.occupy = city;
        this.T_city.push(city);
        this.nbColonyAvailable++;
        this.nbCityAvailable--;
        this.T_resource_card.ore-=3;
        this.T_resource_card.corn-=2;
        for(var i = 0; i < this.T_colony.length;i++)
        {
            if(this.T_colony[i] === colony)
            {
                var lastElement = this.T_colony[this.T_colony.length-1];
                this.T_colony[i]= lastElement;
                this.T_colony.pop();
            }
        }
    };

    /*
     * 
     */
    this.build_Colony = function (top) {

        var colony = new Colony(this.color, top);
        colony.top.occupy = colony;
        this.T_colony.push(colony);
        this.nbColonyAvailable--;
        this.T_resource_card.wood--;
        this.T_resource_card.clay--;
        this.T_resource_card.corn--;
        this.T_resource_card.sheep--;
    };

    /**
     * Player can buy road if they have resources and place to put it on.
     * 
     * @returns {Array|Player.getRoadBuildableSides.filtredBuildableSides}
     */
    this.buy_Road = function () {

        if (this.T_resource_card.clay >= 1 && this.T_resource_card.wood >= 1
                && this.nbRoadAvailable > 0)
            var roadBuildableSides = this.getRoadBuildableSides(this.T_colony, this.T_city, this.T_road);

        return roadBuildableSides;
        //this.build_Road();
    };

    /*
     * 
     */
    this.buy_City = function () {
        if (this.T_resource_card.ore > 2 && this.T_resource_card.corn > 1 
                && this.nbCityAvailable > 0 && this.T_colony.length >0){
            return this.T_colony;
        }
    };

    /*
     * 
     */
    this.buy_Colony = function () {
        if (this.T_resource_card.wood > 0 && this.T_resource_card.clay > 0
                && this.T_resource_card.sheep > 0 && this.T_resource_card.corn
                && this.nbColonyAvailable > 0)
            var colonyBuildableTops = this.getColonyBuildableTops(this.T_road);

        return colonyBuildableTops;

        //this.build_Colony();
    };

    /*
     * buy a developpement card
     */
    this.buy_DeveloppementCard = function () {        
        if (this.T_resource_card.ore >= 1 && this.T_resource_card.corn >= 1 && this.T_resource_card.sheep >= 1 && this.game.developpementCards.developpementCardsAvailable > 0) {
            this.TakeADeveloppementCard();
        }
    };
    
    /*
     * Take a developpement card
     */
    this.TakeADeveloppementCard = function() {
        this.T_resource_card.ore--;
        this.T_resource_card.corn--;
        this.T_resource_card.sheep--;
        this.T_developpement_card.push(this.game.developpementCards.takeACard(this));
    };

    /**
     * Get all player's buildable sides
     * 
     * @param {type} colonys
     * @param {type} citys
     * @param {type} roads
     * 
     * @returns {Array}
     */
    this.getRoadBuildableSides = function (colonys, citys, roads) {

        var buildableSides = [];
        var filtredBuildableSides = [];

        for (var i = 0; i < colonys.length; i++)
            buildableSides = buildableSides.concat(colonys[i].top.getBuildableSides('road'));

        for (var i = 0; i < citys.length; i++)
            buildableSides = buildableSides.concat(citys[i].top.getBuildableSides('road'));

        for (var i = 0; i < roads.length; i++)
            buildableSides = buildableSides.concat(roads[i].side.getBuildableSides(this.color,'road'));


        for (var i = 0; i < buildableSides.length; i++) {
            if (buildableSides[i] !== null) {
                filtredBuildableSides.push(buildableSides[i]);
                for (var j = i + 1; j < buildableSides.length; j++) {
                    if (buildableSides[i] === buildableSides[j])
                        buildableSides[j] = null;
                }
            }
        }

        return filtredBuildableSides;
    };

    /**
     * Get all player's buildable tops
     * 
     * @param {type} roads
     * 
     * @returns {Array}
     */
    this.getColonyBuildableTops = function (roads) {
        
        var buildableTops = [];
        var filtredBuildableTops = [];
        
        for(var i = 0; i < roads.length; i++){
            buildableTops.push(roads[i].side.top1.isBuildable());
            buildableTops.push(roads[i].side.top2.isBuildable());
        }
        
        for (var i = 0; i < buildableTops.length; i++) {
            if (buildableTops[i] !== null && buildableTops[i] !== false) {
                filtredBuildableTops.push(buildableTops[i]);
                for (var j = i + 1; j < buildableTops.length; j++) {
                    if (buildableTops[i] === buildableTops[j])
                        buildableTops[j] = null;
                }
            }
        }
        
        return filtredBuildableTops;
    };
    
    /*
     * Propose an exchange to the other players
     * 
     * @param {Int} cornNumber
     * @param {Int} oreNumber
     * @param {Int} sheepNumber
     * @param {Int} woodNumber
     * @param {Int} clayNumber
     * @returns {Array} T_exchangeAnswer
     */
    this.exchange = function (cornNumber, oreNumber, sheepNumber, woodNumber, clayNumber)
    {
        var nbGive = 0;
        var nbReceive = 0;
        var T_Exhchange = {
            corn: cornNumber,
            ore: oreNumber,
            sheep: sheepNumber,
            wood: woodNumber,
            clay: clayNumber
        };
        for (var resource in T_Exhchange)
        {
            if(T_Exhchange[resource] > 0)
            {
                nbGive++;
                if(this.T_resource_card[resource] < T_Exhchange[resource])
                {
                    console.log('Exchange impossible, you haven\'t enough '+ resource); 
                    return [];
                }
            }
            if(T_Exhchange[resource] < 0)
            {
                nbReceive++;
            }
        }
        var T_exchangeAnswer = [];        
        if(nbReceive !== 0 && nbGive !==0)
        {
            T_exchangeAnswer = this.game.askExchange(T_Exhchange,this);
        }
        return T_exchangeAnswer;
    };
    
    /*
     * Allow a player who isn't playing to answer an exchange propose by the player who's playing
     * 
     * @param {Array} T_Exhchange, array of all resource of the exchange
     * @param {Player} playerAsking, the player who propose the exchange
     * @returns {Array}
     */
    this.answerExchange = function(T_Exhchange, playerAsking)
    {
        for (var resource in T_Exhchange)
        {
            if(T_Exhchange[resource] < 0)
            {
                if(this.T_resource_card[resource] < -T_Exhchange[resource])
                {
                    return [false,this,T_Exhchange, playerAsking];
                }
            }
        }
        return this.acceptOtherPlayerExchange(T_Exhchange, playerAsking);
    };
    
    /*
     * Allow a player who isn't playing to accept an exchange propose by the player who's playing
     * 
     * @param {Array} T_Exhchange, array of all resource of the exchange
     * @param {Player} playerAsking, the player who propose the exchange
     * @param {Boolean} answer
     * @returns {Array}
     */
    this.acceptOtherPlayerExchange = function (T_Exhchange, playerAsking, answer = true)
    {
        return [answer,this,T_Exhchange, playerAsking];
    };
    
    /*
     * Do an exchagne if the player answer is true
     * 
     * @param {Array} T_Exhchange, array of all resource of the exchange
     * @param {Player} player
     */
    this.doExchange = function (T_Exhchange, player)
    {
        if(this.isPlaying === true)
        {
            for (var resource in T_Exhchange)
            {
                this.T_resource_card[resource] += T_Exhchange[resource];
            }
            if(player !== null)
            {
                player.doExchange(T_Exhchange, this);
            }
        }
        if(this.isPlaying === false)
        {
            for (var resource in T_Exhchange)
            {
                this.T_resource_card[resource] -= T_Exhchange[resource];
            }
        }
    };
    
    /*
     * Ask player if he want to finally accept is own exchagne with one player who had accept
     * 
     * @param {array}   T_playerChoose, the player choose
     * @param {boolean} answer
     */
    this.acceptIsOwnExchange = function(T_playerChoose,answer)
    {
        if(answer)
        {
            var playerAnswer = T_playerChoose[0];
            if(playerAnswer)
            {   
                var T_Exhchange = T_playerChoose[2];
                var player = T_playerChoose[1];
                this.doExchange(T_Exhchange, player);
            }
        }
    };
    
    /*
     * Pass the turn of the player
     */
    this.passTurn = function()
    {
        if(this.isPlaying)
        {
            console.log('Le joueur '+this.color+' passe son tour.');
            this.isPlaying = false;
            this.game.nextPlayer(this);
        }
    };
    
    this.useDeveloppementCard = function(cardNumber)
    {
        if(cardNumber < this.T_developpement_card.length)
        {
            if(!this.T_developpement_card[cardNumber].play)
            {
                switch(this.T_developpement_card[cardNumber].type)
                {
                    case 'VictoryPoint' :
                        this.useVictoryPoint();
                        break;
                    case 'Knight' :
                        this.useKnight();
                        break;
                    case 'Monopoly' :
                        this.useMonopoly();
                        break;
                    case 'Road construction' :
                        this.useRoadConstruction();
                        break;
                    case 'Discovery' :
                        this.useDiscovery();
                        break;
                }
                this.T_developpement_card[cardNumber].play = true;
            }
        }
    };
    
    /*
     * Use a developpement card knight
     */
    this.useKnight = function()
    {
        console.log('knight');
        //this.game.moveThief(this.color);
    };
    
    /*
     * Use a developpement card monopoly
     */
    this.useMonopoly = function()
    {
        var resource = this.chooseResourceType(['corn','ore','sheep','wood','clay']);
        this.game.Monopoly(this,resource);
        console.log('monopoly');
    };
    
    /*
     * Use a developpement card discovery
     */
    this.useDiscovery = function()
    {
        var resource1 = this.chooseResourceType(['corn','ore','sheep','wood','clay']);
        var resource2 = this.chooseResourceType(['corn','ore','sheep','wood','clay']);
        this.T_resource_card[resource1]++;
        this.T_resource_card[resource2]++;
        console.log('discovery');
    };
    
    /*
     * Use a developpement card road construction
     */
    this.useRoadConstruction = function()
    {
        console.log('roadConstruction');
        //TODO
    };
    
    /*
     * Use a developpement card victory point
     */
    this.useVictoryPoint = function()
    {        
        console.log('victory point');
    };
    
    /*
     * choose a resource type
     */
    this.chooseResourceType = function(T_resource)
    {
        /*
        * Randomly return a int between min and max inlcluded
        */
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        return T_resource[getRandomInt(0,T_resource.length-1)];
    };
}
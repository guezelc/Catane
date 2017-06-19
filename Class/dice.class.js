function Dice()
{
    var result;
    var historical;
    
    this.historical = {
        2 : 0,3 : 0, 4 : 0,5 : 0, 6 : 0,7 : 0, 8 : 0,9 : 0, 10 : 0,11 : 0, 12 : 0
    };
    this.result = null;
    
    this.roll = function ()
    {
        var number = 0;
        var dice1;
        var dice2;
        function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min)) + min;
        }
        
        dice1 = getRandomInt(1,7);
        dice2 = getRandomInt(1,7);
        number = dice1+dice2;
        this.historical[number]++;
        this.result = number;
    }
}

function Player(color) {
    var color;
    var T_colony;
    var T_city;
    var T_road;
    var T_resource_card;
    var T_developpement_card;

    this.color = color;
    this.T_road = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    this.T_colony = [0, 0, 0, 0, 0];
    this.T_city = [0, 0, 0, 0];
    this.T_resource_card = [];
    this.T_developpement_card = [];

    this.put_Road = function ()
    {

    }

    this.put_City = function ()
    {

    }

    this.put_Colony = function ()
    {

    }

    this.acheter_Road = function ()
    {
        this.put_Road();
    }

    this.acheter_City = function ()
    {
        this.put_City();
    }

    this.acheter_Colony = function ()
    {
        this.put_Colony();
    }

    this.acheter_Developpement_Card = function ()
    {
        this.piocher_Developpement_Card();
    }
}
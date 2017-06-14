function City(color,top){
    var color;
    var top;
    
    this.color=color;
    this.top=top;
    
    this.display = function()
    {
        return '<img width="30px" height="35px" src="Picture/Pawn/'+ this.color + '/City.png">';
    }
}
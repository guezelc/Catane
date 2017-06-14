function City(color,position){
    var color;
    var position;
    
    this.color=color;
    this.position=position;
    
    this.display = function()
    {
        return '<img width="30px" height="35px" src="Picture/Pawn/'+ this.color + '/City">';
    }
}
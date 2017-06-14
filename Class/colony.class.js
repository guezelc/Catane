function Colony(color,top){
    var color;
    var top;
    
    this.color=color;
    this.top=top;
    
    this.display = function()
    {
        return '<img width="20px" height="25px" src="Picture/Pawn/'+ this.color + '/Colony.png">';
    }
}
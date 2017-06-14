function Colony(color,position){
    var color;
    var position;
    
    this.color=color;
    this.position=position;
    
    this.display = function()
    {
        return '<img width="20px" height="25px" src="Picture/Pawn/'+ this.color + '/Colony.png">';
    }
}
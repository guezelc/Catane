function Hexagone(type){
    var type;
    
    this.type=type;
    
    this.afficher = function()
    {
        return '<img width="100" height="100" src="Images/Tuiles/'+ this.type + '">';
    }
}
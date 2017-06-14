function Road(color,tilt,position){
    var color;
    var tilt; // droite, verticale, gauche 
    var position;
    
    this.color=color;
    this.tilt=tilt;
    this.position=position;
    
    this.display = function()
    {
        return '<img src="Picture/Pawn/'+ this.color + '/Road/' + this.tilt + '">';
    }
}
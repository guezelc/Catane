function Colonie(couleur,position){
    var couleur;
    var position;
    
    this.couleur=couleur;
    this.position=position;
    
    this.afficher = function()
    {
        return '<img width="20px" height="25px" src="Images/Pions/'+ this.couleur + '/Colonie">';
    }
}
function Ville(couleur,position){
    var couleur;
    var position;
    
    this.couleur=couleur;
    this.position=position;
    
    this.afficher = function()
    {
        return '<img width="30px" height="35px" src="Images/Pions/'+ this.couleur + '/Ville">';
    }
}
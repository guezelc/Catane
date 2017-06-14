function Ville(couleur){
    var couleur;
    
    this.couleur=couleur;
    
    this.afficher = function()
    {
        return '<img width="30px" height="35px" src="Images/Pions/'+ this.couleur + '/Ville">';
    }    
}
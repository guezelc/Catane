function Colonie(couleur){
    var couleur;
    
    this.couleur=couleur;
    
    this.afficher = function()
    {
        return '<img width="20px" height="25px" src="Images/Pions/'+ this.couleur + '/Colonie">';
    }    
}
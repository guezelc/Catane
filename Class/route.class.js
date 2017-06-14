function Route(couleur){
    var couleur;
    
    this.couleur=couleur;
    
    this.afficher = function()
    {
        return '<img src="Images/Pions/Route/'+ this.couleur + '">';
    }    
}
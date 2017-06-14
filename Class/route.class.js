function Route(couleur,inclinaison){
    var couleur;
    var inclinaison;
    
    this.couleur=couleur;
    this.inclinaison=inclinaison;
    
    this.afficher = function()
    {
        return '<img src="Images/Pions/'+ this.couleur + '/Route/' + this.inclinaison + '">';
    }    
}
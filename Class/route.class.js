function Route(couleur,inclinaison,position){
    var couleur;
    var inclinaison; // droite, verticale, gauche 
    var position;
    
    this.couleur=couleur;
    this.inclinaison=inclinaison;
    this.position=position;
    
    this.afficher = function()
    {
        return '<img src="Images/Pions/'+ this.couleur + '/Route/' + this.inclinaison + '">';
    }
}
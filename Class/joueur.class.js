function joueur(couleur){
    var couleur;
    var T_colonie;
    var T_ville;
    var T_route;
    var T_carte_ressource;
    var T_carte_developpement;
    
    this.couleur=couleur;
    this.T_route=[0,0,0,0,0,0,0,0,0,0,0,0,0];
    this.T_colonie=[0,0,0,0,0];
    this.T_ville=[0,0,0,0];
    this.T_carte_ressource=[];
    this.T_carte_developpement=[];
    
    this.poser_Route = function()
    {
        
    }
    
    this.poser_Ville = function()
    {
        
    }
    
    this.poser_Colonie = function()
    {
        
    }
    
    this.acheter_Route = function()
    {
        this.poser_Route();
    }
    
    this.acheter_Ville = function()
    {
        this.poser_Ville();
    }
    
    this.acheter_Colonie = function()
    {
        this.poser_Colonie();
    }
    
    this.acheter_Carte_Developpement = function()
    {
        this.piocher_Carte_Developpement();
    }
}
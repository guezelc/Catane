function Hexagone(type){
    var type;
    var T_Sommet;
    var T_Cote;
       
    this.T_Sommet= {"Nord" : 0,"Nord-Est" : 0, "Sud-Est" : 0, "Sud" : 0, "Sud-Ouest" : 0, "Nord-Ouest" : 0};
    this.T_Cote= {"Nord-Est" : 0,"Est" : 0, "Sud-Est" : 0, "Sud-Ouest" : 0, "Ouest" : 0, "Nord-Ouest" : 0};
    this.type=type;
    
    this.afficher = function()
    {
        return '<img width="100px" height="100px" src="Images/Tuiles/'+ this.type + '">';
    }
}

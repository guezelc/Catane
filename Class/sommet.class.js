function sommet(hexagone1, hexagone2, hexagone3)
{
    var hexagone1;
    var hexagone2;
    var hexagone3;
    var occupe;
    
    this.hexagone1=hexagone1;
    this.hexagone2=hexagone2;
    this.hexagone3=hexagone3;
    this.occupe=0;
    
    this.estPort = function(){
       if(this.hexagone1!=0)
       {
           return this.hexagone1.type;
       }
       else{
           if(this.hexagone2!=0)
           {
               return this.hexagone2.type;
           }
           else{
               if(this.hexagone3!=0)
               {
                   return this.hexagone3.type;
               }
               else{
                   return 0;
               }
           }
       }
    }
}
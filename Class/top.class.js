function Top(hexagon1, hexagon2, hexagon3)
{
    var hexagon1;
    var hexagon2;
    var hexagon3;
    var occupy;
    
    this.hexagon1=hexagon1;
    this.hexagon2=hexagon2;
    this.hexagon3=hexagon3;
    this.occupy=0;
    
    this.isHarbor = function(){
       if(this.hexagon1!=0)
       {
           return this.hexagon1.type;
       }
       else{
           if(this.hexagon2!=0)
           {
               return this.hexagon2.type;
           }
           else{
               if(this.hexagon3!=0)
               {
                   return this.hexagon3.type;
               }
               else{
                   return 0;
               }
           }
       }
    }
}
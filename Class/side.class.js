/*
 * Author:
 * - Clement Guezel
 * - Virgil Lacondemine
 */
function Side(hexagon1, hexagon2, tilt)
{
    /*
     * 
     */
    var hexagon1;
    
    /*
     * 
     */
    var hexagon2;
    
    /*
     * 
     */
    var tilt;
    
    /*
     * 
     */
    var occupy;
    
    /*
     * 
     */
    var position;

    this.hexagon1 = hexagon1;
    this.hexagon2 = hexagon2;
    this.tilt = tilt;
    this.occupy = null;
    this.position = [];
    
    this.show= function()
    {
        if(this.occupy !== null)
        {
            var body = $('body');
            var picture = $(this.occupy.display());
            var div = $('<div></div>');
            picture.appendTo(div);
            div.appendTo(body);
        }
    };
}
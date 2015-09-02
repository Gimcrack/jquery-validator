/**
 *  First look through the element's siblings, then go up a level and repeat
 */
(function( $ ){
   $.fn.psiblings = function(search) {
        // Get the current element's siblings
        var siblings = this.siblings(search);

        if (siblings.length != 0) { // Did we get a hit?
            return siblings.eq(0);
        }

        // Traverse up another level
        var parent = this.parent();
        if (parent === undefined || parent.get(0).tagName.toLowerCase() == 'body') {
            // We reached the body tag or failed to get a parent with no result.
            // Return the empty siblings tag so as to return an empty jQuery object.
            return siblings;
        }
        // Try again
        return parent.psiblings(search);
   }; 
})( jQuery );
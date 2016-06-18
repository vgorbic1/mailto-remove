/**
 * jQuey code to remove "mailto:" from the link
 * Useful for @print media css
 * Contains some other features
 * @author Vlad Gorbich
 */
(function() {
  
  var beforePrint = function() {
    $('a[href^="mailto"]').each(function() {
        
      // get the url
      var url = $(this).attr('href').replace('mailto:', '').toLowerCase();
                                               
      //remove query string if present
      if (url.indexOf('?') > -1 ) {
        url = url.substr(0, url.indexOf('?'));
      }
                                               
      // move domain name to the next line if url longer than 35 characters
      if (url.length > 35) {
        var index = url.indexOf('@');
        var user = url.substr(0, index);
        var domain = url.substr(index);                                                                                
        $(this).html(user + '<br />' + domain);
      } else {
        $(this).text(url);
      }
    });
  };
 
  if (window.matchMedia) {
    var mediaQueryList = window.matchMedia('print');
    mediaQueryList.addListener(function(mql) {
      if (mql.matches) {
          beforePrint();
      }
    });
  }
 
  window.onbeforeprint = beforePrint;
               
}());

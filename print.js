/**
 * A shell for @media print css
 */
(function() {
    var beforePrint = function() {
        // do your stuff before printing
    };
    var afterPrint = function() {
        // do your stuff after printing
    };

    if (window.matchMedia) {
        var mediaQueryList = window.matchMedia('print');
        mediaQueryList.addListener(function(mql) {
            if (mql.matches) {
                beforePrint();
            } else {
                afterPrint();
            }
        });
    }

    window.onbeforeprint = beforePrint;
    window.onafterprint = afterPrint;
}());

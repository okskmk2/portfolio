var includeList = document.querySelectorAll("[data-include]");
var ajax = [];
for (i = 0; i < includeList.length; i++) {
    (function (i) {
        var el = includeList.item(i);
        var url = el.dataset.include;
        ajax[i] = new XMLHttpRequest();
        ajax[i].onreadystatechange = function () {
            if (ajax[i].readyState == "4" && ajax[i].status == "200") {
                el.outerHTML = ajax[i].responseText;
            }
        };
        ajax[i].open("GET", url, true);
        ajax[i].send();
    })(i);
}

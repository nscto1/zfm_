var firstUrl = "https://www.zafamart.com/app/",
	urlService = firstUrl + "services/apps.php",
	urlContent = firstUrl + "contents/";

$.getScript(urlContent+"main-v2.js");
function run_first(){
    var height = $(window).outerHeight(), height2 = height - 0;
    $("#main-loading").height(height).removeClass("hide");
}
run_first();
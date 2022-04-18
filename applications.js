var win = window.open("https://patft.uspto.gov/netahtml/PTO/search-bool.html");
var lower = 1000000;
var upper = 99999999;
win.document.getElementById("trm1").value = (Math.floor(Math.random()*(upper-lower))+lower);
win.document.getElementById("fld1").value = "PN";
win.document.getElementById("yrs").value = "PALL";
win.document.forms['search_pat'].submit();

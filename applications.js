var win = window.open("https://patft.uspto.gov/netahtml/PTO/search-bool.html");
win.focus();
var lower = 1000000;
var upper = 99999999;
document.getElementById("trm1").value = (Math.floor(Math.random()*(upper-lower))+lower);
document.getElementById("fld1").value = "PN";
document.getElementById("yrs").value = "PALL";
document.forms['search_pat'].submit();

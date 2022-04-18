var win = window.open("https://patft.uspto.gov/netahtml/PTO/search-bool.html");
win.document.getElementById("trm1").value = (Math.floor(Math.random()*("99999999"-"1000000"))+"1000000");
win.document.getElementById("fld1").value = "PN";
win.document.getElementById("yrs").value = "PALL";
win.document.getElementByName("search_pat").submit();

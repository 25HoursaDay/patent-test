var url = "https://patentcenter.uspto.gov/#!/applications/"+(Math.floor(Math.random()*("99999999"-"10000000"))+"10000000");
var win;
win = window.open("https://www.uspto.gov/");
win.document.body.style.margin = "0";
win.document.body.style.height = "100vh";
var iframe = win.document.createElement("iframe");
iframe.style.border = "none";
iframe.style.width = "100%";
iframe.style.height = "100%";
iframe.style.margin = "0";
iframe.src = url;
win.document.body.appendChild(iframe);

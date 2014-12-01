var s = document.createElement('SCRIPT');
s.charset = 'UTF-8';
s.src = 'http://localhost:8080/mockupddEngineDebug.js';
document.getElementsByTagName('HEAD')[0].appendChild(s);

var l = document.createElement('LINK');
l.charset = 'UTF-8';
l.href = 'http://localhost:8080/css/mockupdd-tagging.css';
l.type =  "text/css";
l.rel = "stylesheet";
document.getElementsByTagName('HEAD')[0].appendChild(l);
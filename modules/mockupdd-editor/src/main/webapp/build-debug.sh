#cat `cat filelist.txt` > mockupddEngineDebug.js
awk 'FNR==1{print ";"}1' `cat filelist.txt` > mockupddEngineDebug.js

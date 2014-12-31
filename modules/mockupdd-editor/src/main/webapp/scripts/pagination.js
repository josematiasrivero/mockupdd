function createPagination(div, pages, actual){
	for(var i=1;i <= pages; i++){
		div.append("<li><a href='?page="+i+"'>"+i+"</a></li>");
	}
}
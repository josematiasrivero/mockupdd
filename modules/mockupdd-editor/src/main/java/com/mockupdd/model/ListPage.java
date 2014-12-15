package com.mockupdd.model;

import java.util.ArrayList;
import java.util.List;

public class ListPage<T> {

	private List<T> items;
	private long totalCount;

	public ListPage(List<T> items, long totalCount){
		this.items = new ArrayList<T>(items);
		this.totalCount = totalCount;
	}
	
	public List<T> getItems() {
		return items;
	}

	public long getTotalCount() {
		return totalCount;
	}
	
}

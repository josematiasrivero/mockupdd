package com.mockupdd.model;

import java.util.ArrayList;
import java.util.List;

public class ListPage<T> {

	private List<T> items;
	private int totalCount;

	public ListPage(List<T> items, int totalCount){
		this.items = new ArrayList<T>(items);
		this.totalCount = totalCount;
	}
	
	public List<T> getItems() {
		return items;
	}

	public int getTotalCount() {
		return totalCount;
	}
	
}

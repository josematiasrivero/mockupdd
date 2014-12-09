package com.mockupdd.model;

public class Mockup {
	private Long id;
	private String name;
	private String jsonData;
	
	public Mockup(){
		
	}
	
	public Long getId() {
		return id;
	}
	public void setId(Long id) {
		this.id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getJsonData() {
		return jsonData;
	}
	public void setJsonData(String jsonData) {
		this.jsonData = jsonData;
	}
}

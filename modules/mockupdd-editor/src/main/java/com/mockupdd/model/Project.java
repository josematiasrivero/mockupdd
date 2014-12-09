package com.mockupdd.model;

import java.util.List;

public class Project {
	private Long id;
	private String name;
	private List<Mockup> mockups;
	
	public Project(){
		
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

	public List<Mockup> getMockups() {
		return mockups;
	}

	public void setMockups(List<Mockup> mockups) {
		this.mockups = mockups;
	}
}

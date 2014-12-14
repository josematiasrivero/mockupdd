package com.mockupdd.model;

import java.util.ArrayList;
import java.util.List;

public class Project extends Entity<Long> {
	private String name;
	private List<Mockup> mockups;
	
	public Project(){
		mockups = new ArrayList<Mockup>();
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

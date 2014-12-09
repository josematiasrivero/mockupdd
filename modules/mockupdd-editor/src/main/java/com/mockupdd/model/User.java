package com.mockupdd.model;

import java.util.ArrayList;
import java.util.List;

public class User {
	private Long id;
	private List<Project> projects;

	public User(){
		this.projects = new ArrayList<Project>()
	}
	
	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public List<Project> getProjects() {
		return projects;
	}

	public void setProjects(List<Project> projects) {
		this.projects = projects;
	}
}

package com.mockupdd.model;

import java.util.ArrayList;
import java.util.List;

public class User extends Entity<Long>{
	private List<Project> projects;

	public User(){
		this.projects = new ArrayList<Project>();
	}

	public List<Project> getProjects() {
		return projects;
	}

	public void setProjects(List<Project> projects) {
		this.projects = projects;
	}
}

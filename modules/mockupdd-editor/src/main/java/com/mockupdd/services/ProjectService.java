package com.mockupdd.services;

import org.springframework.transaction.annotation.Transactional;

import com.mockupdd.model.ListPage;
import com.mockupdd.model.Project;
import com.mockupdd.repositories.ProjectRepository;

public class ProjectService {
	
	private ProjectRepository projectRepository;
	
	public ProjectService(ProjectRepository projectRepository){
		this.projectRepository = projectRepository;
	}
	
	@Transactional
	public ListPage<Project> getProjects(int from, int to){
		return this.projectRepository.getPage(from, to);
	}

}

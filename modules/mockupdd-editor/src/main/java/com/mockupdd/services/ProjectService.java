package com.mockupdd.services;

import org.springframework.transaction.annotation.Transactional;

import com.mockupdd.model.ListPage;
import com.mockupdd.model.Project;
import com.mockupdd.repositories.ProjectRepository;

@Transactional
public class ProjectService {
	
	private ProjectRepository projectRepository;
	
	public ProjectService(ProjectRepository projectRepository){
		this.projectRepository = projectRepository;
	}
	

	public ListPage<Project> getProjects(int from, int to){
		return this.projectRepository.getPage(from, to);
	}

	public Project createProject(String name) {
		Project project = new Project();
		project.setName(name);
		this.projectRepository.add(project);
		return project;
	}

	public void deleteProject(Long id) {
		Project project = new Project();
		project.setId(id);
		this.projectRepository.delete(project);
	}

}

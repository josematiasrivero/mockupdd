package com.mockupdd.services;

import org.springframework.transaction.annotation.Transactional;

import com.mockupdd.model.ListPage;
import com.mockupdd.model.Project;
import com.mockupdd.model.User;
import com.mockupdd.repositories.ProjectRepository;
import com.mockupdd.repositories.UserRepository;

@Transactional
public class ProjectService {
	
	private ProjectRepository projectRepository;
	private UserRepository userRepository;
	
	public ProjectService(ProjectRepository projectRepository, UserRepository userRepository){
		this.projectRepository = projectRepository;
		this.userRepository = userRepository;
	}
	
	public ListPage<Project> getProjects(Long user, int from, int to){
		return this.projectRepository.getProjectsOfUser(user, from, to);
	}

	public ListPage<Project> getProjects(int from, int to){
		return this.projectRepository.getPage(from, to);
	}

	public Project createProject(String name, Long userId) {
		
		Project project = new Project();
		project.setName(name);
		this.projectRepository.add(project);
		User user = userRepository.get(userId);
		user.addProject(project);
		userRepository.update(user);
		return project;
	}

	public void deleteProject(Long id) {
		Project project = new Project();
		project.setId(id);
		this.projectRepository.delete(project);
	}

}

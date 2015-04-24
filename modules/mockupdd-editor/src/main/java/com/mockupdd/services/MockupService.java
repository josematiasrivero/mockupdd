package com.mockupdd.services;

import java.io.IOException;

import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.mockupdd.model.ListPage;
import com.mockupdd.model.Mockup;
import com.mockupdd.model.Project;
import com.mockupdd.repositories.MockupRepository;
import com.mockupdd.repositories.ProjectRepository;

@Transactional
public class MockupService {
	
	private MockupRepository mockupRepository;
	private ProjectRepository projectRepository;
	private ResourceService resourceService;
	
	public MockupService(MockupRepository mockupRepositoy, ProjectRepository projectRepository, ResourceService resourceService){
		this.mockupRepository = mockupRepositoy;
		this.projectRepository = projectRepository;
		this.resourceService = resourceService;
	}
	
	public Mockup createMockup(Long projectId, String name, MultipartFile image) throws IOException{
		Project project = this.projectRepository.get(projectId);
		Mockup mockup = new Mockup();
		mockup.setName(name);
		this.mockupRepository.add(mockup);
		String resourceString = "projects/"+projectId+"/mockups/"+mockup.getId();
		this.resourceService.storeResource(resourceString, image);
		mockup.setJsonData("{image: \""+resourceString+"\"}");
		this.mockupRepository.update(mockup);
		project.getMockups().add(mockup);
		this.projectRepository.update(project);
		return mockup;
	}
	
	public ListPage<Mockup> getMockupsOfProject(long projectId, int from, int to){
		return this.mockupRepository.getMockupsOfProject(projectId, from, to);
	}

	public Mockup getMockup(Long mockupId) {
		return this.mockupRepository.get(mockupId);
	}
	
}

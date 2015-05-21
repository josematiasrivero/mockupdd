package com.mockupdd.services;

import java.io.IOException;

import org.springframework.transaction.annotation.Transactional;

import com.mockupdd.model.ListPage;
import com.mockupdd.model.Mockup;
import com.mockupdd.model.Project;
import com.mockupdd.repositories.MockupRepository;
import com.mockupdd.repositories.ProjectRepository;

@Transactional
public class MockupService {

  private MockupRepository mockupRepository;
  private ProjectRepository projectRepository;

  public MockupService(MockupRepository mockupRepositoy, ProjectRepository projectRepository) {
    this.mockupRepository = mockupRepositoy;
    this.projectRepository = projectRepository;
  }

  public Mockup createMockup(Long projectId, String name) throws IOException {
    Project project = this.projectRepository.get(projectId);
    Mockup mockup = new Mockup();
    mockup.setName(name);
    this.mockupRepository.add(mockup);
    this.mockupRepository.update(mockup);
    project.getMockups().add(mockup);
    this.projectRepository.update(project);
    return mockup;
  }

  public ListPage<Mockup> getMockupsOfProject(long projectId, int from, int to) {
    return this.mockupRepository.getMockupsOfProject(projectId, from, to);
  }

  public Mockup getMockup(Long mockupId) {
    return this.mockupRepository.get(mockupId);
  }

  public void update(Long mockupId, Mockup mockup) {
    this.mockupRepository.update(mockup);
  }

}

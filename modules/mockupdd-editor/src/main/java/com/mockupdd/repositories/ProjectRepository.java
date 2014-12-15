package com.mockupdd.repositories;

import org.hibernate.SessionFactory;

import com.mockupdd.model.Project;

public class ProjectRepository extends GenericRepository<Project,Long> {
	
	public ProjectRepository(SessionFactory sessionFactory){
		super(sessionFactory);
	}
	
	@Override
	protected Class<Project> getEntityClass(){
		return Project.class;
	}
}

package com.mockupdd.repositories;

import java.util.List;

import org.hibernate.SessionFactory;

import com.mockupdd.model.ListPage;
import com.mockupdd.model.Project;

public class ProjectRepository extends GenericRepository<Project,Long> {
	
	public ProjectRepository(SessionFactory sessionFactory){
		super(sessionFactory);
	}
	
	@Override
	protected Class<Project> getEntityClass(){
		return Project.class;
	}
	
	@SuppressWarnings("unchecked")
	public ListPage<Project> getProjectsOfUser(Long user,int from,int  to){
		List<Project> items = this.sessionFactory.getCurrentSession().createQuery("select p from User u JOIN u.projects p where u.id = :user")
				.setLong("user", user)
				.setFirstResult(from)
				.setMaxResults(from-to)
				.list();
				
		Long totalCount = (Long)this.sessionFactory.getCurrentSession().createQuery("select count(p) from User u JOIN u.projects p where u.id = :user")
				.setLong("user", user).uniqueResult();
		return new ListPage<>(items, totalCount);
	}
}

package com.mockupdd.repositories;

import org.hibernate.SessionFactory;

import com.mockupdd.model.Resource;

public class ResourceRepository extends GenericRepository<Resource, String>{

	public ResourceRepository(SessionFactory sessionFactory) {
		super(sessionFactory);
	}

	@Override
	protected Class<Resource> getEntityClass() {
		return Resource.class;
	}

}

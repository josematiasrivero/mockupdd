package com.mockupdd.repositories;

import org.hibernate.SessionFactory;

import com.mockupdd.model.User;

public class UserRepository extends GenericRepository<User, Long>{
	
	public UserRepository(SessionFactory sessionFactory){
		super(sessionFactory);
	}

	@Override
	protected Class<User> getEntityClass() {
		return User.class;
	}
	
}

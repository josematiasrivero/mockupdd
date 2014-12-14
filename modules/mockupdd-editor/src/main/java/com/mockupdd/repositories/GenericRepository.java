package com.mockupdd.repositories;

import java.util.List;

import org.hibernate.Criteria;
import org.hibernate.SessionFactory;
import org.hibernate.criterion.Restrictions;

import com.mockupdd.model.Entity;

public abstract class GenericRepository<E extends Entity<K>,K> {
	 
	protected SessionFactory sessionFactory;
	
	protected abstract Class<E> getEntityClass();

	public GenericRepository(SessionFactory sessionFactory){
		this.sessionFactory = sessionFactory;
	}
	
	protected Criteria getCriteria(){
		return this.sessionFactory.getCurrentSession().createCriteria(getEntityClass());
	}
	
	@SuppressWarnings("unchecked")
	public E get(K id){
		return (E) this.getCriteria()
				.add(Restrictions.idEq(id))
				.uniqueResult();
	}
	
	@SuppressWarnings("unchecked")
	public List<E> getAll(){
		return this.getCriteria().list();
	}
	
	public void delete(E element){
		this.sessionFactory.getCurrentSession().delete(element);
	}
	
	public void add(E element){
		this.sessionFactory.getCurrentSession().save(element);
	}
	
	public void update(E element){
		this.sessionFactory.getCurrentSession().update(element);
	}
}
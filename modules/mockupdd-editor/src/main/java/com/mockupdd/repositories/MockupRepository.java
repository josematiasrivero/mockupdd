package com.mockupdd.repositories;

import java.util.List;

import com.mockupdd.model.ListPage;

import org.hibernate.SessionFactory;

import com.mockupdd.model.Mockup;

public class MockupRepository extends GenericRepository<Mockup,Long>{

	public MockupRepository(SessionFactory sessionFactory) {
		super(sessionFactory);
	}

	@Override
	protected Class<Mockup> getEntityClass() {
		return Mockup.class;
	}

	@SuppressWarnings("unchecked")
	public ListPage<Mockup> getMockupsOfProject(long projectId, int from, int to) {
		long totalCount = (long)this.sessionFactory.getCurrentSession().createQuery("Select count(m) from Project p JOIN p.mockups m where p.id = :projectId)")
				.setLong("projectId", projectId).uniqueResult();
		List<Mockup> items = (List<Mockup>) this.sessionFactory.getCurrentSession().createQuery("Select m from Project p JOIN p.mockups m where p.id = :projectId)")
				.setLong("projectId", projectId).setFirstResult(from).setMaxResults(to-from).list();
		return new ListPage<>(items, totalCount);
	}

}

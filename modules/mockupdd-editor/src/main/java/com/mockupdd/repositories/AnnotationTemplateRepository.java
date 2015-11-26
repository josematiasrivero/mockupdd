package com.mockupdd.repositories;

import com.mockupdd.model.AnnotationTemplate;
import org.hibernate.SessionFactory;

public class AnnotationTemplateRepository extends GenericRepository<AnnotationTemplate, Long> {

  public AnnotationTemplateRepository(SessionFactory sessionFactory) {
    super(sessionFactory);
  }

  @Override
  protected Class<AnnotationTemplate> getEntityClass() {
    return AnnotationTemplate.class;
  }
}

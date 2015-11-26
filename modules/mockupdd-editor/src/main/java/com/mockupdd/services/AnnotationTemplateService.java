package com.mockupdd.services;

import com.mockupdd.model.AnnotationTemplate;
import com.mockupdd.repositories.AnnotationTemplateRepository;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Transactional
public class AnnotationTemplateService {

  private AnnotationTemplateRepository repository;

  public AnnotationTemplateService(AnnotationTemplateRepository repository) {
    this.repository = repository;
  }

  public List<AnnotationTemplate> getAll() {
    return repository.getAll();
  }

  public void delete(Long id) {
    AnnotationTemplate template = new AnnotationTemplate();
    template.setId(id);
    repository.delete(template);
  }

  public AnnotationTemplate get(Long id) {
    return repository.get(id);
  }

  public AnnotationTemplate create(String name, String content) {
    AnnotationTemplate template = new AnnotationTemplate();
    template.setName(name);
    template.setContent(content);
    repository.add(template);
    return template;
  }
}

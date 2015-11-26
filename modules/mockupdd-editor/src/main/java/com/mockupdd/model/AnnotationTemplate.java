package com.mockupdd.model;

public class AnnotationTemplate extends Entity<Long> {

  private String name;
  private String content;

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getContent() {
    return content;
  }

  public void setContent(String content) {
    this.content = content;
  }

}

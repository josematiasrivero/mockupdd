package com.mockupdd.model.annotation;

public class ClassBoundAnnotation extends MockupDDAnnotation {
	private String className;

	public ClassBoundAnnotation() {
		super();
	}

	public ClassBoundAnnotation(String className) {
		super();
		this.className = className;
	}

	public String getClassName() {
		return className;
	}

	public void setClassName(String className) {
		this.className = className;
	}

}

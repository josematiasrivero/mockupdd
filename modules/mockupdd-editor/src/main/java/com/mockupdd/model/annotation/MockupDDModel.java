package com.mockupdd.model.annotation;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class MockupDDModel {

	private List<MockupDDAnnotation> annotations;

	public MockupDDModel() {
		super();
		this.annotations = new ArrayList<MockupDDAnnotation>();
	}

	public void addAnnotation(MockupDDAnnotation annotation) {
		this.annotations.add(annotation);
	}

	public List<MockupDDAnnotation> getAnnotations() {
		return Collections.unmodifiableList(this.annotations);
	}

}

package com.mockupdd.conflict;

import java.util.Collections;
import java.util.List;
import java.util.Set;

import com.mockupdd.model.annotation.MockupDDAnnotation;

public class MockupDDConflict {

	private String description;
	private Set<MockupDDAnnotation> annotationsInvolved;

	public MockupDDConflict(String description, Set<MockupDDAnnotation> annotationsInvolved) {
		super();
		this.description = description;
		this.annotationsInvolved = annotationsInvolved;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Set<MockupDDAnnotation> getAnnotationsInvolved() {
		return Collections.unmodifiableSet(annotationsInvolved);
	}

}

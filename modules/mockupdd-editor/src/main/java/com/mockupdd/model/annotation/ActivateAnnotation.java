package com.mockupdd.model.annotation;

public class ActivateAnnotation {
	private String mockupId;

	public ActivateAnnotation(String mockupId) {
		super();
		this.setMockupId(mockupId);
	}

	public String getMockupId() {
		return mockupId;
	}

	public void setMockupId(String mockupId) {
		this.mockupId = mockupId;
	}

}

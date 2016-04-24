package com.mockupdd.model.annotation;

public class DataAnnotation extends ClassBoundAnnotation {
	private String property;
	private String dataType;

	public DataAnnotation() {
		super();
	}

	public DataAnnotation(String className, String property, String dataType) {
		super(className);
		this.property = property;
		this.dataType = dataType;
	}

	public void setProperty(String property) {
		this.property = property;
	}

	public String getDataType() {
		return dataType;
	}

	public void setDataType(String dataType) {
		this.dataType = dataType;
	}

	public String getProperty() {
		return property;
	}
}

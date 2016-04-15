package com.mockupdd.model.annotation;

public class DataAnnotation extends MockupDDAnnotation {
	private String className;
	private String property;
	private String dataType;

	public DataAnnotation() {
		super();
	}

	public DataAnnotation(String className, String property, String dataType) {
		super();
		this.className = className;
		this.property = property;
		this.dataType = dataType;
	}

	public String getClassName() {
		return className;
	}

	public void setClassName(String className) {
		this.className = className;
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

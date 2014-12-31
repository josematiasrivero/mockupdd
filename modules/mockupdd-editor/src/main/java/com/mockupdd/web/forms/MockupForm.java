package com.mockupdd.web.forms;

import org.springframework.web.multipart.MultipartFile;

public class MockupForm {
	private String name;
	private MultipartFile image;
	
	public MockupForm(){
		
	}
	
	public MultipartFile getImage() {
		return image;
	}
	public void setImage(MultipartFile image) {
		this.image = image;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
}

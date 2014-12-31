package com.mockupdd.model;

 
public class Resource extends Entity<String> {
	private byte[] data;
	private String type;
	
	protected Resource(){
		
	}
	
	public Resource(String id, byte[] data,String type){
		this.setId(id);
		this.data = data;
		this.type = type;
	}

	public byte[] getData() {
		return data;
	}

	public void setData(byte[] data) {
		this.data = data;
	}

	public String getType() {
		return type;
	}

	public void setType(String type) {
		this.type = type;
	}
}

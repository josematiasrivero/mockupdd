package com.mockupdd.model;

public class Mockup extends Entity<Long> {
    private String name;
    private String jsonData;

    public Mockup() {

    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getJsonData() {
        return jsonData;
    }

    public void setJsonData(String jsonData) {
        this.jsonData = jsonData;
    }
}

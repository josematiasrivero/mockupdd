package com.mockupdd.parser;

import org.jsoup.Jsoup;
import org.jsoup.nodes.Document;
import org.jsoup.nodes.Element;
import org.jsoup.select.Elements;

import com.mockupdd.model.annotation.DataAnnotation;
import com.mockupdd.model.annotation.MockupDDModel;

public class MockupDDHtmlParser {

	public MockupDDModel parse(String htmlContent) {
		MockupDDModel model = new MockupDDModel();
		
		Document doc = Jsoup.parse(htmlContent);
		
		Elements dataTags = doc.select("*[data-mockupdd-data]");
		for (Element element : dataTags) {
			this.parseDataTag(element, model);
		}
		
		return model;
	}

	private void parseDataTag(Element element, MockupDDModel model) {
		String content = element.attr("data-mockupdd-data");
		DataAnnotation annotation = new DataAnnotation();
		
		String[] parts = content.split("\\.");
		annotation.setClassName(parts[0]);
		if (parts.length > 1) {
			String[] propertyParts = parts[1].split(":");
			annotation.setProperty(propertyParts[0]);
			if(propertyParts.length > 1) {
				annotation.setDataType(propertyParts[1]);
			}
		}
		
		model.addAnnotation(annotation);
	}
	
}

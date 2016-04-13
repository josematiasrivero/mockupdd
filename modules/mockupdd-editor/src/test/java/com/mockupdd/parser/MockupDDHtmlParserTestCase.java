package com.mockupdd.parser;

import java.io.InputStream;

import org.apache.commons.io.IOUtils;
import org.junit.Assert;
import org.junit.Test;

import com.mockupdd.model.annotation.DataAnnotation;
import com.mockupdd.model.annotation.MockupDDModel;


public class MockupDDHtmlParserTestCase {

	@Test
	public void testDataAnnotationParsing() throws Exception {
		InputStream io = MockupDDHtmlParserTestCase.class.getClassLoader().getResourceAsStream("data-tag.html");
		String html = IOUtils.toString(io);
		IOUtils.closeQuietly(io);
		
		MockupDDHtmlParser parser = new MockupDDHtmlParser();
		MockupDDModel model = parser.parse(html);
		
		Assert.assertEquals(1, model.getAnnotations().size());
		
		DataAnnotation annotation =  (DataAnnotation) model.getAnnotations().get(0);
		Assert.assertEquals("Class", annotation.getClassName());
		Assert.assertEquals("property", annotation.getProperty());
		Assert.assertEquals("Type", annotation.getDataType());
		
	}

}

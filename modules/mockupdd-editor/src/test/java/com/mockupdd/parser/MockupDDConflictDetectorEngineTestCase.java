package com.mockupdd.parser;

import java.util.List;

import org.junit.Assert;
import org.junit.Test;

import com.mockupdd.conflict.MockupDDConflict;
import com.mockupdd.conflict.MockupDDConflictDetectorEngine;
import com.mockupdd.model.annotation.DataAnnotation;
import com.mockupdd.model.annotation.MockupDDModel;

public class MockupDDConflictDetectorEngineTestCase {

	@Test
	public void testInconsistentDatatypeConflictDetection() {
		MockupDDConflictDetectorEngine detectorEngine = MockupDDConflictDetectorEngine.getDefault();
		MockupDDModel model = new MockupDDModel();
		
		DataAnnotation annotation1 = new DataAnnotation("Class", "property", "Integer");
		model.addAnnotation(annotation1);
		
		DataAnnotation annotation2 = new DataAnnotation("class", "Property", "string");
		model.addAnnotation(annotation2);
		
		DataAnnotation annotation3 = new DataAnnotation("class2", "Property2", "string");
		model.addAnnotation(annotation3);
		
		List<MockupDDConflict> conflicts = detectorEngine.detectConflicts(model);
		Assert.assertEquals(1, conflicts.size());
		Assert.assertEquals(2, conflicts.get(0).getAnnotationsInvolved().size());
		Assert.assertTrue(conflicts.get(0).getAnnotationsInvolved().contains(annotation1));
		Assert.assertTrue(conflicts.get(0).getAnnotationsInvolved().contains(annotation2));
	}
	
}

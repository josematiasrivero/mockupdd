package com.mockupdd.conflict;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;

import com.mockupdd.model.annotation.DataAnnotation;
import com.mockupdd.model.annotation.MockupDDAnnotation;
import com.mockupdd.model.annotation.MockupDDModel;

public class MockupDDInconsistentDatatypeConflictDetector implements MockupDDConflictDetector {

	@Override
	public List<MockupDDConflict> detect(MockupDDModel model) {
		Map<String, DataAnnotation> classPropertyAndTypeMapping = new HashMap<String, DataAnnotation>();
		List<MockupDDConflict> conflicts = new ArrayList<MockupDDConflict>();
		
		for (MockupDDAnnotation annotation : model.getAnnotations()) {
			if (annotation instanceof DataAnnotation) {
				DataAnnotation dataAnnotation = (DataAnnotation) annotation;
				if (dataAnnotation.getClassName() != null && dataAnnotation.getProperty() != null && dataAnnotation.getDataType() != null) {
					
					String key = dataAnnotation.getClassName().toLowerCase() + "." + dataAnnotation.getProperty().toLowerCase();
					String type = dataAnnotation.getDataType().toLowerCase();
					if (classPropertyAndTypeMapping.containsKey(key)) {
						DataAnnotation matchingAnnotation = classPropertyAndTypeMapping.get(key);
						if (!matchingAnnotation.getDataType().toLowerCase().equals(type)) {
							Set<MockupDDAnnotation> involvedAnnotations = new HashSet<MockupDDAnnotation>(
									Arrays.asList(matchingAnnotation, annotation));
							conflicts.add(new MockupDDConflict("Properties have inconsistent datatype", involvedAnnotations));
						}
					}
					classPropertyAndTypeMapping.put(key, dataAnnotation);
					
				}
			}
		}
		
		return conflicts;
	}

}

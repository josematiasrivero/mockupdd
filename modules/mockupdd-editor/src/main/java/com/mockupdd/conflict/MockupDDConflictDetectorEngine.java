package com.mockupdd.conflict;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

import com.mockupdd.model.annotation.MockupDDModel;

public class MockupDDConflictDetectorEngine {

	public static MockupDDConflictDetectorEngine getDefault() {
		return new MockupDDConflictDetectorEngine(Arrays.asList(
				new MockupDDConflictDetector[] { 
						new MockupDDInconsistentDatatypeConflictDetector() 
				}
		));
	}
	
	private List<MockupDDConflictDetector> detectors;
	
	public MockupDDConflictDetectorEngine(List<MockupDDConflictDetector> detectors) {
		super();
		this.detectors = detectors;
	}

	public List<MockupDDConflict> detectConflicts(MockupDDModel model) {
		List<MockupDDConflict> conflicts = new ArrayList<MockupDDConflict>();

		for (MockupDDConflictDetector detector : this.detectors) {
			List<MockupDDConflict> newConflicts = detector.detect(model);
			conflicts.addAll(newConflicts);
		}
		
		return conflicts;
	}

}

package com.mockupdd.conflict;

import java.util.List;

import com.mockupdd.model.annotation.MockupDDModel;

public interface MockupDDConflictDetector {

	public List<MockupDDConflict> detect(MockupDDModel model);
	
}

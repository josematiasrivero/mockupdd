package com.mockupdd.services;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;

import org.apache.commons.io.IOUtils;
import org.springframework.http.MediaType;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.mockupdd.model.Resource;
import com.mockupdd.repositories.ResourceRepository;

@Transactional
public class ResourceService {

	private ResourceRepository resourceRepository;
	
	public ResourceService(ResourceRepository resourceRepository){
		this.resourceRepository = resourceRepository;
	}
	
	public void storeResource(String id, MultipartFile data) throws IOException{
		Resource resource = new Resource(id,IOUtils.toByteArray(data.getInputStream()),data.getContentType());
		this.resourceRepository.add(resource);
	}

	public Resource getResource(String id) {
		return this.resourceRepository.get(id);
	}
	
}

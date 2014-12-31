package com.mockupdd.web.controllers;

import javax.ws.rs.QueryParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mockupdd.model.Resource;
import com.mockupdd.services.ResourceService;

@Controller
public class ResourceController {

	@Autowired
	private ResourceService resourceService;
	
	@ResponseBody
	@RequestMapping(value="/resource")
	public ResponseEntity<byte[]> getResource(@QueryParam("id") String id){
		Resource resource = this.resourceService.getResource(id);
		HttpHeaders headers = new HttpHeaders();
		headers.setContentType(MediaType.parseMediaType(resource.getType()));
		return new ResponseEntity<byte[]>(resource.getData(),headers,HttpStatus.OK);
	}
}

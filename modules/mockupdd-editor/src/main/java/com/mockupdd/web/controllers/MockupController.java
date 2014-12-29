package com.mockupdd.web.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.mockupdd.model.Mockup;

@Controller
public class MockupController extends BaseController{
	
	@RequestMapping("/projects/{projectId}/mockup/{mockupId}")
	public ModelAndView viewMockup(@PathVariable("projectId") Long projectId, @PathVariable("mockupId") Long mockupId){
		ModelAndView mv = this.getView("mockup-view");
		Mockup mock = new Mockup();
		mock.setName("test");
		mv.addObject("mockup",mock);
		return mv;
	}
}

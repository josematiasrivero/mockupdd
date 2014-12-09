package com.mockupdd.web.controllers;

import java.util.ArrayList;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/projects")
public class ProjectsController {
	
	@RequestMapping("/")
	public ModelAndView listProjects(){
		ModelAndView mv = new ModelAndView("projects");
		mv.addObject("projects",new ArrayList());
		return mv;
	}

}

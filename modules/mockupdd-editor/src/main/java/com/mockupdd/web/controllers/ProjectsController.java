package com.mockupdd.web.controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

import com.mockupdd.model.Mockup;
import com.mockupdd.model.Project;

@Controller
@RequestMapping("/projects")
public class ProjectsController {
	
	@RequestMapping("/")
	public ModelAndView listProjects(){
		ModelAndView mv = new ModelAndView("projects-list");
		List<Project> projects = new ArrayList<Project>();
		Project p1 = new Project();
		p1.setId(1L);
		p1.setName("Test project 1");
		projects.add(p1);
		Project p2 = new Project();
		p2.setId(2L);
		p2.setName("Test project 2");
		projects.add(p2);
		mv.addObject("projects",projects);
		return mv;
	}
	
	@RequestMapping("/{projectId}")
	public ModelAndView viewProject(){
		ModelAndView mv = new ModelAndView("project-view");
		Project project = new Project();
		project.setId(1);
		project.setName("Test");
		Mockup m1 = new Mockup();
		m1.setId(1L);
		m1.setName("Mokcup 1");
		Mockup m2 = new Mockup();
		m2.setId(2L);
		m2.setName("Mokcup 2");
		project.getMockups().add(m1);
		project.getMockups().add(m2);
		mv.addObject("project",project);
		return mv;
	}

}

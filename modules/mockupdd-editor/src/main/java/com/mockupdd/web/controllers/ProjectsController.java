package com.mockupdd.web.controllers;

import javax.ws.rs.QueryParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.FormParam;
import javax.ws.rs.QueryParam;

import com.mockupdd.model.Mockup;
import com.mockupdd.model.Project;
import com.mockupdd.services.ProjectService;

@Controller
@RequestMapping("/projects")
public class ProjectsController {
	
	private static int PAGE_SIZE = 5;
	
	@Autowired
	private ProjectService projectService;
	
	@RequestMapping("/")
	public ModelAndView listProjects( @QueryParam("page") Integer page){
		if(page == null){
			page = 1;
		}
		ModelAndView mv = new ModelAndView("projects-list");
		mv.addObject("projects",this.projectService.getProjects((page-1)*PAGE_SIZE, page*PAGE_SIZE));
		return mv;
	}
	
	@RequestMapping(value="/", method=RequestMethod.POST)
	public ModelAndView createProject( @FormParam("name") String name){
		Project project = this.projectService.createProject(name);
		return new ModelAndView("redirect:/projects/"+project.getId());
	}
	
	@RequestMapping(value="/delete", method=RequestMethod.POST)
	public ModelAndView deleteProject( @FormParam("id") Long id){
		this.projectService.deleteProject(id);
		return new ModelAndView("redirect:/projects/");
	}
	
	@RequestMapping("/{projectId}")
	public ModelAndView viewProject(){
		ModelAndView mv = new ModelAndView("project-view");
		Project project = new Project();
		project.setId(1L);
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

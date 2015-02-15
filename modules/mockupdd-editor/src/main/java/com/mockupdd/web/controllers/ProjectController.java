package com.mockupdd.web.controllers;

import javax.ws.rs.QueryParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import javax.ws.rs.DefaultValue;
import javax.ws.rs.FormParam;
import javax.ws.rs.QueryParam;

import com.mockupdd.model.Mockup;
import com.mockupdd.model.Project;
import com.mockupdd.model.User;
import com.mockupdd.services.MockupService;
import com.mockupdd.services.ProjectService;
import com.mockupdd.services.UserService;

@Controller
@RequestMapping("/projects")
public class ProjectController extends BaseController {

  @Autowired
  private ProjectService projectService;
  @Autowired
  private MockupService mockupService;
  @Autowired
  private UserService userService;

  @RequestMapping("/")
  public ModelAndView listProjects(@QueryParam("page") Integer page) {
    if (page == null) {
      page = 1;
    }
    ModelAndView mv = this.getView("projects-list");
    mv.addObject("page", page);
    mv.addObject("projects", this.projectService.getProjects(getLoggedUserId(), (page - 1) * PAGE_SIZE, page * PAGE_SIZE));
    return mv;
  }

  @RequestMapping(value = "/", method = RequestMethod.POST)
  public ModelAndView createProject(@FormParam("name") String name) {
    Project project = this.projectService.createProject(name, getLoggedUserId());
    return new ModelAndView("redirect:/projects/" + project.getId() + "/");
  }

  @RequestMapping(value = "/delete", method = RequestMethod.POST)
  public ModelAndView deleteProject(@FormParam("id") Long id) {
    this.projectService.deleteProject(id);
    return new ModelAndView("redirect:/projects/");
  }

  @RequestMapping("/{projectId}/")
  public ModelAndView viewProject(@PathVariable("projectId") Long projectId, @QueryParam("page") Integer page) {
    if (page == null) {
      page = 1;
    }
    ModelAndView mv = this.getView("project-view");
    mv.addObject("page", page);
    mv.addObject("project", this.projectService.getProject(projectId));
    mv.addObject("mockups", this.mockupService.getMockupsOfProject(projectId, (page - 1) * PAGE_SIZE, page * PAGE_SIZE));
    return mv;
  }

}

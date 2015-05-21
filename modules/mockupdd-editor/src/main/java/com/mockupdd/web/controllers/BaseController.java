package com.mockupdd.web.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.servlet.ModelAndView;

import com.mockupdd.model.User;
import com.mockupdd.services.UserService;

public class BaseController {

  protected static int PAGE_SIZE = 5;
  
  @Autowired
  private UserService userService;
  
  protected ModelAndView getView(String viewName) {
    ModelAndView mv = new ModelAndView(viewName);
    Long loggedUserId = this.getLoggedUserId();
    if(loggedUserId != null){
    	mv.addObject("loggedUser", this.userService.getUserById(loggedUserId));
    }
    return mv;
  }

  protected Long getLoggedUserId() {
	try {
	    User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
	    if(user != null){
	    	return user.getId();
	    }
	    return null;
	} catch (ClassCastException e){
		//This cast fails when no user is logged, as the getPrincipal method returns a string.
		return null;
	}
  }

}

package com.mockupdd.web.controllers;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.servlet.ModelAndView;

import com.mockupdd.model.User;

public class BaseController {
	
	protected static int PAGE_SIZE = 5;

	protected ModelAndView getView(String viewName){
		ModelAndView mv = new ModelAndView(viewName);
		return mv;
	}
	
	protected Long getLoggedUserId(){
		return ((User) SecurityContextHolder.getContext().getAuthentication().getPrincipal()).getId();
	}
	
}

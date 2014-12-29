package com.mockupdd.web.controllers;

import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.servlet.ModelAndView;

public class BaseController {

	protected ModelAndView getView(String viewName){
		ModelAndView mv = new ModelAndView(viewName);
		return mv;
	}
	
}

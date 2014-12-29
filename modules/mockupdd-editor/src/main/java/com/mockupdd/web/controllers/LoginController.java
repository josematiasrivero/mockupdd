package com.mockupdd.web.controllers;

import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.servlet.ModelAndView;

@Controller
@RequestMapping("/")
public class LoginController extends BaseController{

	@RequestMapping("/login")
	public ModelAndView index(){
		Authentication aut = SecurityContextHolder.getContext().getAuthentication();
		return this.getView("login");
	}
	
}

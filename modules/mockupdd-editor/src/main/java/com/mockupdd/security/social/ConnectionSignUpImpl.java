package com.mockupdd.security.social;

import org.springframework.social.connect.Connection;
import org.springframework.social.connect.ConnectionSignUp;

import com.mockupdd.services.UserService;

public class ConnectionSignUpImpl implements ConnectionSignUp{
	
	private UserService userService;
	
	public ConnectionSignUpImpl(UserService userService){
		this.userService = userService;
	}

	@Override
	public String execute(Connection<?> connection) {
		return this.userService.createNewUser().getId().toString();
	}

	
}

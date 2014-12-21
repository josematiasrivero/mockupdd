package com.mockupdd.security;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;

public enum UserRole {
	
	ROLE_USER,
	ROLE_ANONYMOUS;
	
	public GrantedAuthority getAuthority(){
		return new SimpleGrantedAuthority(this.toString());
	}
}

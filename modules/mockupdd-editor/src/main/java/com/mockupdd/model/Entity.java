package com.mockupdd.model;

/**
 *
 * This class represents any persistent entity with identity.
 *
 * @param <K> The type of the identifier
 */
public abstract class Entity<K> {
	protected K id;

	public K getId() {
		return id;
	}

	public void setId(K id) {
		this.id = id;
	}
	
}

package com.mockupdd.web.rest.util;

import javax.ws.rs.core.Response;

import org.codehaus.jettison.json.JSONException;
import org.codehaus.jettison.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;



public class APIResponse {

  private static Logger log = LoggerFactory.getLogger(APIResponse.class);
  
  public static Response ok(){
    return APIResponse.ok(null);
  }
  
  public static Response ok(String message){
    JSONObject json = new JSONObject();
    try{
      json.put("result", "ok");
    } catch (JSONException e){
      //Should never happen, this is only thrown when the key is null.
      log.error("Error creating API response");
    }
    if(message != null){
      try{
        json.put("message", message);
      } catch (JSONException e){
        //Should never happen, this is only thrown when the key is null.
        log.error("Error creating API response");
      }
    }
    return Response.ok(json).build();
  }

  public static Response userError(){
    return APIResponse.userError(null);
  }
  
  public static Response userError(String message) {
    JSONObject json = new JSONObject();
    try{
      json.put("result", "error");
    } catch (JSONException e){
      //Should never happen, this is only thrown when the key is null.
      log.error("Error creating API response");
    }
    if(message != null){
      try{
        json.put("message", message);
      } catch (JSONException e){
        //Should never happen, this is only thrown when the key is null.
        log.error("Error creating API response");
      }
    }
    return Response.status(400).entity(message).build();
  }
}

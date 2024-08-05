package com.highlands_coffee.backend.entity;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

@Component
public class ResponseMsg {
    public static ResponseEntity<Object> ResponseOk(String message, ResponseData data) {
        Map<String, Object> map = new HashMap<String, Object>();
        if (message != "") map.put("message", message);
        if (data != null) {
            Map<String, Object> dataMap = data.getData();
            for (Map.Entry<String, Object> entry: dataMap.entrySet()) {
                map.put(entry.getKey(), entry.getValue());
            }
        }
        HttpStatus status = HttpStatus.OK;
        data.clearData();

        return new ResponseEntity<Object>(map, status);
    }
    
    public static ResponseEntity<Object> ResponseError(String error) {
        Map<String, Object> map = new HashMap<String, Object>();
        if (error != "") map.put("error", error);
        HttpStatus status = HttpStatus.BAD_REQUEST;

        return new ResponseEntity<Object>(map, status);
    }
}

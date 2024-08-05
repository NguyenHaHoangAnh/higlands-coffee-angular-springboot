package com.highlands_coffee.backend.controller;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.highlands_coffee.backend.entity.ResponseData;
import com.highlands_coffee.backend.entity.ResponseMsg;
import com.highlands_coffee.backend.model.User;
import com.highlands_coffee.backend.repository.UserRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin
@RestController
public class UserController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private ResponseData responseData;

    @RequestMapping(value="/user/{id}", method=RequestMethod.GET)
    public ResponseEntity<Object> login(@PathVariable("id") String id) {
        Optional<User> optional = this.userRepository.findById(id);
        if (!optional.isPresent()) {
            return ResponseMsg.ResponseError("Không tìm thấy User");
        }
        User user = optional.get();
        responseData.add("data", user);
        return ResponseMsg.ResponseOk("Lấy thông tin User thành công", responseData);
    }
}

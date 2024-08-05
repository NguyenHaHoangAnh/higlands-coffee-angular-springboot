package com.highlands_coffee.backend.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.highlands_coffee.backend.entity.JwtToken;
import com.highlands_coffee.backend.entity.ResponseData;
import com.highlands_coffee.backend.entity.ResponseMsg;
import com.highlands_coffee.backend.model.User;
import com.highlands_coffee.backend.repository.AuthRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin
@RestController
public class AuthController {
    @Autowired
    private AuthRepository authRepository;
    @Autowired
    private JwtToken jwtToken;
    @Autowired
    private ResponseData responseData;

    @RequestMapping(value="/login", method=RequestMethod.POST)
    public ResponseEntity<Object> login(@RequestBody User user) {
        String username = user.getUsername();
        String password = user.getPassword();
        User userFound = authRepository.findByUsername(username);
        if (userFound == null) {
            return ResponseMsg.ResponseError("Tài khoản không tồn tại");
        }
        if (!userFound.getPassword().equals(password)) {
            return ResponseMsg.ResponseError("Mật khẩu không chính xác");
        }
        String token = jwtToken.generateToken(userFound);
        String id = userFound.getId();
        responseData.add("token", token);
        responseData.add("id", id);

        return ResponseMsg.ResponseOk("Đăng nhập thành công", responseData);
    }
}

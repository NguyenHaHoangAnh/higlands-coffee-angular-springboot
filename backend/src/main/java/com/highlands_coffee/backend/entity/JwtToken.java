package com.highlands_coffee.backend.entity;

import java.util.Date;

import org.springframework.stereotype.Component;

import com.highlands_coffee.backend.model.User;

import io.jsonwebtoken.*;
import lombok.extern.slf4j.Slf4j;

@Component
@Slf4j
public class JwtToken {
    private final String JWT_SECRETE = "ThisIsACompletelySecretHighlandsCoffeeSignatureThatNoOneWillKnow";
    private final long JWT_EXPIRATION = 3 * 24 * 60 * 60;

    @SuppressWarnings("deprecation")
    public String generateToken(User user) {
        Date now = new Date();
        Date expiredDate = new Date(now.getTime() + JWT_EXPIRATION);

        return Jwts.builder()
                .setSubject(user.getId())
                .setIssuedAt(now)
                .setExpiration(expiredDate)
                .signWith(SignatureAlgorithm.HS256, JWT_SECRETE)
                .compact();
    }
}

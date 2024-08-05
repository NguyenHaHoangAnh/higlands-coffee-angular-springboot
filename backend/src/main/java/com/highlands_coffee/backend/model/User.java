package com.highlands_coffee.backend.model;

import org.springframework.data.mongodb.core.mapping.Document;

import com.highlands_coffee.backend.entity.BaseEntity;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)

@Document(collection = "users")
public class User extends BaseEntity {
    private String id;
    @Column(unique = true)
    private String username;
    private String password;
    private String name;
    private String role;
}

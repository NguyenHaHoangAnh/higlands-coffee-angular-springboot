package com.highlands_coffee.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.highlands_coffee.backend.model.User;

public interface UserRepository extends MongoRepository<User, String> {}

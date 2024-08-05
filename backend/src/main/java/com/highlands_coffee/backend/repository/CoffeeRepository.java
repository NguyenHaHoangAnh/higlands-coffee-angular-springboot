package com.highlands_coffee.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.highlands_coffee.backend.model.Coffee;

public interface CoffeeRepository extends MongoRepository<Coffee, String> {
}

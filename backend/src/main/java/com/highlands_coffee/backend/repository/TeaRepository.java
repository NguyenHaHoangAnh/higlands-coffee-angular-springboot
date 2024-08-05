package com.highlands_coffee.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.highlands_coffee.backend.model.Tea;

public interface TeaRepository extends MongoRepository<Tea, String> {
}

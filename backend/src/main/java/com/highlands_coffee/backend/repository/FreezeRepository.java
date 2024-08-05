package com.highlands_coffee.backend.repository;

import org.springframework.data.mongodb.repository.MongoRepository;

import com.highlands_coffee.backend.model.Freeze;

public interface FreezeRepository extends MongoRepository<Freeze, String> {
}

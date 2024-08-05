package com.highlands_coffee.backend.entity;

import java.util.Date;

import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.mongodb.core.mapping.Field;

import jakarta.persistence.MappedSuperclass;

@MappedSuperclass
public class BaseEntity {
    @CreatedDate
    @Field(name = "created_at")
    private Date createdAt;
    @LastModifiedDate
    @Field(name = "updated_at")
    private Date updatedAt;

    public BaseEntity() {
        this.createdAt = new Date();
        this.updatedAt = new Date();
    }

    // Getter - setter
    public Date getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(Date createdAt) {
        this.createdAt = createdAt;
    }

    public Date getUpdatedAt() {
        return updatedAt;
    }

    public void setUpdatedAt(Date updatedAt) {
        this.updatedAt = updatedAt;
    }
}

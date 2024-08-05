package com.highlands_coffee.backend.model;

import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;

import com.highlands_coffee.backend.entity.BaseEntity;
import com.highlands_coffee.backend.entity.Size;

@Data
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)

@Document(collection = "freezes")
public class Freeze extends BaseEntity {
    private String id;
    private String name;
    private String image;
    private String description;
    private Size small;
    private Size medium;
    private Size large;
}

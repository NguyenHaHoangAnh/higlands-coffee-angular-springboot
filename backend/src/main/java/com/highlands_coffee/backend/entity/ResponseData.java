package com.highlands_coffee.backend.entity;

import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Component;

@Component
public class ResponseData {
    private Map<String, Object> data;

    public ResponseData() {
        this.data = new HashMap<>();
    }

    // Phương thức để thêm key-value
    public void add(String key, Object value) {
        data.put(key, value);
    }

    // Phương thức để lấy giá trị theo key
    public Object getValue(String key) {
        return data.get(key);
    }

    // Phương thức để xóa key
    public void remove(String key) {
        data.remove(key);
    }

    // Phương thức để trả về tất cả các thuộc tính dưới dạng Map
    public Map<String, Object> getData() {
        return new HashMap<>(this.data);
    }

    public void clearData() {
        this.data.clear();
    }
}

package com.highlands_coffee.backend.controller;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.highlands_coffee.backend.entity.ResponseData;
import com.highlands_coffee.backend.entity.ResponseMsg;
import com.highlands_coffee.backend.model.Coffee;
import com.highlands_coffee.backend.repository.CoffeeRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin
@RestController
public class CoffeeController {
    @Autowired
    private CoffeeRepository coffeeRepository;
    @Autowired
    private ResponseData responseData;

    @RequestMapping(value="/coffee", method=RequestMethod.GET)
    public ResponseEntity<Object> getAllItems() {
        List<Coffee> data = this.coffeeRepository.findAll();
        if (data.isEmpty()) {
            return ResponseMsg.ResponseError("Không tìm thấy dữ liệu");
        }
        responseData.add("data", data);
        return ResponseMsg.ResponseOk("Lấy dữ liệu thành công", responseData);
    }

    @RequestMapping(value="/coffee/create", method=RequestMethod.POST)
    public ResponseEntity<Object> createItem(@RequestBody Coffee Coffee) {
        if (Coffee == null) {
            return ResponseMsg.ResponseError("Payload không hợp lệ");
        }
        this.coffeeRepository.save(Coffee);
        responseData.add("data", Coffee);
        return ResponseMsg.ResponseOk("Thêm thành công", responseData);
    }

    @RequestMapping(value="/coffee/update/{id}", method=RequestMethod.PUT)
    public ResponseEntity<Object> updateItem(@PathVariable("id") String id, @RequestBody Coffee Coffee) {
        Optional<Coffee> optional = this.coffeeRepository.findById(id);
        if (!optional.isPresent()) {
            return ResponseMsg.ResponseError("Không tìm thấy sản phẩm");
        } 
        Coffee currentCoffee = optional.get();
        this.merge(Coffee, currentCoffee);
        this.coffeeRepository.save(currentCoffee);
        responseData.add("data", currentCoffee);
        return ResponseMsg.ResponseOk("Cập nhật thành công", responseData);
    }

    @RequestMapping(value="/coffee/delete/{id}", method=RequestMethod.DELETE)
    public ResponseEntity<Object> deleteItem(@PathVariable("id") String id) {
        Optional<Coffee> optional = this.coffeeRepository.findById(id);
        if (!optional.isPresent()) {
            return ResponseMsg.ResponseError("Không tìm thấy sản phẩm");
        } 
        this.coffeeRepository.deleteById(id);
        return ResponseMsg.ResponseOk("Xóa thành công", null);
    }

    public void merge(Coffee newItem, Coffee currentItem) {
        currentItem.setName(newItem.getName());
        currentItem.setImage(newItem.getImage());
        currentItem.setDescription(newItem.getDescription());
        currentItem.setSmall(newItem.getSmall());
        currentItem.setMedium(newItem.getMedium());
        currentItem.setLarge(newItem.getLarge());
        currentItem.setUpdatedAt(new Date());
    }
}

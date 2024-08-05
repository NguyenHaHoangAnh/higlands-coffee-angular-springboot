package com.highlands_coffee.backend.controller;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.highlands_coffee.backend.entity.ResponseData;
import com.highlands_coffee.backend.entity.ResponseMsg;
import com.highlands_coffee.backend.model.Freeze;
import com.highlands_coffee.backend.repository.FreezeRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin
@RestController
public class FreezeController {
    @Autowired
    private FreezeRepository freezeRepository;
    @Autowired
    private ResponseData responseData;

    @RequestMapping(value="/freeze", method=RequestMethod.GET)
    public ResponseEntity<Object> getAllItems() {
        List<Freeze> data = this.freezeRepository.findAll();
        if (data.isEmpty()) {
            return ResponseMsg.ResponseError("Không tìm thấy dữ liệu");
        }
        responseData.add("data", data);
        return ResponseMsg.ResponseOk("Lấy dữ liệu thành công", responseData);
    }

    @RequestMapping(value="/freeze/create", method=RequestMethod.POST)
    public ResponseEntity<Object> createItem(@RequestBody Freeze freeze) {
        if (freeze == null) {
            return ResponseMsg.ResponseError("Payload không hợp lệ");
        }
        this.freezeRepository.save(freeze);
        responseData.add("data", freeze);
        return ResponseMsg.ResponseOk("Thêm thành công", responseData);
    }

    @RequestMapping(value="/freeze/update/{id}", method=RequestMethod.PUT)
    public ResponseEntity<Object> updateItem(@PathVariable("id") String id, @RequestBody Freeze freeze) {
        Optional<Freeze> optional = this.freezeRepository.findById(id);
        if (!optional.isPresent()) {
            return ResponseMsg.ResponseError("Không tìm thấy sản phẩm");
        } 
        Freeze currentFreeze = optional.get();
        this.merge(freeze, currentFreeze);
        this.freezeRepository.save(currentFreeze);
        responseData.add("data", currentFreeze);
        return ResponseMsg.ResponseOk("Cập nhật thành công", responseData);
    }

    @RequestMapping(value="/freeze/delete/{id}", method=RequestMethod.DELETE)
    public ResponseEntity<Object> deleteItem(@PathVariable("id") String id) {
        Optional<Freeze> optional = this.freezeRepository.findById(id);
        if (!optional.isPresent()) {
            return ResponseMsg.ResponseError("Không tìm thấy sản phẩm");
        } 
        this.freezeRepository.deleteById(id);
        return ResponseMsg.ResponseOk("Xóa thành công", null);
    }

    public void merge(Freeze newItem, Freeze currentItem) {
        currentItem.setName(newItem.getName());
        currentItem.setImage(newItem.getImage());
        currentItem.setDescription(newItem.getDescription());
        currentItem.setSmall(newItem.getSmall());
        currentItem.setMedium(newItem.getMedium());
        currentItem.setLarge(newItem.getLarge());
        currentItem.setUpdatedAt(new Date());
    }
}

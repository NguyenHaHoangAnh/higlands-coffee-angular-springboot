package com.highlands_coffee.backend.controller;

import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;

import com.highlands_coffee.backend.entity.ResponseData;
import com.highlands_coffee.backend.entity.ResponseMsg;
import com.highlands_coffee.backend.model.Tea;
import com.highlands_coffee.backend.repository.TeaRepository;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@CrossOrigin
@RestController
public class TeaController {
    @Autowired
    private TeaRepository teaRepository;
    @Autowired
    private ResponseData responseData;

    @RequestMapping(value="/tea", method=RequestMethod.GET)
    public ResponseEntity<Object> getAllItems() {
        List<Tea> data = this.teaRepository.findAll();
        if (data.isEmpty()) {
            return ResponseMsg.ResponseError("Không tìm thấy dữ liệu");
        }
        responseData.add("data", data);
        return ResponseMsg.ResponseOk("Lấy dữ liệu thành công", responseData);
    }

    @RequestMapping(value="/tea/create", method=RequestMethod.POST)
    public ResponseEntity<Object> createItem(@RequestBody Tea tea) {
        if (tea == null) {
            return ResponseMsg.ResponseError("Payload không hợp lệ");
        }
        this.teaRepository.save(tea);
        responseData.add("data", tea);
        return ResponseMsg.ResponseOk("Thêm thành công", responseData);
    }

    @RequestMapping(value="/tea/update/{id}", method=RequestMethod.PUT)
    public ResponseEntity<Object> updateItem(@PathVariable("id") String id, @RequestBody Tea tea) {
        Optional<Tea> optional = this.teaRepository.findById(id);
        if (!optional.isPresent()) {
            return ResponseMsg.ResponseError("Không tìm thấy sản phẩm");
        } 
        Tea currentTea = optional.get();
        this.merge(tea, currentTea);
        this.teaRepository.save(currentTea);
        responseData.add("data", currentTea);
        return ResponseMsg.ResponseOk("Cập nhật thành công", responseData);
    }

    @RequestMapping(value="/tea/delete/{id}", method=RequestMethod.DELETE)
    public ResponseEntity<Object> deleteItem(@PathVariable("id") String id) {
        Optional<Tea> optional = this.teaRepository.findById(id);
        if (!optional.isPresent()) {
            return ResponseMsg.ResponseError("Không tìm thấy sản phẩm");
        } 
        this.teaRepository.deleteById(id);
        return ResponseMsg.ResponseOk("Xóa thành công", null);
    }

    public void merge(Tea newItem, Tea currentItem) {
        currentItem.setName(newItem.getName());
        currentItem.setImage(newItem.getImage());
        currentItem.setDescription(newItem.getDescription());
        currentItem.setSmall(newItem.getSmall());
        currentItem.setMedium(newItem.getMedium());
        currentItem.setLarge(newItem.getLarge());
        currentItem.setUpdatedAt(new Date());
    }
}

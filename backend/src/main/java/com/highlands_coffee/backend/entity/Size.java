package com.highlands_coffee.backend.entity;

public class Size {
    private String size;
    private long price;

    public Size(String size, long price) {
        this.size = size;
        this.price = price;
    }

    public String getSize() {
        return size;
    }

    public void setSize(String size) {
        this.size = size;
    }

    public long getPrice() {
        return price;
    }

    public void setPrice(long price) {
        this.price = price;
    }
}

package com.example.coffeeandtequila.Controller;

import com.example.coffeeandtequila.Model.Product;
import com.example.coffeeandtequila.Model.Product_1;
import com.example.coffeeandtequila.Service.ProductService_1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin
public class Product_1Controller {
    @Autowired
    ProductService_1 productService_1;

    @GetMapping("/starbucks/product/{id}")
    public Product_1 show(@PathVariable int id) {
        return productService_1.findById(id);
    }



    @GetMapping("/products1")
    public List<Product_1> getAllProducts() {
        return productService_1.findAll();
    }
}

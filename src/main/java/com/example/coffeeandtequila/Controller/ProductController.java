package com.example.coffeeandtequila.Controller;

import com.example.coffeeandtequila.Model.Product;
import com.example.coffeeandtequila.Service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
public class ProductController {
    @Autowired
    ProductService productService;

    @GetMapping("/product/{id}")
    public Product show(@PathVariable int id) {
        return productService.findById(id);
    }

    @RequestMapping(value = "/product", method = {RequestMethod.POST, RequestMethod.PUT})
    public Product createOrUpdate(@Valid Product product) {
        return productService.save(product);
    }
}

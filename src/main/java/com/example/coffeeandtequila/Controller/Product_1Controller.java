package com.example.coffeeandtequila.Controller;

import com.example.coffeeandtequila.Model.Product_1;
import com.example.coffeeandtequila.Service.ProductService_1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.validation.Valid;

@Controller
public class Product_1Controller {
    @Autowired
    ProductService_1 productService_1;

    @GetMapping("/product_1/{id}")
    public String show(@PathVariable int id, Model model) {
        Product_1 product_1 = productService_1.findById(id);
        model.addAttribute(product_1);
        return "product_1";
    }

    @RequestMapping(value = "/product_1", method = {RequestMethod.POST, RequestMethod.PUT})
    public String createOrUpdate(@Valid Product_1 product_1) {
        productService_1.save(product_1);
        return "redirect:/product_1/" + product_1.getId();
    }
}

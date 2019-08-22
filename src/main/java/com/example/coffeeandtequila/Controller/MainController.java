package com.example.coffeeandtequila.Controller;

import com.example.coffeeandtequila.Model.Product;
import com.example.coffeeandtequila.Model.Product_1;
import com.example.coffeeandtequila.Model.User;
import com.example.coffeeandtequila.Service.ProductService;
import com.example.coffeeandtequila.Service.ProductService_1;
import com.example.coffeeandtequila.Service.UserService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Data
@Controller
@ControllerAdvice // This makes the `@ModelAttribute`s of this controller available to all controllers, for the navbar.
public class MainController {
    @Autowired
    ProductService productService;

    @Autowired
    ProductService_1 productService_1;

    @Autowired
    UserService userService;

    @ModelAttribute("loggedInUser")
    public User loggedInUser() {
        return userService.getLoggedInUser();
    }


    @GetMapping("/notjustcoffee")
    public String notjustcoffee() {return "notjustcoffee"; }

    @GetMapping("/starbucks")
    public String starbucks() {return "starbucks"; }

    @GetMapping("/othercafe")
    public String othercafe() {return "othercafe"; }

    @GetMapping("/coffeeshops")
    public String coffeeshops() {
        return "CoffeeShops";
    }



    @ModelAttribute("products")
    public List<Product> products() {
        return productService.findAll();
    }

    @ModelAttribute("categories")
    public List<String> categories() {
        return productService.findDistinctCategories();
    }

    @ModelAttribute("brands")
    public List<String> brands() {
        return productService.findDistinctBrands();
    }

    @GetMapping("/filter")
    public String filter(@RequestParam(required = false) String category,
                         @RequestParam(required = false) String brand,
                         Model model) {
        List<Product> filtered = productService.findByBrandAndOrCategory(brand, category);
        model.addAttribute("products", filtered); // Overrides the @ModelAttribute above.
        return "notjustcoffee";
    }



    @ModelAttribute("products_1")
    public List<Product_1> products_1() {
        return productService_1.findAll();
    }

    @ModelAttribute("categories_1")
    public List<String> categories_1() {
        return productService_1.findDistinctCategories();
    }

    @ModelAttribute("brands_1")
    public List<String> brands_1() {
        return productService_1.findDistinctBrands();
    }

    @GetMapping("/filter_1")
    public String filter_1(@RequestParam(required = false) String category,
                         @RequestParam(required = false) String brand,
                         Model model) {
        List<Product_1> filtered = productService_1.findByBrandAndOrCategory(brand, category);
        model.addAttribute("products_1", filtered); // Overrides the @ModelAttribute above.
        return "starbucks";
    }


    @GetMapping("/about")
    public String about() {
        return "about";
    }
}


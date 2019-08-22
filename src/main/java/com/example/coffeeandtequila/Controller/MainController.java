package com.example.coffeeandtequila.Controller;

import com.example.coffeeandtequila.Model.Product;
import com.example.coffeeandtequila.Service.ProductService;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Data
@RestController
@ControllerAdvice // This makes the `@ModelAttribute`s of this controller available to all controllers, for the navbar.
public class MainController {
    @Autowired
    ProductService productService;

//    @Autowired
//    ProductService_1 productService_1;

//    @Autowired
//    AmelieService amelieService;

//    @GetMapping("/")
//    public String main() { return "main"; }
//
//    @GetMapping("/product")
//    public String product() { return "product"; }

//    @GetMapping("/notjustcoffee")
//    public String notjustcoffee() {return "notjustcoffee"; }

//    @GetMapping("/starbucks")
//    public String starbucks() {return "starbucks"; }

//    @GetMapping("/amelie")
//    public String amelie() {return "amelie"; }

//    @GetMapping("/coffeeshops")
//    public String coffeeshops() { return "coffeeshops"; }
//
//
//
//    @ModelAttribute("products")
//    public List<Product> products() {
//        return productService.findAll();
//    }
//
//    @ModelAttribute("categories")
//    public List<String> categories() {
//        return productService.findDistinctCategories();
//    }
//
//    @ModelAttribute("brands")
//    public List<String> brands() {
//        return productService.findDistinctBrands();
//    }

    @GetMapping("/filter")
    public List<Product> filter(@RequestParam(required = false) String category,
                         @RequestParam(required = false) String brand,
                         Model model) {
        return productService.findByBrandAndOrCategory(brand, category);
    }



//    @ModelAttribute("products_1")
//    public List<Product_1> products_1() {
//        return productService_1.findAll();
//    }
//
//    @ModelAttribute("categories_1")
//    public List<String> categories_1() {
//        return productService_1.findDistinctCategories();
//    }
//
//    @ModelAttribute("brands_1")
//    public List<String> brands_1() {
//        return productService_1.findDistinctBrands();
//    }

//    @GetMapping("/filter_1")
//    public String filter_1(@RequestParam(required = false) String category,
//                         @RequestParam(required = false) String brand,
//                         Model model) {
////        List<Product_1> filtered = productService_1.findByBrandAndOrCategory(brand, category);
//        model.addAttribute("products_1", filtered); // Overrides the @ModelAttribute above.
//        return "starbucks";
//    }

//    @ModelAttribute("amelie")
//    public List<Amelie> amelie() { return amelieService.findAll(); }
//
//    @ModelAttribute("categories_2")
//    public List<Amelie> categories_2() {
//        return amelieService.findDistinctCategories(); }
//
//    @ModelAttribute("brands_2")
//    public List<Amelie> brands_2() {
//        return amelieService.findDistinctBrands();
//    }
//
//    @GetMapping("/filter_2")
//    public String filter_2(@RequestParam(required = false) String category,
//                         @RequestParam(required = false) String brand,
//                         Model model) {
//        List<Amelie> filtered = amelieService.findByBrandAndOrCategory(brand, category);
//        model.addAttribute("amelie", filtered); // Overrides the @ModelAttribute above.
//        return "amelie";
//    }


    @GetMapping("/about")
    public String about() {
        return "about";
    }
}


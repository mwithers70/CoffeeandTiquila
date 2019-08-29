package com.example.coffeeandtequila.Controller;

import com.example.coffeeandtequila.Model.Amelie;
import com.example.coffeeandtequila.Model.Product_1;
import com.example.coffeeandtequila.Service.AmelieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@CrossOrigin
public class AmelieController {
    @Autowired
    AmelieService amelieService;

    @GetMapping("/amelie/{id}")
    public String show(@PathVariable int id, Model model) {
        Amelie amelie = amelieService.findById(id);
        model.addAttribute(amelie);
        return "amelie";
    }

    @RequestMapping(value = "/amelie", method = {RequestMethod.POST, RequestMethod.PUT})
    public String createOrUpdate(@Valid Amelie amelie) {
        amelieService.save(amelie);
        return "redirect:/amelie/" + amelie.getId();
    }

    @GetMapping("/products2")
    public List<Amelie> getAllProducts() {
        return amelieService.findAll();
    }
}

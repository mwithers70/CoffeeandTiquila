package com.example.coffeeandtequila.Controller;

import com.example.coffeeandtequila.Model.Amelie;
import com.example.coffeeandtequila.Service.AmelieService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import javax.validation.Valid;

@Controller
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
}

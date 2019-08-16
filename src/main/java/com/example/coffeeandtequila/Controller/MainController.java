package com.example.coffeeandtequila.Controller;

import lombok.Data;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.GetMapping;

@Data
@Controller
@ControllerAdvice // This makes the `@ModelAttribute`s of this controller available to all controllers, for the navbar.
public class MainController {

    @GetMapping("/")
    public String main() {
        return "main";
    }

    @GetMapping("/maps")
    public String maps() {
        return "maps";
    }

    @GetMapping("/about")
    public String about() {
        return "about";
    }
}


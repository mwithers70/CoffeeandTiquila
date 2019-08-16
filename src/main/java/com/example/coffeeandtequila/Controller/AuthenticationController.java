package com.example.coffeeandtequila.Controller;

import com.example.coffeeandtequila.Model.User;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class AuthenticationController {
    @GetMapping(value="/")
    public String login() {
        return "signin";
    }

    @GetMapping("/signup")
    public String registration(Model model){
        User user = new User();
        model.addAttribute("user", user);
        return "registration";
    }
}

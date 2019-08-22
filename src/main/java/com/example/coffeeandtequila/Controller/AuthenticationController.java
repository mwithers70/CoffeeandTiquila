package com.example.coffeeandtequila.Controller;

import com.example.coffeeandtequila.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
class AuthenticationController {
    @Autowired
    private UserService userService;

    @GetMapping("/signin")
    public String login() {
        return "signin";
    }

}

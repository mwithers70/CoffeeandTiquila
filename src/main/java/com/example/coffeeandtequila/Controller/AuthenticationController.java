package com.example.coffeeandtequila.Controller;

import com.example.coffeeandtequila.Model.User;
import com.example.coffeeandtequila.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@Controller
public class AuthenticationController {

    @Autowired
    private UserService userService;

    @GetMapping(value = "/")
    public String login() {
        return "signin";
    }

    @PostMapping("/signin")
    public String signin (User user, HttpServletRequest request) {
        String password = user.getPassword();

        try {
            request.login(user.getUsername(), password);
        } catch(ServletException e) {
//            return "signin";
            return "redirect:/coffeeshops";
        }
        return "redirect:/coffeeshops";
    }



    @GetMapping("/signup")
    public String signup(Model model) {
        User user = new User();
        model.addAttribute("user", user);
        return "registration";
    }

    @PostMapping("/signup")
    public String createNewUser(@Valid User user, BindingResult bindingResult, Model model) {
        User userExists = userService.findByUsername(user.getUsername());
        if (userExists != null) {
            bindingResult.rejectValue("username", "error.user", "Username is already taken");
        }
        if (!bindingResult.hasErrors()) {
            userService.saveNew(user);
            model.addAttribute("success", "Sign up successful!");
            model.addAttribute("user", new User());
        }
        return "redirect:/";
    }
}


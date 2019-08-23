package com.example.coffeeandtequila.Controller;

import com.example.coffeeandtequila.Model.User;
import com.example.coffeeandtequila.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

@Controller
public class AuthenticationController {

    @Autowired
    private UserService userService;

//    first immediate page of application
    @GetMapping(value = "/")
    public String login() {
        return "signIn";
    }

//    the action of signing in
    @PostMapping("/signIn")
    public String signIn (User user, HttpServletRequest request) {
        String password = user.getPassword();

        try {
            request.login(user.getUsername(), password);
        } catch(ServletException e) {
            return "signIn";
//            return "redirect:/beginOrder";
        }
        return "redirect:/beginOrder";
    }

//    button to redirect to registration page
    @GetMapping("/signUp")
    public String signUp(Model model) {
        User user = new User();
        model.addAttribute("user", user);
        return "registration";
    }

//    attempt to register and if successful, redirect to signIn
    @PostMapping("/signUp")
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
        return "redirect:/signIn";
    }
}

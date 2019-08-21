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

//    @GetMapping(value = "/")
//    public String login() {
//        return "signin";
//    }
//
//    @GetMapping(value = "/menu")
//    public String menu(){
//        return "menu";
//    }
//
//    @GetMapping(value = "/signup")
//    public String signup(Model model) {
//        User user = new User();
//        model.addAttribute("user", user);
//        return "registration";
//    }
//
//    @PostMapping(value = "/signup")
//    public String createNewUser(@Valid User user, BindingResult bindingResult, Model model, HttpServletRequest request) throws ServletException {
//        User userExists = userService.findByUsername(user.getUsername());
//        String password = user.getPassword();
//        if (userExists != null) {
//            bindingResult.rejectValue("username", "error.user", "Username is already taken");
//            return "signup"; //won't redirect if username is taken
//        }
//        if (!bindingResult.hasErrors()) {
//            model.addAttribute("success", "Sign up successful!");
//            model.addAttribute("user", new User());
//            userService.saveNewUser(user);
//        }
//        request.login(user.getUsername(), password);
//        return "redirect:/signin";
//    }

    @GetMapping("/")
    public String login() {
        return "signin";
    }

    @PostMapping("/signin")
    public String signin (@Valid User user,
                          @RequestParam String submit,
                          HttpServletRequest request) throws ServletException {
        String password = user.getPassword();
        request.login(user.getUsername(), password);

    }

    @PostMapping("/signup")
    public String signup(@Valid User user,
                         @RequestParam String submit,
                         BindingResult bindingResult,
                         HttpServletRequest request) throws ServletException {
        String password = user.getPassword();
        if (submit.equals("up")) {
            if (userService.findByUsername(user.getUsername()) == null) {
                userService.saveNewUser(user);
            } else {
                bindingResult.rejectValue("username", "error.user", "Username is already taken.");
                return "signup";
            }
        }
        request.login(user.getUsername(), password);
        return "redirect:/menu";
    }
}

package com.example.coffeeandtequila.Controller;


import com.example.coffeeandtequila.Model.Order;
import com.example.coffeeandtequila.Service.OrderService;
import com.example.coffeeandtequila.Service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
@ControllerAdvice
public class OrderController {
    @Autowired
    private UserService userService;

    @Autowired
    private OrderService orderService;

    @GetMapping(value = {"/orders"})
    public String getFeed(Model model) {
        List<Order> orders = orderService.findAll();
        model.addAttribute("orderList", orders);
        return "orderSummary";
    }


}

package com.example.coffeeandtequila.Service;

import com.example.coffeeandtequila.Model.Order;
import com.example.coffeeandtequila.Model.User;
import com.example.coffeeandtequila.Repository.OrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class OrderService {

    @Autowired
    private OrderRepository orderRepository;

    public List<Order> findAll() {
        List<Order> orders = orderRepository.findAllByOrderByCreatedAtDesc();
        return orders;
    }

    public List<Order> findAllByUser(User user) {
        List<Order> orders = orderRepository.findAllByUserOrderByCreatedAtDesc(user);
        return orders;
    }

    public List<Order> findAllByUsers(List<User> users){
        List<Order> orders = orderRepository.findAllByUserInOrderByCreatedAtDesc(users);
        return orders;
    }

    public void save(Order order) {
        orderRepository.save(order);
    }
}

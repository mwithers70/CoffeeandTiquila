package com.example.coffeeandtequila.Repository;

import com.example.coffeeandtequila.Model.Order;
import com.example.coffeeandtequila.Model.User;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public interface OrderRepository extends CrudRepository<Order, Long> {
    List<Order> findAllByOrderByCreatedAtDesc();
    List<Order> findAllByUserOrderByCreatedAtDesc(User user);
    List<Order> findAllByUserInOrderByCreatedAtDesc(List<User> users);
}

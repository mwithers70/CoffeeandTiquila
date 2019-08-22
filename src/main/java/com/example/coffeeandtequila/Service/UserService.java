package com.example.coffeeandtequila.Service;


import com.example.coffeeandtequila.Model.Role;
import com.example.coffeeandtequila.Model.User;
import com.example.coffeeandtequila.Repository.RoleRepository;
import com.example.coffeeandtequila.Repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Map;

@Service
//implements UserDetailsService
public class UserService implements UserDetailsService {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private RoleRepository roleRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;


    @Autowired
    public UserService(UserRepository userRepository,
                       RoleRepository roleRepository,
                       BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }


public User findByUsername(String username) {
        return userRepository.findByUsername(username);
    }

    public List<User> findAll(){
        return (List<User>) userRepository.findAll();
    }

    public void saveNew(User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
         user.setActive(1);
        Role userRole = roleRepository.findByRole("USER");
        user.setRoles(new HashSet<Role>(Arrays.asList(userRole)));
        userRepository.save(user);
    }

    public void saveExisting(User user) {
        userRepository.save(user);
    }

    public User getLoggedInUser() {
        String loggedInUsername = SecurityContextHolder.
                getContext().getAuthentication().getName();

        return findByUsername(loggedInUsername);
    }

//    public void updateCart(Map<Product, Integer> cart) {
//        User user = getLoggedInUser();
//        user.setCart(cart);
//        saveExisting(user);
//    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = findByUsername(username);
        if (user == null) throw new UsernameNotFoundException("Username not found.");
        return user;
    }
}


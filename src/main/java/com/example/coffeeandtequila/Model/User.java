package com.example.coffeeandtequila.Model;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.validator.constraints.Length;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Pattern;
import java.util.*;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class User implements UserDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "user_id")
    private Long id;
    private int active;

    @CreationTimestamp
    private Date createdAt;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "user_role", joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private Set<Role> roles;

    @Length(min = 3, message = "Your username must have at least 3 characters")
    @Length(max = 15, message = "Your username cannot have more than 15 characters")
    @Pattern(regexp="[^\\s]+", message="Your username cannot contain spaces")
    private String username;

    @Length(min = 5, message = "Your password must have at least 5 characters")
    private String password;

    @NotEmpty(message = "Please provide your first name & Last Initial")
    private String firstName;

    @NotEmpty(message = "Please Choose or create your team")
    private String team;


    @ElementCollection
    Map<Product, Integer> cart = new HashMap<>();

    // UserDetails requires these, they are technically getters (is-ers?) overridden by Lombok.
    // @Transient Makes it so these aren't persisted in the database, as they are hard coded.
    @Transient
    private boolean accountNonExpired = true;
    @Transient
    private boolean accountNonLocked = true;
    @Transient
    private boolean credentialsNonExpired = true;
    @Transient
    private boolean enabled = true;
    @Transient
    private Collection<GrantedAuthority> authorities = null;
}


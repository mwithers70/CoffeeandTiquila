package com.example.coffeeandtequila.Repository;

import com.example.coffeeandtequila.Model.Product;
import com.example.coffeeandtequila.Model.Product_1;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository_1 extends CrudRepository<Product_1, Long> {
    List<Product_1> findAll();
    Product_1 findById(long id);
    List<Product_1> findByBrand(String brand);
    List<Product_1> findByCategory(String category);
    List<Product_1> findByBrandAndCategory(String brand, String category);

    @Query("SELECT DISTINCT p.brand FROM Product_1 p")
    List<String> findDistinctBrands();

    @Query("SELECT DISTINCT p.category FROM Product_1 p")
    List<String> findDistinctCategories();
}
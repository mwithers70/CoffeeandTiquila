package com.example.coffeeandtequila.Repository;

import com.example.coffeeandtequila.Model.Amelie;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AmelieRepository extends CrudRepository<Amelie, Long> {
    List<Amelie> findAll();
    Amelie findById(long id);
    List<Amelie> findByBrand(String brand);
    List<Amelie> findByCategory(String category);
    List<Amelie> findByBrandAndCategory(String brand, String category);

    @Query("SELECT DISTINCT p.brand FROM Amelie p")
    List<Amelie> findDistinctBrands();

    @Query("SELECT DISTINCT p.category FROM Amelie p")
    List<Amelie> findDistinctCategories();
}
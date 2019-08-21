package com.example.coffeeandtequila.Service;

import com.example.coffeeandtequila.Model.Product_1;
import com.example.coffeeandtequila.Repository.ProductRepository_1;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProductService_1 {
    @Autowired
    private ProductRepository_1 productRepository_1;

    public List<Product_1> findAll() {
        return productRepository_1.findAll();
    }

    public Product_1 findById(long id) {
        return productRepository_1.findById(id);
    }

    public List<String> findDistinctBrands() {
        return productRepository_1.findDistinctBrands();
    }

    public List<String> findDistinctCategories() {
        return productRepository_1.findDistinctCategories();
    }

    public void save(Product_1 product_1) {
        productRepository_1.save(product_1);
    }

    public void deleteById(long id) {
        productRepository_1.deleteById(id);
    }

    public List<Product_1> findByBrandAndOrCategory(String brand, String category) {
        if(category == null && brand == null)
            return productRepository_1.findAll();
        else if(category == null)
            return productRepository_1.findByBrand(brand);
        else if(brand == null)
            return  productRepository_1.findByCategory(category);
        else
            return productRepository_1.findByBrandAndCategory(brand, category);
    }
}
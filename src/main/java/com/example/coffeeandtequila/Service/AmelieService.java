package com.example.coffeeandtequila.Service;

import com.example.coffeeandtequila.Model.Amelie;
import com.example.coffeeandtequila.Repository.AmelieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AmelieService {
    @Autowired
    private AmelieRepository amelieRepository;

    public List<Amelie> findAll() {
        return amelieRepository.findAll();
    }

    public Amelie findById(long id) {
        return amelieRepository.findById(id);
    }

    public List<Amelie> findDistinctBrands() { return amelieRepository.findDistinctBrands(); }

    public List<Amelie> findDistinctCategories() {
        return amelieRepository.findDistinctCategories();
    }

    public void save(Amelie amelie) { amelieRepository.save(amelie); }

    public void deleteById(long id) {
        amelieRepository.deleteById(id);
    }

    public List<Amelie> findByBrandAndOrCategory(String brand, String category) {
        if(category == null && brand == null)
            return amelieRepository.findAll();
        else if(category == null)
            return amelieRepository.findByBrand(brand);
        else if(brand == null)
            return  amelieRepository.findByCategory(category);
        else
            return amelieRepository.findByBrandAndCategory(brand, category);
    }
}
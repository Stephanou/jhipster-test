package com.mycompany.myapp.domain;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import org.hibernate.annotations.Cache;
import org.hibernate.annotations.CacheConcurrencyStrategy;

import javax.persistence.*;
import javax.validation.constraints.*;

import java.io.Serializable;
import java.time.LocalDate;

/**
 * A Product.
 */
@Entity
@Table(name = "product")
@Cache(usage = CacheConcurrencyStrategy.READ_WRITE)
public class Product implements Serializable {

    private static final long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotNull
    @Column(name = "title", nullable = false)
    private String title;

    @Column(name = "keywords")
    private String keywords;

    @Column(name = "description")
    private String description;

    @Column(name = "rating")
    private Integer rating;

    @Column(name = "date_added")
    private LocalDate dateAdded;

    @Column(name = "date_modified")
    private LocalDate dateModified;

    @ManyToOne
    @JsonIgnoreProperties(value = "products", allowSetters = true)
    private WishList wishList;

    @ManyToOne
    @JsonIgnoreProperties(value = "products", allowSetters = true)
    private SubCategory subcategory;

    // jhipster-needle-entity-add-field - JHipster will add fields here
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public Product title(String title) {
        this.title = title;
        return this;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getKeywords() {
        return keywords;
    }

    public Product keywords(String keywords) {
        this.keywords = keywords;
        return this;
    }

    public void setKeywords(String keywords) {
        this.keywords = keywords;
    }

    public String getDescription() {
        return description;
    }

    public Product description(String description) {
        this.description = description;
        return this;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getRating() {
        return rating;
    }

    public Product rating(Integer rating) {
        this.rating = rating;
        return this;
    }

    public void setRating(Integer rating) {
        this.rating = rating;
    }

    public LocalDate getDateAdded() {
        return dateAdded;
    }

    public Product dateAdded(LocalDate dateAdded) {
        this.dateAdded = dateAdded;
        return this;
    }

    public void setDateAdded(LocalDate dateAdded) {
        this.dateAdded = dateAdded;
    }

    public LocalDate getDateModified() {
        return dateModified;
    }

    public Product dateModified(LocalDate dateModified) {
        this.dateModified = dateModified;
        return this;
    }

    public void setDateModified(LocalDate dateModified) {
        this.dateModified = dateModified;
    }

    public WishList getWishList() {
        return wishList;
    }

    public Product wishList(WishList wishList) {
        this.wishList = wishList;
        return this;
    }

    public void setWishList(WishList wishList) {
        this.wishList = wishList;
    }

    public SubCategory getSubcategory() {
        return subcategory;
    }

    public Product subcategory(SubCategory subCategory) {
        this.subcategory = subCategory;
        return this;
    }

    public void setSubcategory(SubCategory subCategory) {
        this.subcategory = subCategory;
    }
    // jhipster-needle-entity-add-getters-setters - JHipster will add getters and setters here

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (!(o instanceof Product)) {
            return false;
        }
        return id != null && id.equals(((Product) o).id);
    }

    @Override
    public int hashCode() {
        return 31;
    }

    // prettier-ignore
    @Override
    public String toString() {
        return "Product{" +
            "id=" + getId() +
            ", title='" + getTitle() + "'" +
            ", keywords='" + getKeywords() + "'" +
            ", description='" + getDescription() + "'" +
            ", rating=" + getRating() +
            ", dateAdded='" + getDateAdded() + "'" +
            ", dateModified='" + getDateModified() + "'" +
            "}";
    }
}

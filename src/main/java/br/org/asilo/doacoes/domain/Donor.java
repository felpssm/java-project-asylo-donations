package br.org.asilo.doacoes.domain;

import jakarta.persistence.*;
import java.time.Instant;

@Entity
@Table(name = "donor")
public class Donor {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, length = 10)
    private String type; // PF|PJ

    @Column(nullable = false)
    private String name;

    @Column(unique = true, length = 20)
    private String document; // CPF/CNPJ

    private String email;
    private String phone;
    private String address;

    @Column(name="created_at", nullable=false, updatable=false)
    private Instant createdAt = Instant.now();

    @Column(name="updated_at")
    private Instant updatedAt;

    @PreUpdate
    public void preUpdate(){ this.updatedAt = Instant.now(); }

    // getters and setters
    public Long getId(){ return id; }
    public void setId(Long id){ this.id = id; }
    public String getType(){ return type; }
    public void setType(String type){ this.type = type; }
    public String getName(){ return name; }
    public void setName(String name){ this.name = name; }
    public String getDocument(){ return document; }
    public void setDocument(String document){ this.document = document; }
    public String getEmail(){ return email; }
    public void setEmail(String email){ this.email = email; }
    public String getPhone(){ return phone; }
    public void setPhone(String phone){ this.phone = phone; }
    public String getAddress(){ return address; }
    public void setAddress(String address){ this.address = address; }
    public Instant getCreatedAt(){ return createdAt; }
    public Instant getUpdatedAt(){ return updatedAt; }
}

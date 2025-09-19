package br.org.asilo.doacoes.domain;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDate;
import br.org.asilo.doacoes.domain.enums.DonationType;

@Entity
@Table(name = "donation")
public class Donation {
    @Id @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "donor_id")
    private Donor donor;

    @Enumerated(EnumType.STRING)
    @Column(name="donation_type", nullable=false)
    private DonationType type;

    private BigDecimal amount; // for MONEY

    private String itemDescription; // for ITEM
    private BigDecimal itemQuantity;
    private String unit;
    
    private String observations;

    private LocalDate donationDate = LocalDate.now();

    // getters and setters
    public Long getId(){ return id; }
    public void setId(Long id){ this.id = id; }
    public Donor getDonor(){ return donor; }
    public void setDonor(Donor donor){ this.donor = donor; }
    public DonationType getType(){ return type; }
    public void setType(DonationType type){ this.type = type; }
    public BigDecimal getAmount(){ return amount; }
    public void setAmount(BigDecimal amount){ this.amount = amount; }
    public String getItemDescription(){ return itemDescription; }
    public void setItemDescription(String itemDescription){ this.itemDescription = itemDescription; }
    public BigDecimal getItemQuantity(){ return itemQuantity; }
    public void setItemQuantity(BigDecimal itemQuantity){ this.itemQuantity = itemQuantity; }
    public String getUnit(){ return unit; }
    public void setUnit(String unit){ this.unit = unit; }
    public String getObservations(){ return observations; }
    public void setObservations(String observations){ this.observations = observations; }
    public LocalDate getDonationDate(){ return donationDate; }
    public void setDonationDate(LocalDate donationDate){ this.donationDate = donationDate; }
}

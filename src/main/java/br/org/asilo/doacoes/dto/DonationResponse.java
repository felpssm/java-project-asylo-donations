package br.org.asilo.doacoes.dto;

import java.math.BigDecimal;
import java.time.LocalDate;
import br.org.asilo.doacoes.domain.enums.DonationType;

public record DonationResponse(
    Long id,
    Long donorId,
    String donorName,
    DonationType type,
    BigDecimal amount,
    String itemDescription,
    BigDecimal itemQuantity,
    String unit,
    String observations,
    LocalDate donationDate
) {}

package br.org.asilo.doacoes.dto;

import java.math.BigDecimal;
import java.time.LocalDate;
import jakarta.validation.constraints.*;
import br.org.asilo.doacoes.domain.enums.DonationType;

public record DonationRequest(
    @NotNull Long donorId,
    @NotNull DonationType type,
    @PositiveOrZero BigDecimal amount,
    String itemDescription,
    @PositiveOrZero BigDecimal itemQuantity,
    String unit,
    String observations,
    @NotNull LocalDate donationDate
) {}

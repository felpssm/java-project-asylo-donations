package br.org.asilo.doacoes.dto;

import jakarta.validation.constraints.*;

public record DonorRequest(
    @NotBlank String type,
    @NotBlank String name,
    String document,
    @Email String email,
    @NotBlank String phone,
    String address
) {}

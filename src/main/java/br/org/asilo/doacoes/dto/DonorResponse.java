package br.org.asilo.doacoes.dto;
import java.time.Instant;

public record DonorResponse(Long id, String type, String name, String document, String email, String phone, String address, Instant registrationDate) {}

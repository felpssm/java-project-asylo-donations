package br.org.asilo.doacoes.mapper;

import br.org.asilo.doacoes.domain.Donor;
import br.org.asilo.doacoes.dto.DonorRequest;
import br.org.asilo.doacoes.dto.DonorResponse;

public class Mappers {
    public static Donor toEntity(DonorRequest dto) {
        Donor d = new Donor();
        d.setType(dto.type());
        d.setName(dto.name());
        d.setDocument(dto.document());
        d.setEmail(dto.email());
        d.setPhone(dto.phone());
        d.setAddress(dto.address());
        return d;
    }

    public static DonorResponse toDto(Donor d) {
        return new DonorResponse(d.getId(), d.getType(), d.getName(), d.getDocument(), d.getEmail(), d.getPhone(), d.getAddress(), d.getCreatedAt());
    }
}

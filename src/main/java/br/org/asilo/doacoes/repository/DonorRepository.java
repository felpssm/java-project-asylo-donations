package br.org.asilo.doacoes.repository;

import br.org.asilo.doacoes.domain.Donor;
import org.springframework.data.jpa.repository.JpaRepository;

public interface DonorRepository extends JpaRepository<Donor, Long> {
}

package br.org.asilo.doacoes.repository;

import br.org.asilo.doacoes.domain.Donation;
import br.org.asilo.doacoes.domain.Donor;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface DonationRepository extends JpaRepository<Donation, Long> {
    List<Donation> findByDonor(Donor donor);
    void deleteByDonor(Donor donor);
}

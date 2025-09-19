package br.org.asilo.doacoes.service;

import br.org.asilo.doacoes.domain.Donation;
import br.org.asilo.doacoes.domain.Donor;
import br.org.asilo.doacoes.dto.DonationRequest;
import br.org.asilo.doacoes.dto.DonationResponse;
import br.org.asilo.doacoes.repository.DonationRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class DonationService {
    private final DonationRepository repo;
    private final DonorService donorService;

    public DonationService(DonationRepository repo, DonorService donorService){
        this.repo = repo; this.donorService = donorService;
    }

    @Transactional
    public DonationResponse create(DonationRequest req){
        Donor donor = donorService.getEntity(req.donorId());
        Donation d = new Donation();
        d.setDonor(donor);
        d.setType(req.type());
        d.setAmount(req.amount());
        d.setItemDescription(req.itemDescription());
        d.setItemQuantity(req.itemQuantity());
        d.setUnit(req.unit());
        d.setObservations(req.observations());
        d.setDonationDate(req.donationDate());
        d = repo.save(d);
        return new DonationResponse(d.getId(), donor.getId(), donor.getName(), d.getType(), d.getAmount(), d.getItemDescription(), d.getItemQuantity(), d.getUnit(), d.getObservations(), d.getDonationDate());
    }

    public Page<DonationResponse> list(Pageable pageable){
        return repo.findAll(pageable).map(d -> new DonationResponse(d.getId(), d.getDonor().getId(), d.getDonor().getName(), d.getType(), d.getAmount(), d.getItemDescription(), d.getItemQuantity(), d.getUnit(), d.getObservations(), d.getDonationDate()));
    }

    @Transactional
    public void delete(Long id){
        if (!repo.existsById(id)) {
            throw new IllegalArgumentException("Doação não encontrada com ID: " + id);
        }
        repo.deleteById(id);
    }
}

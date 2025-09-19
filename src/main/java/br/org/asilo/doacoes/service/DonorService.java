package br.org.asilo.doacoes.service;

import br.org.asilo.doacoes.domain.Donor;
import br.org.asilo.doacoes.dto.*;
import br.org.asilo.doacoes.mapper.Mappers;
import br.org.asilo.doacoes.repository.DonorRepository;
import br.org.asilo.doacoes.repository.DonationRepository;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
public class DonorService {
    private final DonorRepository repo;
    private final DonationRepository donationRepo;
    
    public DonorService(DonorRepository repo, DonationRepository donationRepo){ 
        this.repo = repo; 
        this.donationRepo = donationRepo;
    }

    @Transactional
    public DonorResponse create(DonorRequest req){
        Donor d = Mappers.toEntity(req);
        d = repo.save(d);
        return Mappers.toDto(d);
    }

    public Page<DonorResponse> list(Pageable pageable){
        return repo.findAll(pageable).map(Mappers::toDto);
    }

    public Donor getEntity(Long id){
        return repo.findById(id).orElseThrow(() -> new IllegalArgumentException("Donor not found"));
    }

    @Transactional
    public void delete(Long id){
        if (!repo.existsById(id)) {
            throw new IllegalArgumentException("Doador não encontrado com ID: " + id);
        }
        
        // Buscar o doador
        Donor donor = repo.findById(id).get();
        
        // Excluir todas as doações associadas primeiro
        donationRepo.deleteByDonor(donor);
        
        // Depois excluir o doador
        repo.deleteById(id);
    }
}

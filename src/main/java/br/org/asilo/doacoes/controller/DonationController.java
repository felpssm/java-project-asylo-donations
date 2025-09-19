package br.org.asilo.doacoes.controller;

import br.org.asilo.doacoes.dto.DonationRequest;
import br.org.asilo.doacoes.dto.DonationResponse;
import br.org.asilo.doacoes.service.DonationService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/donations")
public class DonationController {
    private final DonationService service;
    public DonationController(DonationService service){ this.service = service; }

    @PostMapping
    public ResponseEntity<DonationResponse> create(@Valid @RequestBody DonationRequest req){
        DonationResponse resp = service.create(req);
        return ResponseEntity.status(201).body(resp);
    }

    @GetMapping
    public Page<DonationResponse> list(Pageable pageable){
        return service.list(pageable);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}

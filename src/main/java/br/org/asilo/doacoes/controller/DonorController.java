package br.org.asilo.doacoes.controller;

import br.org.asilo.doacoes.dto.*;
import br.org.asilo.doacoes.service.DonorService;
import jakarta.validation.Valid;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/v1/donors")
public class DonorController {
    private final DonorService service;
    public DonorController(DonorService service){ this.service = service; }

    @PostMapping
    public ResponseEntity<DonorResponse> create(@Valid @RequestBody DonorRequest req){
        DonorResponse resp = service.create(req);
        return ResponseEntity.status(201).body(resp);
    }

    @GetMapping
    public Page<DonorResponse> list(Pageable pageable){
        return service.list(pageable);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable("id") Long id){
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}

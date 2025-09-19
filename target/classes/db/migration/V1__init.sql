-- V1__init.sql
CREATE TABLE donor (
    id BIGSERIAL PRIMARY KEY,
    type VARCHAR(10) NOT NULL,
    name VARCHAR(255) NOT NULL,
    document VARCHAR(20) UNIQUE,
    email VARCHAR(255),
    phone VARCHAR(50),
    created_at TIMESTAMP NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMP
);

CREATE TABLE donation (
    id BIGSERIAL PRIMARY KEY,
    donor_id BIGINT NOT NULL REFERENCES donor(id),
    donation_type VARCHAR(10) NOT NULL,
    amount NUMERIC(15,2),
    item_description VARCHAR(255),
    item_quantity NUMERIC(15,2),
    unit VARCHAR(20),
    donation_date DATE NOT NULL
);

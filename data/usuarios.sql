-- Generated by the database client, not guaranteed complete.
CREATE TABLE usuarios(
    "id" SERIAL NOT NULL,
    "nombre" character varying(50),
    "balance" double precision,
    PRIMARY KEY(id),
    CONSTRAINT usuarios_balance_check CHECK ((balance >= (0)::double precision))
);
-- SEQUENCE: public.lerna_user__id_seq

-- DROP SEQUENCE public.lerna_user__id_seq;

CREATE SEQUENCE public.lerna_user__id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE public.lerna_user__id_seq
    OWNER TO lerna;

-- Table: public.lerna_user

-- DROP TABLE public.lerna_user;

CREATE TABLE public.lerna_user
(
    _id integer NOT NULL DEFAULT nextval('lerna_user__id_seq'::regclass),
    user_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    last_logged_in timestamp without time zone,
    CONSTRAINT lerna_user_pkey PRIMARY KEY (_id)
)

TABLESPACE pg_default;

ALTER TABLE public.lerna_user
    OWNER to lerna;
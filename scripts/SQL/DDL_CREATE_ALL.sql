-- Role: lerna
-- DROP ROLE lerna;

CREATE ROLE lerna WITH
  LOGIN
  NOSUPERUSER
  INHERIT
  NOCREATEDB
  NOCREATEROLE
  NOREPLICATION;
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
	
-- SEQUENCE: public.study_journal__id_seq

-- DROP SEQUENCE public.study_journal__id_seq;

CREATE SEQUENCE public.study_journal__id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE public.study_journal__id_seq
    OWNER TO lerna;

-- Table: public.study_journal

-- DROP TABLE public.study_journal;

CREATE TABLE public.study_journal
(
    _id integer NOT NULL DEFAULT nextval('study_journal__id_seq'::regclass),
    user_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    date timestamp without time zone,
    subject character varying(200) COLLATE pg_catalog."default",
    duration integer,
    CONSTRAINT study_journal_pkey PRIMARY KEY (_id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.study_journal
    OWNER to lerna;
	
-- SEQUENCE: public.messages__id_seq

-- DROP SEQUENCE public.messages__id_seq;

CREATE SEQUENCE public.messages__id_seq
    INCREMENT 1
    START 1
    MINVALUE 1
    MAXVALUE 2147483647
    CACHE 1;

ALTER SEQUENCE public.messages__id_seq
    OWNER TO lerna;

-- Table: public.messages

-- DROP TABLE public.messages;

CREATE TABLE public.messages
(
    _id integer NOT NULL DEFAULT nextval('messages__id_seq'::regclass),
    user_name character varying(100) COLLATE pg_catalog."default" NOT NULL,
    date timestamp without time zone NOT NULL,
    text character varying(1000) COLLATE pg_catalog."default" NOT NULL,
    is_read boolean NOT NULL DEFAULT FALSE,
    CONSTRAINT messages_pkey PRIMARY KEY (_id)
)

TABLESPACE pg_default;

ALTER TABLE public.messages
    OWNER to lerna;
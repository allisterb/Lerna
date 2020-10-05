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
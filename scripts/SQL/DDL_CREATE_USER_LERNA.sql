-- Role: lerna
-- DROP ROLE lerna;

CREATE ROLE lerna WITH
  NOLOGIN
  NOSUPERUSER
  INHERIT
  NOCREATEDB
  NOCREATEROLE
  NOREPLICATION;
--
-- PostgreSQL database dump
--

-- Dumped from database version 14.1
-- Dumped by pg_dump version 14.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: club; Type: TABLE; Schema: public; Owner: f_read_only
--

CREATE TABLE public.club (
    clubid integer NOT NULL,
    clubname character varying(255) NOT NULL
);


ALTER TABLE public.club OWNER TO f_read_only;

--
-- Name: club_clubid_seq; Type: SEQUENCE; Schema: public; Owner: f_read_only
--

CREATE SEQUENCE public.club_clubid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.club_clubid_seq OWNER TO f_read_only;

--
-- Name: club_clubid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: f_read_only
--

ALTER SEQUENCE public.club_clubid_seq OWNED BY public.club.clubid;


--
-- Name: club_trainingsplatz; Type: VIEW; Schema: public; Owner: f_read_only
--

CREATE VIEW public.club_trainingsplatz AS
 SELECT club.clubname
   FROM public.club
  WHERE ((club.clubname)::text = 'Fc Jaber'::text)
  WITH CASCADED CHECK OPTION;


ALTER TABLE public.club_trainingsplatz OWNER TO f_read_only;

--
-- Name: fussballclubinhaber; Type: TABLE; Schema: public; Owner: f_read_only
--

CREATE TABLE public.fussballclubinhaber (
    versicherungsnummer integer NOT NULL,
    vorname character varying(255) NOT NULL,
    nachname character varying(255) NOT NULL
);


ALTER TABLE public.fussballclubinhaber OWNER TO f_read_only;

--
-- Name: fussballclubinhaber_versicherungsnummer_seq; Type: SEQUENCE; Schema: public; Owner: f_read_only
--

CREATE SEQUENCE public.fussballclubinhaber_versicherungsnummer_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.fussballclubinhaber_versicherungsnummer_seq OWNER TO f_read_only;

--
-- Name: fussballclubinhaber_versicherungsnummer_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: f_read_only
--

ALTER SEQUENCE public.fussballclubinhaber_versicherungsnummer_seq OWNED BY public.fussballclubinhaber.versicherungsnummer;


--
-- Name: medizinpersonal; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.medizinpersonal (
    mitarbeiterid integer NOT NULL,
    nachname character varying(255) NOT NULL,
    abteilung character varying(255) NOT NULL
);


ALTER TABLE public.medizinpersonal OWNER TO postgres;

--
-- Name: medizinpersonal_mitarbeiterid_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.medizinpersonal_mitarbeiterid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.medizinpersonal_mitarbeiterid_seq OWNER TO postgres;

--
-- Name: medizinpersonal_mitarbeiterid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.medizinpersonal_mitarbeiterid_seq OWNED BY public.medizinpersonal.mitarbeiterid;


--
-- Name: spieler; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.spieler (
    spielerpassid integer NOT NULL,
    vorname character varying(255) NOT NULL,
    nachname character varying(255) NOT NULL,
    trikotnummer integer NOT NULL,
    CONSTRAINT spieler_trikotnummer_check CHECK ((trikotnummer > 0))
);


ALTER TABLE public.spieler OWNER TO postgres;

--
-- Name: spieler_id; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.spieler_id
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.spieler_id OWNER TO postgres;

--
-- Name: spieler_id; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.spieler_id OWNED BY public.spieler.spielerpassid;


--
-- Name: trainer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.trainer (
    trainerid integer NOT NULL,
    vorname character varying(255) NOT NULL,
    nachname character varying(255) NOT NULL,
    trainerrolle character varying(255) NOT NULL
);


ALTER TABLE public.trainer OWNER TO postgres;

--
-- Name: trainer_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE public.trainer_id_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.trainer_id_seq OWNER TO postgres;

--
-- Name: trainer_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE public.trainer_id_seq OWNED BY public.trainer.trainerid;


--
-- Name: trainingsplatz; Type: TABLE; Schema: public; Owner: f_read_only
--

CREATE TABLE public.trainingsplatz (
    trainingsplatzid integer NOT NULL,
    rasenart character varying(255) NOT NULL,
    addresse character varying(255) NOT NULL
);


ALTER TABLE public.trainingsplatz OWNER TO f_read_only;

--
-- Name: trainingsplatz_trainingsplatzid_seq; Type: SEQUENCE; Schema: public; Owner: f_read_only
--

CREATE SEQUENCE public.trainingsplatz_trainingsplatzid_seq
    AS integer
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE public.trainingsplatz_trainingsplatzid_seq OWNER TO f_read_only;

--
-- Name: trainingsplatz_trainingsplatzid_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: f_read_only
--

ALTER SEQUENCE public.trainingsplatz_trainingsplatzid_seq OWNED BY public.trainingsplatz.trainingsplatzid;


--
-- Name: club clubid; Type: DEFAULT; Schema: public; Owner: f_read_only
--

ALTER TABLE ONLY public.club ALTER COLUMN clubid SET DEFAULT nextval('public.club_clubid_seq'::regclass);


--
-- Name: fussballclubinhaber versicherungsnummer; Type: DEFAULT; Schema: public; Owner: f_read_only
--

ALTER TABLE ONLY public.fussballclubinhaber ALTER COLUMN versicherungsnummer SET DEFAULT nextval('public.fussballclubinhaber_versicherungsnummer_seq'::regclass);


--
-- Name: medizinpersonal mitarbeiterid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.medizinpersonal ALTER COLUMN mitarbeiterid SET DEFAULT nextval('public.medizinpersonal_mitarbeiterid_seq'::regclass);


--
-- Name: spieler spielerpassid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.spieler ALTER COLUMN spielerpassid SET DEFAULT nextval('public.spieler_id'::regclass);


--
-- Name: trainer trainerid; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.trainer ALTER COLUMN trainerid SET DEFAULT nextval('public.trainer_id_seq'::regclass);


--
-- Name: trainingsplatz trainingsplatzid; Type: DEFAULT; Schema: public; Owner: f_read_only
--

ALTER TABLE ONLY public.trainingsplatz ALTER COLUMN trainingsplatzid SET DEFAULT nextval('public.trainingsplatz_trainingsplatzid_seq'::regclass);


--
-- Data for Name: club; Type: TABLE DATA; Schema: public; Owner: f_read_only
--

COPY public.club (clubid, clubname) FROM stdin;
1	Fc Jaber
\.


--
-- Data for Name: fussballclubinhaber; Type: TABLE DATA; Schema: public; Owner: f_read_only
--

COPY public.fussballclubinhaber (versicherungsnummer, vorname, nachname) FROM stdin;
4555	Dani	Jaber
\.


--
-- Data for Name: medizinpersonal; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.medizinpersonal (mitarbeiterid, nachname, abteilung) FROM stdin;
2	Testen	Allgemeinmedizin
1	Schueltes	fitness
3	Elvin	Allgemeinmedizin
4	McMenamie	Allgemeinmedizin
5	Mahaffey	Allgemeinmedizin
6	Ellings	Massage
7	Hefner	Massage
8	Temperley	Massage
9	Temperley	OP
10	Yardy	OP
11	Kelland	OP
\.


--
-- Data for Name: spieler; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.spieler (spielerpassid, vorname, nachname, trikotnummer) FROM stdin;
1	Tabbatha	Leindecker	13
3	Ilyse\t	Remmer	7
4	Kizzee	Firth	9
5	Gareth	Thrasher	6
6	Don	Wynch	3
7	Godwin	MacMakin	4
8	Julia	Hollier	10
9	Britta	Trownson	14
10	Lexy	Redmond	22
11	Nesta	Borwick	11
12	Nichol	Beere	13
13	Claiborn	Pavey	2
14	Fabe	Boon	47
15	Chrystal	Franz	44
\.


--
-- Data for Name: trainer; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.trainer (trainerid, vorname, nachname, trainerrolle) FROM stdin;
1	Lalo	Annett	Masseur
2	Luce	Rayner	Cheftrainer
4	Ancell	McKerron	Fitnesstrainer
3	Leonore	Mayer	Fitnesstrainer
5	Elbertina	Ballantyne	Assistenttrainer
6	Flynn	Fills	Assistenttrainer
7	Archibaldo	Juckes	Assistenttrainer
8	Chicky	Fayers	Leichtathletiktrainer
9	Aldrich	Mahaffey	Leichtathletiktrainer
10	Chrysler	Thouless	Leichtathletiktrainer
11	Spence	Kinnin	Ausdauertrainer
12	Ottilie	Kares	Ausdauertrainer
13	Sheilakathryn	Waddoups	Ausdauertrainer
\.


--
-- Data for Name: trainingsplatz; Type: TABLE DATA; Schema: public; Owner: f_read_only
--

COPY public.trainingsplatz (trainingsplatzid, rasenart, addresse) FROM stdin;
1160	Kunstrasen	Jabergasse 7
\.


--
-- Name: club_clubid_seq; Type: SEQUENCE SET; Schema: public; Owner: f_read_only
--

SELECT pg_catalog.setval('public.club_clubid_seq', 1, true);


--
-- Name: fussballclubinhaber_versicherungsnummer_seq; Type: SEQUENCE SET; Schema: public; Owner: f_read_only
--

SELECT pg_catalog.setval('public.fussballclubinhaber_versicherungsnummer_seq', 1, false);


--
-- Name: medizinpersonal_mitarbeiterid_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.medizinpersonal_mitarbeiterid_seq', 11, true);


--
-- Name: spieler_id; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.spieler_id', 15, true);


--
-- Name: trainer_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('public.trainer_id_seq', 13, true);


--
-- Name: trainingsplatz_trainingsplatzid_seq; Type: SEQUENCE SET; Schema: public; Owner: f_read_only
--

SELECT pg_catalog.setval('public.trainingsplatz_trainingsplatzid_seq', 1, false);


--
-- Name: club club_pkey; Type: CONSTRAINT; Schema: public; Owner: f_read_only
--

ALTER TABLE ONLY public.club
    ADD CONSTRAINT club_pkey PRIMARY KEY (clubid);


--
-- Name: fussballclubinhaber fussballclubinhaber_pkey; Type: CONSTRAINT; Schema: public; Owner: f_read_only
--

ALTER TABLE ONLY public.fussballclubinhaber
    ADD CONSTRAINT fussballclubinhaber_pkey PRIMARY KEY (versicherungsnummer);


--
-- Name: trainingsplatz trainingsplatz_pkey; Type: CONSTRAINT; Schema: public; Owner: f_read_only
--

ALTER TABLE ONLY public.trainingsplatz
    ADD CONSTRAINT trainingsplatz_pkey PRIMARY KEY (trainingsplatzid);


--
-- Name: SCHEMA public; Type: ACL; Schema: -; Owner: d_admin
--

REVOKE ALL ON SCHEMA public FROM postgres;
REVOKE ALL ON SCHEMA public FROM PUBLIC;
GRANT ALL ON SCHEMA public TO d_admin;
GRANT ALL ON SCHEMA public TO PUBLIC;
GRANT USAGE ON SCHEMA public TO f_read_only;


--
-- PostgreSQL database dump complete
--


import React, { useState, useEffect } from 'react';
import { Star, BarChart2, Coins, Landmark, TrendingUp, RefreshCcw, ArrowDown } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('radici');

  // Smooth scroll logic for tabs
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 font-serif selection:bg-[#FFCC00] selection:text-[#003399]">
      
      {/* HEADER & HERO */}
      <header className="bg-[#003399] text-white pt-20 pb-16 px-4 text-center shadow-lg">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center gap-1.5 mb-8">
            {[...Array(12)].map((_, i) => (
              <Star key={i} className="w-7 h-7 text-[#FFCC00] fill-[#FFCC00]" />
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">L'Unione Europea</h1>
          <h2 className="text-2xl md:text-3xl font-medium mb-6 text-blue-100">Dalle macerie della guerra alla casa comune</h2>
          <p className="text-[#FFCC00] italic text-xl">Un percorso storico · 1941 – oggi</p>
        </div>
      </header>

      {/* STICKY NAVIGATION */}
      <div className="sticky top-0 z-50 bg-[#003399]/95 backdrop-blur-md border-b-4 border-[#FFCC00] py-3 px-4 mb-16 shadow-md">
        <div className="max-w-4xl mx-auto flex justify-center overflow-x-auto hide-scrollbar gap-2 pb-1">
          <NavTab id="radici" label="Le origini" active={activeSection === 'radici'} onClick={scrollToSection} />
          <NavTab id="tappe" label="Le Tappe Istituzionali" active={activeSection === 'tappe'} onClick={scrollToSection} />
          <NavTab id="maastricht" label="Maastricht & Euro" active={activeSection === 'maastricht'} onClick={scrollToSection} />
          <NavTab id="oggi" label="L'UE Oggi" active={activeSection === 'oggi'} onClick={scrollToSection} />
          <NavTab id="fonti" label="Fonti" active={activeSection === 'fonti'} onClick={scrollToSection} />
        </div>
      </div>

      <main className="max-w-3xl mx-auto px-5 pb-24 space-y-20 text-lg leading-relaxed">
        
        {/* SECTION 1: LE RADICI */}
        <section id="radici" className="scroll-mt-24 space-y-8">
          <SectionTitle title="Le origini dell'Integrazione" subtitle="Manifesto di Ventotene e la visione dei Padri Fondatori" />
          
          <p>
            Dopo due guerre mondiali che avevano distrutto il continente, si doveva capire come impedire che l'Europa si distruggesse ancora. La soluzione non era la pace, si dovevano costruire strutture che rendessero la guerra materialmente impossibile.
          </p>

          <QuoteBlock author="ALTIERO SPINELLI & ERNESTO ROSSI — MANIFESTO DI VENTOTENE, 1941">
            «La via da percorrere non è quella di cercare di organizzare politicamente l'Europa degli Stati nazionali sovrani, ma di creare uno Stato federale europeo.»
          </QuoteBlock>

          <p>
            Il <strong>Manifesto per un'Europa libera e unita</strong> (1941) è il trattato istitutivo del federalismo europeo, scritto in modo clandestino durante il confino fascista sull'isola di Ventotene. Spinelli e Rossi credevano che il nazionalismo esasperato, insieme alla sovranità assoluta degli stati, fosse la causa dei conflitti. Solo una federazione sovranazionale avrebbe potuto cambiare le cose.
          </p>

          <h3 className="text-xl font-bold mt-10 mb-6">I Padri Fondatori</h3>
          <p>
            Uomini di culture politiche diverse (democristiani, socialisti, liberali) alla fine della guerra concordavano sulla stessa intuizione, cioè quella che l'integrazione era l'unica via per la pace.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 my-8">
            <FounderCard 
              initials="RS"
              color="bg-blue-100 text-blue-800"
              imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Robert_Schuman_1949.jpg/200px-Robert_Schuman_1949.jpg"
              name="Robert Schuman" 
              role="Ministro francese · Architetto della CECA" 
            />
            <FounderCard 
              initials="JM"
              color="bg-emerald-100 text-emerald-800"
              imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Jean_Monnet_%281888-1979%29.jpg/200px-Jean_Monnet_%281888-1979%29.jpg"
              name="Jean Monnet" 
              role="Ispiratore del metodo comunitario" 
            />
            <FounderCard 
              initials="AdG"
              color="bg-red-100 text-red-800"
              imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Alcide_De_Gasperi_1.jpg/200px-Alcide_De_Gasperi_1.jpg"
              name="Alcide De Gasperi" 
              role="Statista italiano · Europeista convinto" 
            />
            <FounderCard 
              initials="KA"
              color="bg-yellow-100 text-yellow-800"
              imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Konrad_Adenauer_%281952%29.jpg/200px-Konrad_Adenauer_%281952%29.jpg"
              name="Konrad Adenauer" 
              role="Cancelliere tedesco · Riconciliazione franco-tedesca" 
            />
          </div>

          <QuoteBlock author="ROBERT SCHUMAN — DICHIARAZIONE SCHUMAN, 9 MAGGIO 1950">
            «L'Europa non si farà d'un tratto, né sarà costruita tutta insieme; sorgerà da realizzazioni concrete che creino prima di tutto una solidarietà di fatto.»
          </QuoteBlock>

          <h3 className="text-xl font-bold mt-10 mb-4">Perché l'integrazione era l'unica via?</h3>
          <p>
            Mettendo in comune le industrie del carbone e dell'acciaio, si rendeva materialmente impossibile che Francia e Germania si armassero l'una contro l'altra.
          </p>
          <p>
            In secondo luogo, le istituzioni sovranazionali avrebbero "costretto" i nazionalismi, creando interessi comuni superiori a quelli nazionali. Terzo, dopo l'Olocausto e la devastazione totale, l'idea di nazione come entità suprema era moralmente screditata.
          </p>

          <HighlightBlock>
            L’idea rivoluzionaria del progetto europeo fu trasformare nemici storici in soci d'affari: quando si hanno interessi economici comuni, la guerra diventa impossibile. Una pace costruita giorno per giorno attraverso il lavoro di squadra.
          </HighlightBlock>
        </section>

        <Divider />

        {/* SECTION 2: LE TAPPE */}
        <section id="tappe" className="scroll-mt-24 space-y-8">
          <SectionTitle title="Le Tappe Istituzionali" />
          
          <p>
            Il processo di integrazione europea non è stato semplice. Ha attraversato salti, crisi e rilanci, seguendo il metodo Monnet cioè avanzare passo dopo passo, creando solidarietà prima di affrontare le questioni più politicamente rischiose.
          </p>

          <div className="my-10 pl-2">
            <TimelineItem year="1951" title="CECA (Comunità Europea del Carbone e dell'Acciaio)">
              Il Trattato di Parigi (aprile 1951) istituisce la prima comunità sovranazionale tra sei paesi: Francia, Italia, Belgio, Germania Ovest, Paesi Bassi, Lussemburgo. Le industrie di base, vengono posizionate sotto un'Alta Autorità indipendente (esperimento storico di cessione di sovranità nazionale).
            </TimelineItem>
            <TimelineItem year="1957" title="Trattati di Roma (CEE ed EURATOM)">
              Il 25 marzo 1957, i sei paesi firmano due trattati importanti CEE ovvero, Comunità Economica Europea (mercato comune generalizzato) EURATOM (cooperazione nel nucleare civile). La CEE voleva eliminare dazi, garantire libera circolazione di merci, persone, servizi e capitali (nascita del "mercato comune").
            </TimelineItem>
            <TimelineItem year="1979" title="Primo Parlamento Europeo eletto a suffragio universale">
              I cittadini europei eleggono direttamente i propri rappresentanti (considerato come una svolta democratica), non venivano più delegati dai parlamenti nazionali. È il primo passo verso una legittimità democratica autonoma delle istituzioni comunitarie.
            </TimelineItem>
            <TimelineItem year="1986" title="Atto Unico Europeo">
              Stabilisce le basi per il completamento del mercato interno entro il 1992, estendendo il voto a maggioranza qualificata in Consiglio su molte materie e rafforzando i poteri del Parlamento Europeo.
            </TimelineItem>
            <TimelineItem year="1992" title="Trattato di Maastricht (Nascita dell'Unione Europea)">
              La CEE diventa Unione Europea e vengono create la cittadinanza europea, la politica estera comune (PESC), la cooperazione in giustizia e affari interni, e viene avviata l'Unione Economica e Monetaria. 
            </TimelineItem>
            <TimelineItem year="1999–2002" title="L'Euro">
              L'euro nasce come moneta elettronica nel 1999, le banconote e monete entrano in circolazione il 1° gennaio 2002 e 12 paesi abbandonano la propria moneta nazionale.
            </TimelineItem>
            <TimelineItem year="2007" title="Trattato di Lisbona" isLast>
              Dopo il fallimento della Costituzione europea (bocciata al referendum in Francia e Paesi Bassi nel 2005), il Trattato di Lisbona crea il Presidente stabile del Consiglio Europeo, l'Alto Rappresentante per la politica estera, rafforza il Parlamento e introduce la Carta dei Diritti Fondamentali come modo obbligatorio .
            </TimelineItem>
          </div>

          <h3 className="text-xl font-bold mt-10 mb-4">Dalla CECA ai Trattati di Roma</h3>
          <p>
            La CECA riguardava solo carbone e acciaio. I Trattati di Roma volevano un'integrazione generalizzata. Jean Monnet aveva capito la strategia "non si uniscono gli Stati, si uniscono le persone" così creando un mercato comune si creavano interessi economici transnazionali che avrebbero chiesto sempre più integrazione politica.
          </p>

          <div className="flex flex-wrap gap-3 mt-6 font-sans">
            <Pill color="blue">Libera circolazione merci</Pill>
            <Pill color="blue">Libera circolazione persone</Pill>
            <Pill color="yellow">Politica agricola comune</Pill>
            <Pill color="green">Unione doganale</Pill>
            <Pill color="green">Mercato unico</Pill>
          </div>
        </section>

        <Divider />

        {/* SECTION 3: MAASTRICHT & EURO */}
        <section id="maastricht" className="scroll-mt-24 space-y-8">
          <SectionTitle title="Maastricht, l'Euro e Lisbona" />
          
          <p>
            Il Trattato di Maastricht (firmato il 7 febbraio 1992, in vigore dal 1° novembre 1993) trasforma una comunità economica in un'unione politica, con cittadinanza, moneta comune e ambizioni di politica estera.
          </p>

          <h3 className="text-xl font-bold mt-10 mb-6">I Criteri di Convergenza di Maastricht</h3>
          <p>
            Per aderire all'Unione Economica e Monetaria e adottare l'euro, i paesi dovevano soddisfare cinque criteri come "prova di serietà" economica che garantisse la stabilità della futura moneta comune:
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8 font-sans">
            <DataCard icon={<BarChart2 className="text-blue-500 w-6 h-6"/>} title="INFLAZIONE" value="≤ +1,5%" desc="rispetto alla media dei 3 paesi più stabili" />
            <DataCard icon={<Coins className="text-yellow-600 w-6 h-6"/>} title="DEFICIT PUBBLICO" value="≤ 3%" desc="del PIL nazionale" />
            <DataCard icon={<Landmark className="text-gray-700 w-6 h-6"/>} title="DEBITO PUBBLICO" value="≤ 60%" desc="del PIL nazionale" />
            <DataCard icon={<TrendingUp className="text-red-400 w-6 h-6"/>} title="TASSI D'INTERESSE" value="≤ +2%" desc="rispetto ai 3 paesi più stabili" />
            <DataCard icon={<RefreshCcw className="text-gray-500 w-6 h-6"/>} title="STABILITÀ VALUTARIA" value="2 anni" desc="nello SME senza svalutazioni" />
          </div>

          <QuoteBlock author="ROMANO PRODI, PRESIDENTE DELLA COMMISSIONE EUROPEA 1999–2004">
            «L'euro non è soltanto una moneta. È la materializzazione dell'aspirazione europea a costruire qualcosa di comune, permanente, condiviso da tutti i cittadini.»
          </QuoteBlock>

          <h3 className="text-xl font-bold mt-10 mb-4">L'introduzione dell'Euro</h3>
          <p>
            Tra il 1992 e il 1993 una grave crisi valutaria sconvolse il SME (Sistema Monetario Europeo) facendo sì che la lira e la sterlina uscissero, e molti dubitarono che il progetto potesse avere successo.
          </p>

          <div className="space-y-6 my-8 font-sans">
            <ProgressBar label="Paesi con l’euro (su 27 UE)" value="20 paesi" percent={74} color="bg-blue-800" />
            <ProgressBar label="PIL mondiale rappresentato dall'eurozona" value="~14%" percent={14} color="bg-yellow-400" />
            <ProgressBar label="Riserve globali in euro" value="~20%" percent={20} color="bg-green-700" />
          </div>

          <h3 className="text-xl font-bold mt-10 mb-4">Il Trattato di Lisbona (2007)</h3>
          <p>
            Dopo il no francese e olandese alla Costituzione europea nel 2005, il Trattato di Lisbona salvò le riforme istituzionali togliendo il linguaggio "costituzionale" e tornando alla forma del trattato classico. Le innovazioni principali:
          </p>

          <div className="flex flex-col items-start gap-3 mt-6 font-sans">
            <Pill color="blue" lg>Presidente stabile del Consiglio Europeo</Pill>
            <Pill color="blue" lg>Alto Rappresentante per la politica estera</Pill>
            <Pill color="yellow" lg>Carta dei Diritti Fondamentali vincolante</Pill>
            <Pill color="green" lg>Maggiori poteri al Parlamento Europeo</Pill>
            <Pill color="green" lg>Iniziativa cittadina europea</Pill>
          </div>

          <p className="mt-6">
            Lisbona diede all'UE gli strumenti per agire come attore globale anche se la distanza tra le ambizioni e le risorse effettive hanno creato una tensione strutturale del progetto.
          </p>
        </section>

        <Divider />

        {/* SECTION 4: UE OGGI */}
        <section id="oggi" className="scroll-mt-24 space-y-8">
          <SectionTitle title="L'UE Oggi" />
          
          <p>
            Se la pace fu la grande sfida fondativa del dopoguerra, la crisi climatica è la grande sfida del XXI secolo e l'UE ha scelto di fare una fase di integrazione non solo ambientale ma economica e politica.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8 font-sans">
            <SimpleCard title="OBIETTIVO EMISSIONI" value="-55%" desc="riduzione CO2 entro il 2030 rispetto ai livelli 1990" />
            <SimpleCard title="NEUTRALITÀ CLIMATICA" value="2050" desc="obiettivo carbon neutrality per tutta l'UE" />
            <SimpleCard title="INVESTIMENTI NEXTGENEU" value="800 mld" desc="di cui il 37% destinato al clima" />
          </div>

          <h3 className="text-xl font-bold mt-10 mb-4">Il Green Deal Europeo</h3>
          <p>
            Lanciato dalla Commissione von der Leyen nel dicembre 2019, il Green Deal è la strategia più ambiziosa mai adottata dall'UE, vuole trasformare l'Europa nel primo continente a impatto climatico zero entro il 2050, rendendo la transizione ecologica il nuovo modello di sviluppo economico.
          </p>

          <div className="my-10 pl-2">
            <TimelineItem year="2019" title="Green Deal Europeo" modern>
              La Commissione von der Leyen mostra la sua nuova strategia di crescita con obiettivi climatici vincolanti e un piano per agire su energia, trasporti, agricoltura, industria e biodiversità.
            </TimelineItem>
            <TimelineItem year="2021" title="Legge Europea sul Clima e NextGenEU" modern>
              Il target -55% al 2030 diventa legge. NextGenerationEU (750 miliardi) il più grande piano di stimolo nella storia UE destina il 37% alla transizione verde e per la prima volta l'UE si indebita collettivamente.
            </TimelineItem>
            <TimelineItem year="2022–23" title="Pacchetto Fit for 55 e REPowerEU" modern>
              Fit for 55 è un pacchetto di 13 proposte legislative per allineare la normativa UE agli obiettivi climatic, REPowerEU invece risponde alla crisi energetica post-invasione ucraina accelerando le rinnovabili e riducendo il consumo dal gas che viene dalla Russia.
            </TimelineItem>
            <TimelineItem year="2023–25" title="CBAM e lo stop ai motori a combustione" modern isLast>
              Il Meccanismo di Adeguamento del Carbonio alle Frontiere (CBAM) da un prezzo al carbonio e alle importazioni. Dal 2035 non si potranno più vendere auto nuove a benzina o diesel nell'UE .
            </TimelineItem>
          </div>

          <h3 className="text-xl font-bold mt-10 mb-4">Tensioni e contraddizioni</h3>
          <p>
            Le elezioni europee del giugno 2024 hanno rafforzato i partiti euroscettici e critici delle politiche ambientali, e hanno portato a un rallentamento di alcune misure in particolare nella politica agricola comune e nei target per le emissioni industriali.
          </p>
          <p>
            Si crea una tensione strutturale del progetto europeo, l'ambizione di lungo periodo degli obiettivi climatici scontrandosi con i cicli politici di breve periodo. La sfida non è solo tecnica è di legittimità democratica e di equità sociale.
          </p>

          <QuoteBlock author="FRANS TIMMERMANS, COMMISSARIO EUROPEO PER IL GREEN DEAL 2019–2023">
            «La transizione ecologica non è un fardello per l'economia europea, ma la sua opportunità più grande. Chi si adatta prima, guida il mondo dopo.»
          </QuoteBlock>

          <HighlightBlock className="mt-8">
            Come nel 1950 Schuman usò il carbone e l'acciaio per costruire pace, oggi l'UE usa la crisi climatica per approfondire l'integrazione: mercato unico del carbonio, debito comune, standard condivisi. La storia si ripete — non nei contenuti, ma nel metodo: trasformare una sfida comune in architettura istituzionale condivisa.
          </HighlightBlock>
        </section>

        <Divider />

        {/* SECTION 5: FONTI */}
        <section id="fonti" className="scroll-mt-24 space-y-8">
          <SectionTitle title="Fonti e Riferimenti" />
          
          <p>
            Di seguito è riportato l'elenco delle fonti utilizzate per la stesura di questo saggio visivo, suddivise per argomenti. I link rimandano ai documenti originali, approfondimenti e testi di riferimento.
          </p>

          <div className="space-y-6 font-sans">
            <SourceGroup title="Radici ideali — Manifesto di Ventotene">
              <SourceLink publisher="Wikipedia" title="Manifesto di Ventotene: contesto storico, autori e diffusione clandestina" url="https://it.wikipedia.org/wiki/Manifesto_di_Ventotene" />
              <SourceLink publisher="Sky TG24" title="Cos'è il Manifesto di Ventotene, testo e significato: testo integrale e punti fondamentali" url="https://tg24.sky.it/mondo/approfondimenti/ventotene-manifesto-cos-e" />
              <SourceLink publisher="Studenti.it" title="Manifesto di Ventotene: spiegazione semplice, punti fondamentali e testo" url="https://www.studenti.it/manifesto-di-ventotene-spiegazione-semplice-punti-fondamentali-testo.html" />
              <SourceLink publisher="PDF testo originale (La Repubblica / Gedi)" title="edizione con prefazione di Eugenio Colorni" url="https://static.gedidigital.it/download/pdf/repubblica/2025/politica/manifesto_ventotene_all.pdf" />
              <SourceLink publisher="Comune di Venezia" title="Il Manifesto di Ventotene, edizione 2022 con Tesi del MFE" url="https://www.comune.venezia.it/sites/comune.venezia.it/files/page/files/Il%20Manifesto%20di%20Ventotene%202022%20web.pdf" />
            </SourceGroup>

            <SourceGroup title="Dichiarazione Schuman e nascita della CECA">
              <SourceLink publisher="Consiglio dell'UE (fonte primaria)" title="La Dichiarazione Schuman" url="https://www.consilium.europa.eu/it/schuman-declaration/" />
              <SourceLink publisher="Unione Europea (fonte primaria)" title="Dichiarazione Schuman, maggio 1950" url="https://european-union.europa.eu/principles-countries-history/history-eu/1945-59/schuman-declaration-may-1950_it" />
              <SourceLink publisher="La Nostra Patria Europa" title="9 maggio 1950 – Dichiarazione Schuman: ruolo di De Gasperi, Adenauer e Monnet" url="https://www.lanostrapatriaeuropa.org/de-gasperi-e-la-ced/cronologia/9-maggio-1950-dichiarazione-schuman/" />
              <SourceLink publisher="Fondaco Europa" title="Dalla Dichiarazione Schuman parte il percorso di integrazione europea" url="https://fondacoeuropa.eu/dichiarazione-schuman-del-1950/" />
            </SourceGroup>

            <SourceGroup title="Trattato di Maastricht, criteri di convergenza e euro">
              <SourceLink publisher="EUR-Lex (fonte primaria ufficiale UE)" title="Trattato di Maastricht sull'Unione europea" url="https://eur-lex.europa.eu/IT/legal-content/summary/treaty-of-maastricht-on-european-union.html" />
              <SourceLink publisher="BCE / Banca Centrale Europea" title="Cinque cose da sapere sul Trattato di Maastricht: criteri di convergenza" url="https://www.ecb.europa.eu/ecb-and-you/explainers/tell-me-more/html/maastricht_treaty.it.html" />
              <SourceLink publisher="Treccani" title="Trattato di Maastricht, Dizionario di Economia e Finanza" url="https://www.treccani.it/enciclopedia/trattato-di-maastricht_(Dizionario-di-Economia-e-Finanza)/" />
              <SourceLink publisher="Wikipedia" title="Trattato di Maastricht: struttura a tre pilastri, percorso istituzionale" url="https://it.wikipedia.org/wiki/Trattato_di_Maastricht" />
              <SourceLink publisher="Testo integrale del Trattato (Gazzetta Ufficiale UE, C 191/1992)" title="Documento ufficiale in PDF" url="https://www.eticapa.it/eticapa/wp-content/uploads/2014/11/Testo-del-trattato-di-Maastricht.pdf" />
            </SourceGroup>

            <SourceGroup title="Green Deal e transizione ecologica">
              <SourceLink publisher="Commissione Europea (fonte primaria ufficiale)" title="Il Green Deal europeo" url="https://commission.europa.eu/strategy-and-policy/priorities-2019-2024/european-green-deal_it" />
              <SourceLink publisher="Consiglio dell'UE (fonte primaria ufficiale)" title="Green Deal europeo" url="https://www.consilium.europa.eu/it/policies/european-green-deal/" />
              <SourceLink publisher="Consiglio dell'UE (fonte primaria ufficiale)" title="Fit for 55: il piano dell'UE per una transizione verde" url="https://www.consilium.europa.eu/it/policies/green-deal/fit-for-55-the-eu-plan-for-a-green-transition/" />
              <SourceLink publisher="Consiglio dell'UE" title="Cronistoria del Green Deal e del pacchetto Fit for 55" url="https://www.consilium.europa.eu/it/policies/european-green-deal/timeline-european-green-deal-and-fit-for-55/" />
              <SourceLink publisher="ECCO Climate" title="Fit for 55: cos'è e come funziona (analisi dettagliata ETS e CBAM)" url="https://eccoclimate.org/it/fit-for-55/" />
              <SourceLink publisher="Pagella Politica" title="Che fine ha fatto il Green Deal (analisi critica e rallentamenti post-2024)" url="https://pagellapolitica.it/articoli/clima-green-deal-elezioni-europee" />
              <SourceLink publisher="Wikipedia" title="Green Deal europeo: panoramica completa con cronologia" url="https://it.wikipedia.org/wiki/Green_Deal_europeo" />
            </SourceGroup>
          </div>

        </section>

      </main>
    </div>
  );
};

/* --- COMPONENTS --- */

const NavTab = ({ label, active, onClick, id }) => (
  <button
    onClick={() => onClick(id)}
    className={`whitespace-nowrap px-4 py-2 rounded-md text-sm font-sans font-bold transition-all ${
      active 
        ? 'bg-[#FFCC00] text-[#003399] shadow-sm' 
        : 'bg-transparent text-blue-100 hover:text-white hover:bg-blue-800'
    }`}
  >
    {label}
  </button>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="mb-8">
    <h2 className="text-3xl font-bold mb-2 text-[#003399]">{title}</h2>
    {subtitle && <p className="italic text-gray-600 border-b-2 border-[#FFCC00] pb-4">{subtitle}</p>}
    {!subtitle && <div className="border-b-2 border-[#FFCC00] pb-2"></div>}
  </div>
);

const QuoteBlock = ({ children, author }) => (
  <div className="my-8 bg-blue-50/50 border-l-4 border-[#003399] pl-5 pr-4 py-5 rounded-r-md shadow-sm">
    <p className="italic text-lg mb-3 leading-relaxed text-[#003399] font-medium">{children}</p>
    <p className="text-gray-500 font-sans text-sm font-semibold uppercase tracking-wider">— {author}</p>
  </div>
);

const HighlightBlock = ({ children, className = "" }) => (
  <div className={`my-8 bg-[#003399] text-white border-l-8 border-[#FFCC00] p-6 rounded-r-xl italic text-lg leading-relaxed shadow-lg ${className}`}>
    {children}
  </div>
);

const FounderCard = ({ initials, name, role, color, imgUrl }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-white border-b-4 border-[#003399] rounded-t-xl rounded-b-md p-6 flex flex-col items-center text-center shadow-md hover:shadow-lg transition-shadow">
      {imgUrl && !imgError ? (
        <img 
          src={imgUrl} 
          alt={``} 
          referrerPolicy="no-referrer"
          onError={() => setImgError(true)}
          className="w-16 h-16 rounded-full object-cover mb-4 border-2 border-[#003399] shadow-sm" 
        />
      ) : (
        <div className={`w-14 h-14 rounded-full flex items-center justify-center font-bold text-xl mb-4 ${color || 'bg-gray-200 text-gray-700'}`}>
          {initials}
        </div>
      )}
      <h4 className="font-bold text-lg mb-1 text-[#003399]">{name}</h4>
      <p className="text-sm text-gray-600 font-sans">{role}</p>
    </div>
  );
};

const TimelineItem = ({ year, title, children, isLast, modern }) => {
  const lineColor = modern ? 'border-[#003399]' : 'border-[#FFCC00]';
  const dotStyle = modern 
    ? 'border-[#003399] bg-[#FFCC00] border-[3px] w-[16px] h-[16px] -left-[9px]' 
    : 'border-[#FFCC00] bg-[#003399] border-[3px] w-[16px] h-[16px] -left-[9px]';
  const yearColor = 'text-[#003399]';

  return (
    <div className={`relative pl-8 pb-10 ${isLast ? '' : `border-l-2 ${lineColor}`}`}>
      <div className={`absolute top-1 rounded-full ${dotStyle} shadow-sm`}></div>
      <div className={`font-bold ${yearColor} font-sans mb-1 text-lg`}>{year}</div>
      <h4 className="font-bold text-xl mb-2 text-gray-900">{title}</h4>
      <p className="text-gray-700 text-[1rem]">{children}</p>
      
      {isLast && (
        <div className="absolute -bottom-6 -left-3.5 bg-[#FFCC00] text-[#003399] rounded-full p-1 shadow-md">
          <ArrowDown className="w-5 h-5" />
        </div>
      )}
    </div>
  );
};

const Pill = ({ children, color, lg }) => {
  const colors = {
    blue: 'bg-[#003399] text-white shadow-sm',
    yellow: 'bg-[#FFCC00] text-[#003399] shadow-sm',
    green: 'bg-emerald-600 text-white shadow-sm'
  };
  const size = lg ? 'px-5 py-2 text-base font-bold' : 'px-3 py-1.5 text-sm font-bold';
  
  return (
    <span className={`${colors[color]} ${size} rounded-full`}>
      {children}
    </span>
  );
};

const DataCard = ({ icon, title, value, desc }) => (
  <div className="bg-white rounded-xl p-5 border-t-4 border-[#FFCC00] shadow-sm hover:shadow-md transition-shadow">
    <div className="mb-3">{icon}</div>
    <h4 className="font-bold text-xs text-gray-500 tracking-wider uppercase mb-1 font-sans">{title}</h4>
    <div className="text-2xl font-bold text-[#003399] mb-1">{value}</div>
    <p className="text-sm text-gray-600 leading-snug">{desc}</p>
  </div>
);

const ProgressBar = ({ label, value, percent, color }) => {
  const barColor = color === 'bg-blue-800' ? 'bg-[#003399]' : color === 'bg-yellow-400' ? 'bg-[#FFCC00]' : color;
  
  return (
    <div>
      <div className="flex justify-between items-end mb-1">
        <span className="text-base text-gray-800 font-sans font-medium">{label}</span>
        <span className="font-bold text-[#003399] text-lg">{value}</span>
      </div>
      <div className="w-full bg-gray-200 h-2 rounded-full overflow-hidden shadow-inner">
        <div className={`h-full ${barColor}`} style={{ width: `${percent}%` }}></div>
      </div>
    </div>
  );
};

const SimpleCard = ({ title, value, desc }) => (
  <div className="bg-white border-t-4 border-[#003399] rounded-b-xl p-6 shadow-md hover:shadow-lg transition-shadow">
    <h4 className="font-bold text-xs text-gray-500 uppercase tracking-wider mb-2 font-sans">{title}</h4>
    <div className="text-3xl font-bold mb-2 text-[#003399]">{value}</div>
    <p className="text-sm text-gray-600">{desc}</p>
  </div>
);

const Divider = () => (
  <div className="w-full h-px bg-gray-300 my-12 relative flex justify-center items-center">
    <div className="absolute bg-[#FFCC00] w-12 h-1 rounded-full"></div>
  </div>
);

const SourceGroup = ({ title, children }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
    <h3 className="font-bold text-lg text-[#003399] mb-4 border-b border-gray-100 pb-2">{title}</h3>
    <ul className="space-y-3">
      {children}
    </ul>
  </div>
);

const SourceLink = ({ publisher, title, url }) => (
  <li className="text-[0.95rem] flex items-start gap-2">
    <span className="text-[#FFCC00] mt-0.5 text-lg leading-none">•</span>
    <span className="leading-snug">
      <span className="font-bold text-gray-800">{publisher}</span>
      <span className="text-gray-400 mx-1.5">—</span>
      <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-[#003399] hover:underline transition-colors">
        {title}
      </a>
    </span>
  </li>
);

export default App;
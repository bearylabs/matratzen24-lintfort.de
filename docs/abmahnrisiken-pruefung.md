# Vorprüfung auf Abmahnrisiken

## Umfang und Grenzen

Geprüft wurden der lokale Quellcode der Astro-Website einschließlich Werbetexten, Metadaten, strukturierten Daten, Impressum, Datenschutzhinweisen, Formular und Skripten sowie der lokale Build. Die vorhandenen Fotos wurden in einer verkleinerten Übersicht gesichtet; Kleindruck, Verpackungsaufdrucke und möglicherweise abgebildete Testsiegel sind damit **nicht abschließend geprüft**.

Dies ist eine technische und redaktionelle Vorprüfung, keine anwaltliche Freigabe. Es erfolgten keine aktuelle Rechtsdatenbank-/Rechtsprechungsrecherche, Registerabfrage, Prüfung der tatsächlichen Lagerbestände, Verträge oder Rechteketten und kein Live-Audit der veröffentlichten Website. Ein möglicher Mangel ist nicht automatisch ein feststehender, von jedem Anspruchsteller abmahnbarer Wettbewerbsverstoß.

## Bereits umgesetzt

- Die fünf beanstandeten Werbeaussagen wurden durch die vorgeschlagenen Formulierungen ersetzt.
- Die Rabattangabe wurde auch aus dem zusätzlichen Hero-Badge entfernt.
- Seitentitel und zentrale Beschreibung wurden bereinigt. Diese speisen auch Open-Graph-, Twitter- und strukturierte WebPage-Daten.
- Eine weitere Aussage über „unschlagbare Preise“ im Über-uns-Text wurde entfernt.
- Die ursprünglichen widersprüchlichen Bestandsangaben („1600+“ / „über 800“) wurden auf Wunsch des Betreibers einheitlich durch „mehr als 2000 Matratzen“ bzw. im kompakten Badge „2000+ Matratzen“ ersetzt. Der tatsächliche Bestand wurde nicht unabhängig geprüft; die Mengenwerbung muss zutreffen und aktuell gehalten werden. Die unbelegte 80-%-Angabe zum Handelsvolumen und die Flächenangabe bleiben vorsorglich neutral formuliert. Das bedeutet nicht, dass diese Angaben nachweislich falsch waren.
- Die zeitlich unbeschränkte Meldung „Neue Lieferung eingetroffen“ wurde durch einen zeitlosen Sortimentshinweis ersetzt.

## Offene Punkte: vor Veröffentlichung klären

### 1. Impressum: steuerliche Identifikationsangaben prüfen

**Fundstelle:** `src/legal/impressum.html`

Umsatzsteuer-Identifikationsnummer und Wirtschafts-Identifikationsnummer sind nicht angegeben. Nach § 5 DDG sind entsprechende Angaben erforderlich, soweit die jeweilige Nummer vorhanden ist und die gesetzliche Angabepflicht greift. Daraus lässt sich ohne Kenntnis des Unternehmens noch kein sicherer Verstoß ableiten.

**Maßnahme:** Betreiber nach vorhandenen Nummern fragen und einschlägige Angaben ergänzen. Nicht die persönliche Steuernummer veröffentlichen. Firmenname, Geschäftsführung, Registergericht, Registernummer und ladungsfähige Anschrift anhand aktueller Unterlagen abgleichen; sie wurden nicht extern verifiziert.

### 2. Impressum: unzutreffende DDG-Verweise

**Fundstelle:** `src/legal/impressum.html`, Abschnitt „Haftung für Inhalte“

Der Text verweist für die frühere Diensteanbieterhaftung auf „§ 7 Abs. 1 DDG“ und „§§ 8 bis 10 DDG“. Das ist keine korrekte Übertragung der früheren TMG-Regelungen. Die heutigen Haftungsprivilegierungen für Vermittlungsdienste sind im Digital Services Act geregelt; sie sind außerdem nicht pauschal auf eigene Werbeinhalte übertragbar.

**Maßnahme:** Den nicht erforderlichen Standard-Haftungstext anwaltlich überarbeiten oder streichen lassen. Ein Disclaimer befreit nicht von der Verantwortung für eigene Inhalte. Der Zitierfehler allein wird hier nicht als sicher abmahnbarer Wettbewerbsverstoß bewertet.

### 3. Outlet-, Marken- und Sonderpostenwerbung sachlich absichern

**Fundstellen:** `src/lib/site.ts`, `src/pages/index.astro`, Marken auf Fotos

Auch die gewünschten Ersatztexte sind nicht automatisch rechtssicher: „Outlet-Preise“, „Markenqualität“, „Markenmatratzen“, „Sonderposten“ und „Restposten“ müssen zum tatsächlichen Angebot passen. Entscheidend sind der Gesamteindruck und die tatsächlichen Bezugs- und Verkaufsverhältnisse (§§ 5, 5a UWG). Keine Zugehörigkeit zu einem Markenhersteller oder autorisierte Händlerstellung suggerieren, wenn diese nicht besteht.

**Maßnahme:** Sortimentsherkunft und Warenzustand dokumentieren. Falls tatsächlich Retouren, gebrauchte, beschädigte oder B-Waren verkauft werden, erforderliche Zustandsinformationen im jeweiligen Angebot deutlich angeben. Keine solche Warenkategorie wurde hier als Tatsache unterstellt.

### 4. Bilder, Marken und Testsiegel im Original prüfen

**Fundstellen:** `src/assets/images/`, `public/assets/images/`

Fotos zeigen unter anderem Markenverpackungen und Personen. Eine technische Dateiprüfung belegt weder Nutzungsrechte noch Einwilligungen. Etwaige Testsiegel oder Preisangaben in Bildmotiven können auch nach Bereinigung aller HTML-Texte rechtlich relevant bleiben.

**Maßnahme:** Originalbilder in voller Auflösung auf Testsieger-/Rabattaufdrucke und lesbare Werbeaussagen prüfen; Fotolizenzen, erforderliche Urhebervermerke und Einwilligungen abgebildeter Personen nachhalten. Erkennbare Testsiegel nicht ohne Prüfung von Fundstelle, Produktbezug und Lizenzbedingungen werblich einsetzen.

### 5. Bereits erfolgte Abmahnung / Unterlassungserklärung

Die eingefügte Tabelle verweist auf eine Abmahnung. Deren Wortlaut und eine eventuell abgegebene Unterlassungserklärung liegen nicht vor. Ob auch sinngleiche Aussagen, Bildwerbung, andere Domains, Anzeigen oder Social-Media-Beiträge erfasst sind, lässt sich aus diesem Repository nicht bestimmen.

**Maßnahme:** Änderungen und verbleibende Formulierungen vor Veröffentlichung mit der betreuenden Kanzlei abgleichen. Auch externe Werbekanäle, alte Landingpages, hinterlegte SEO-Texte und öffentlich erreichbare Altversionen prüfen. Bei bestehender Unterlassungsverpflichtung kann ein Verstoß Vertragsstrafen auslösen.

## Angrenzende Risiken (Datenschutz nicht Hauptauftrag)

### 6. Google Maps wird ohne vorherige Freigabe geladen

**Fundstellen:** `src/pages/index.astro` (iframe), `src/legal/privacy.html` (Google-Maps-Absatz)

Das iframe besitzt sofort eine externe `src`. `loading="lazy"` ist keine Einwilligungssperre: Beim Annähern an den Kartenbereich kann eine Verbindung zu Google entstehen. Die Datenschutzerklärung stützt die Einbindung pauschal auf berechtigtes Interesse. Ob und welche Einwilligungs-, Informations- und Drittlandanforderungen greifen, sollte anhand der tatsächlichen Verarbeitung geprüft werden; ein Datenschutzmangel kann auch wettbewerbsrechtlich relevant werden.

**Maßnahme:** Risikoarme Alternative ist, die eingebettete Karte durch einen bloßen externen Navigationslink zu ersetzen. Alternativ eine fachlich geprüfte Einwilligungslösung vorsehen, die Google vor Zustimmung wirklich blockiert, und die Datenschutzhinweise darauf abstimmen. Die Einbindung wurde im Rahmen dieser Werbetextkorrektur nicht verändert.

### 7. Netlify und Kontaktformular: Informationen/Verträge abgleichen

**Fundstellen:** `src/legal/privacy.html`, `src/pages/index.astro`, `netlify.toml`

Hosting und Netlify Forms werden genannt. Konkrete Empfängerangaben, mögliche Drittlandtransfers und deren Absicherung sind jedoch nicht hinreichend konkret beschrieben, soweit solche Übermittlungen tatsächlich stattfinden. Ein Auftragsverarbeitungsvertrag und die realen Speicher-/Löschfristen sind aus dem Repository nicht überprüfbar. Direkt am Formular fehlt ein gut sichtbarer Verweis auf die Datenschutzhinweise; ein Link steht bereits im Footer.

**Maßnahme:** Tatsächliches Hosting/Formularrouting, Auftragsverarbeitung, Unterauftragsverarbeiter, Transfergrundlage und Löschfristen prüfen und die Informationen nach Art. 13 DSGVO anpassen. Einen kurzen Datenschutzhinweis am Formular ergänzen. Nicht reflexartig eine Pflicht-Einwilligungscheckbox für die normale Bearbeitung von Kontaktanfragen einführen.

## Bedingte Anforderungen und unauffällige Bereiche

- Impressum und Datenschutzhinweise sind über den Footer erreichbar. Ein veralteter aktiver Link zur eingestellten EU-OS-Plattform wurde nicht gefunden. Die Erklärung zur Verbraucherschlichtung muss mit der tatsächlichen Bereitschaft und einer etwaigen Teilnahmeverpflichtung übereinstimmen.
- Im geprüften eigenen Code wurden keine Analytics-/Tracking-Skripte, extern geladenen Webfonts, Bewertungen oder eigenständigen Garantiezusagen gefunden. Fonts werden lokal bereitgestellt. Das ist keine Netzwerkmessung des Produktivsystems und kein Nachweis, dass dort keine zusätzlichen Dienste aktiv sind.
- Es wurden kein Warenkorb, Checkout oder konkrete Verkaufspreise gefunden. Daraus ergibt sich hier kein erkennbarer Checkout-/Grundpreis-/Versandkostenmangel. Werden Onlineangebote oder Fernabsatz eingeführt bzw. tatsächlich per E-Mail/Telefon Verträge geschlossen, sind insbesondere PAngV, Fernabsatzinformationen und Widerrufsrecht gesondert zu prüfen. Bei künftigen Preisermäßigungen ist insbesondere § 11 PAngV (regelmäßig niedrigster eigener Gesamtpreis der letzten 30 Tage) zu berücksichtigen; ein beliebiger „Bezugspreis“ genügt nicht immer.
- Ob die Website unter das BFSG fällt, hängt unter anderem von der konkreten Dienstleistung und möglichen Ausnahmen ab. Ein reines Informationsangebot ist nicht pauschal mit einem Onlineshop gleichzusetzen. Geschäftsvorgänge und Unternehmensgröße prüfen, bevor eine Pflicht oder Ausnahme behauptet wird.

## Technische Validierung

- `npm run check`: keine Fehler oder Warnungen.
- `npm run build`: erfolgreich nach Ergänzung der fehlenden Bildverarbeitungsabhängigkeit `sharp`.
- Lokaler Astro-Dev-Server: `http://127.0.0.1:4321/`.
- Vor Veröffentlichung muss die tatsächlich ausgerollte Website einschließlich aller rechtlichen Unterseiten und Bildinhalte erneut kontrolliert werden. Lokale Änderungen sind noch kein Deployment.

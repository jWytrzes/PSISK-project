import role1 from '../../utils/images/role1.png';
import role2 from '../../utils/images/role2.png';
import role3 from '../../utils/images/role3.png';
import role4 from '../../utils/images/role4.png';
import BDPU1 from '../../utils/images/BDPU1.png';
import BDPU2 from '../../utils/images/BDPU2.webp';

export const RSTPUtils = [
	{
		header: '',
		variant: 'body1',
		align: 'justify',
		paragraph: true,
		content:
			'Ta część skupiona jest na omówiniu ulepszeń dodanych wraz z wprowadzeniem standardu RSTP w odniesieniu do standardu STP (802.1D)',
	},
	{
		header: 'Wstęp',
		variant: 'body1',
		align: 'justify',
		paragraph: true,
		content: (
			<p>
				Jak wspomniano wyżej RSTP (IEEE 802.1w) jest rozszerzeniem sieciowego protokołu STP (IEEE 802.1D). Standard STP
				został stworzony w czasie, gdy przywrócenie działania sieci po okresie braku zasilania w ciegu jednej minuty
				było wystarczająco szybkie i wydajne. Z czasem potrzeby jednak wzrosły i w tym momencie z pomocą przyszedł nowo
				utworzony standard RSTP. W nowym standardzie mostkowanie konkuruje ze starymi rozwiązaniami routowanymi. Użyte w
				nim protkoły, takie jak Open Shortest Path First (OSPF) i Enhanced Interior Gateway Routing (EIGRP), są w stanie
				zapewnić alternatywną ścieżkę w znacznie krótszym czasie. Firma Cisco wprowadzając ulepszenia poprzedniej,
				oryginalnej specyfikacjie 802.1D wprowadziła funkcje przyspieszające czas konwergencji sieci z mostem. Są to
				między innymi: Uplink Fast, Backbone Fast i port Fast. Za wadę nowych mechanizmów można uznać to, że są one
				zastrzeżone i wymagają dodatkowej konfiguracji. Ze względu na małą liczbę zmian RSTP względem STP, nowy protokuł
				(RSTP, IEEE 802.1w) można uznać raczej za ewolucję poprzedniego, a nie rewolucję. Terminologia 802.1d pozostaje
				zasadniczo taka samo, a więszkość parametrów pozostała niezmieniona. Dzięki temu, nauka nowego standardu dla
				osób dobrze zaznajomionych z poprzednim jest łatwa i przyjemna, a skonfigurowanie nowego protokołu nie powinno
				stanowić dla nich problemu. W większości przypadków RSTP działa lepiej niż zastrzeżone rozszerzenia Cisco bez
				dodatkowej konfiguracji. W standardzie 802.1w można również powrócić do standardu 802.1D w celu współdziałania
				ze starszymi mostami w oparciu o port. [1]
			</p>
		),
	},
	{
		header: 'Rozszerzony ID Systemu:',
		variant: 'body1',
		align: 'justify',
		paragraph: true,
		content: (
			<>
				<p>
					<b>Rozszerzony ID systemu (Extended System ID) </b> służy do określania różnych identyfikatorów mostu dla
					różnych wystąpień routingu RSTP lub STP.
				</p>
				<p>
					Pole priorytetu mostka ma długość 2 bajtów lub 16 bitów; 4-bity używane dla priorytetu mostu i 12-bity dla
					rozszerzonego identyfikatora systemu, który identyfikuje sieć VLAN uczestniczącą w tym konkretnym procesie
					STP.
				</p>
				<p>
					Użycie tych 12 bitów dla rozszerzonego identyfikatora systemu zmniejsza priorytet mostu do 4 bitów. Ten proces
					rezerwuje 12 bitów z prawej strony dla identyfikatora VLAN i 4 bity z lewej dla priorytetu mostu. To wyjaśnia,
					dlaczego wartość priorytetu mostu można skonfigurować tylko jako wielokrotność 4096, czyli 2^12. Jeśli skrajne
					lewe bity to 0001, to priorytet mostu wynosi 4096; jeśli skrajne lewe bity to 1111, to priorytet mostu wynosi
					61440 (= 15 x 4096).
				</p>
				<p>
					Wartość rozszerzonego identyfikatora systemu jest dodawana do wartości priorytetu mostu w identyfikatorze BID
					w celu zidentyfikowania priorytetu i sieci VLAN ramki BPDU.
				</p>
				<p>
					Gdy dwa przełączniki są skonfigurowane z tym samym priorytetem i mają ten sam rozszerzony identyfikator
					systemu, przełącznik o adresie MAC o najniższej wartości szesnastkowej będzie miał niższy BID. Początkowo
					wszystkie przełączniki są skonfigurowane z tą samą domyślną wartością priorytetu. Adres MAC jest wtedy
					decydującym czynnikiem, na którym przełącznik stanie się mostem głównym.
				</p>
				<p>
					Gdy wszystkie przełączniki są skonfigurowane z tym samym priorytetem, tak jak w przypadku wszystkich
					przełączników utrzymywanych w domyślnej konfiguracji z priorytetem 32768, adres MAC staje się decydującym
					czynnikiem, dla którego przełącznik staje się mostem głównym
				</p>
			</>
		),
	},
	{
		header: 'Nowe stany i role portów',
		variant: 'body1',
		align: 'justify',
		paragraph: true,
		content: (
			<>
				<p>Standard 802.1D jest zdefiniowany w pięciu różnych stanach portów:</p>
				<ul>
					<li>disabled</li>
					<li>listening</li>
					<li>learning</li>
					<li>blocking</li>
					<li>forwarding</li>
				</ul>
				<p>
					Stan portu jest mieszany, niezależnie od tego, czy blokuje, czy przekazuje ruch, oraz rolę, jaką odgrywa w
					aktywnej topologii (port główny, port wyznaczony itd.). Na przykład z operacyjnego punktu widzenia nie ma
					różnicy między portem w stanie blokowania, a portem w stanie nasłuchiwania. Oba odrzucają ramki i nie uczą się
					adresów MAC. Prawdziwa różnica polega na roli, jaką drzewo opinające przypisuje portowi. Można bezpiecznie
					założyć, że port "listening" jest wyznaczony lub root i jest w drodze do stanu "forwarding". Niestety, po
					przejściu do stanu "forwarding" nie ma możliwości wywnioskowania ze stanu portu, czy port jest portem głównym,
					czy wyznaczonym. Przyczynia się to do wykazania niepowodzenia tej terminologii państwowej. RSTP oddziela rolę
					i stan portu, aby rozwiązać ten problem. Więcej informacji na temat tych portów omówiono w częśći poświęconej{' '}
					<a href="/stp">STP</a>. [1]
				</p>
			</>
		),
	},
	{
		header: 'Role portów',
		variant: 'body1',
		align: 'justify',
		paragraph: true,
		content: (
			<>
				<p>
					<b>Role portów głównych</b> - Port, który odbiera najlepszą jednostkę BPDU na moście, jest portem głównym
					(Root Port, RP). Znajduje się najbliżej mostu głównego (Root Bridge) pod względem kosztu ścieżki. STP wybiera
					pojedynczy most główny w całej zmostkowanej sieci (dla każdej sieci VLAN). Most główny wysyła jednostki BPDU,
					które są bardziej przydatne niż te, które wysyła każdy inny most. Most główny jest jedynym mostem w sieci,
					który nie ma portu głównego. Wszystkie inne mosty odbierają jednostki BPDU na co najmniej jednym porcie. [1]
				</p>
				<figure>
					<img src={role1} alt="Porty główne"></img>
					<figcaption>Porty główne</figcaption>
				</figure>
				<p>
					<b>Role portów wyznaczonych</b> - Port jest wyznaczony (designated), jeśli ma możlwość by wysłać najlepszą
					jednostkę BPDU w segmencie, do którego jest podłączony. Mosty 802.1D łączą ze sobą różne segmenty, takie jak
					segmenty sieci Ethernet, w celu utworzenia domeny z mostkiem. W danym segmencie może istnieć tylko jedna
					ścieżka prowadząca do mostu głównego. Jeśli są dwa, w sieci istnieje pętla pomostowa. Wszystkie mosty
					podłączone do danego segmentu nasłuchują jednostek BPDU każdego z nich i uzgadniają most, który wysyła
					najlepszą jednostkę BPDU, jako most wyznaczony dla tego segmentu. Port na tym moście, który odpowiada, jest
					portem wyznaczonym dla tego segmentu. [1]
				</p>

				<figure>
					<img src={role2} alt="Porty desygnowane"></img>
					<figcaption>Porty desygnowane</figcaption>
				</figure>
				<p>
					<b>Role portów alternatywnych i zapasowych</b> - Te dwie role odpowiadają stanowi blokowania (discarding)
					802.1D. Zablokowany port jest definiowany jako port inny niż wyznaczony czy główny. Odbiera on bardziej
					użyteczną jednostkę BPDU niż ta, którą wysyła w swoim segmencie. Port alternatywny odbiera bardziej przydatne
					jednostki BPDU z innego mostu, jest portem zablokowanym:
				</p>

				<figure>
					<img src={role3} alt="Porty alternatywne"></img>
					<figcaption>Porty alternatywne</figcaption>
				</figure>

				<p>
					{' '}
					Port zapasowy odbiera bardziej przydatne jednostki BPDU z tego samego mostu, na którym się znajduje, jest
					portem zablokowanym:
				</p>

				<figure>
					<img src={role4} alt="Port zapasowy"></img>
					<figcaption>Port zapasowy</figcaption>
				</figure>
				<p>
					To rozróżnienie zostało już wprowadzone wewnętrznie w standardzie 802.1D. Tak właśnie działa Cisco UplinkFast.
					Uzasadnieniem jest to, że port alternatywny zapewnia alternatywną ścieżkę do mostu głównego i dlatego może
					zastąpić port główny w przypadku awarii. Oczywiście port zapasowy zapewnia nadmiarową łączność z tym samym
					segmentem i nie może zagwarantować alternatywnej łączności z mostem głównym. Dlatego jest wykluczony z grupy
					łącza w górę. [1]
				</p>
			</>
		),
	},
	{
		header: 'Nowy format BPDU',
		variant: 'body1',
		align: 'justify',
		paragraph: true,
		content: (
			<>
				<p>
					RSTP wprowadził kilka zmian do formatu BPDU. Tylko dwie flagi, zmiana topologii (TC) i potwierdzenie TC (TCA),
					są zdefiniowane w standardzie 802.1D. RSTP wykorzystuje teraz wszystkie sześć bitów bajtu flagi. [1]
				</p>

				<figure>
					<img src={BDPU1} alt="BDPU1"></img>
				</figure>
			</>
		),
	},
	{
		header: 'Pełny widok diagramów Cisco BPDU, IEEE BPDU i BPDU [1]',
		variant: 'body1',
		align: 'justify',
		paragraph: true,
		content: <img src={BDPU2} alt="BDPU2"></img>,
	},
	{
		header: 'Źródło:',
		variant: 'body1',
		align: 'justify',
		paragraph: true,
		content: (
			<a href="https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/24062-146.html">
				[1] www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/24062-146.html [dostęp: 10.05.2021]
			</a>
		),
	},
];

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
			'W tej części omówione zostaną ulepszenia dodane w ramach RSTP w porównaniu do poprzedniego standardu 802.1D. ',
	},
	{
		header: 'Wstęp',
		variant: 'body1',
		align: 'justify',
		paragraph: true,
		content:
			'Standard 802.1D Spanning Tree Protocol (STP) został zaprojektowany w czasie, gdy przywrócenie łączności po przerwie w dostawie prądu w ciągu około minuty uznawano za wystarczającą wydajność. Wraz z pojawieniem się przełączania warstwy 3 w środowiskach LAN, mostkowanie konkuruje teraz z rozwiązaniami routowanymi, w których protokoły, takie jak Open Shortest Path First (OSPF) i Enhanced Interior Gateway Routing Protocol (EIGRP), są w stanie zapewnić alternatywną ścieżkę w krótszym czasie. Firma Cisco ulepszyła oryginalną specyfikację 802.1D o funkcje, takie jak Uplink Fast , Backbone Fast i Port Fast, aby przyspieszyć czas konwergencji sieci z mostem. Wadą jest to, że te mechanizmy są zastrzeżone i wymagają dodatkowej konfiguracji. Protokół Rapid Spanning Tree (RSTP; IEEE 802.1w) może być postrzegany jako ewolucja standardu 802.1D, a nie rewolucja. Terminologia 802.1D pozostaje zasadniczo taka sama. Większość parametrów pozostała niezmieniona, więc użytkownicy zaznajomieni z 802.1D mogą szybko i wygodnie skonfigurować nowy protokół. W większości przypadków RSTP działa lepiej niż zastrzeżone rozszerzenia Cisco bez dodatkowej konfiguracji. W standardzie 802.1w można również powrócić do standardu 802.1D w celu współdziałania ze starszymi mostami w oparciu o port. Zmniejsza to korzyści, które wprowadza. Nowa edycja standardu 802.1D, IEEE 802.1D-2004, zawiera standardy IEEE 802.1t-2001 i IEEE 802.1w.',
	},
	{
		header: 'Nowe stany i role portów',
		variant: 'body1',
		align: 'justify',
		paragraph: true,
		content: (
			<>
				<p>
					Standard 802.1D jest zdefiniowany w pięciu różnych stanach portów:
				</p>
				<ul>
					<li>disabled</li>
					<li>listening</li>
					<li>learning</li>
					<li>blocking</li>
					<li>forwarding</li>
				</ul>
				<p>
					Stan portu jest mieszany, niezależnie od tego, czy blokuje, czy
					przekazuje ruch, oraz rolę, jaką odgrywa w aktywnej topologii (port
					główny, port wyznaczony itd.). Na przykład z operacyjnego punktu
					widzenia nie ma różnicy między portem w stanie blokowania a portem w
					stanie nasłuchiwania. Oba odrzucają ramki i nie uczą się adresów MAC.
					Prawdziwa różnica polega na roli, jaką drzewo opinające przypisuje
					portowi. Można bezpiecznie założyć, że port nasłuchujący jest
					wyznaczony lub root i jest w drodze do stanu przekazywania. Niestety,
					po przejściu do stanu przekazywania nie ma możliwości wywnioskowania
					ze stanu portu, czy port jest portem głównym, czy wyznaczonym.
					Przyczynia się to do wykazania niepowodzenia tej terminologii
					państwowej. RSTP oddziela rolę i stan portu, aby rozwiązać ten
					problem.
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
					<b>Role portów głównych</b> - Port, który odbiera najlepszą jednostkę
					BPDU na moście, jest portem głównym. Jest to port znajdujący się
					najbliżej mostu głównego pod względem kosztu ścieżki. STA wybiera
					pojedynczy most główny w całej zmostkowanej sieci (dla każdej sieci
					VLAN). Most główny wysyła jednostki BPDU, które są bardziej przydatne
					niż te, które wysyła każdy inny most. Most główny jest jedynym mostem
					w sieci, który nie ma portu głównego. Wszystkie inne mosty odbierają
					jednostki BPDU na co najmniej jednym porcie.
				</p>
				<img src={role1} alt="role1"></img>
				<p>
					<b>Role portów wyznaczonych</b> - Port jest wyznaczony, jeśli może
					wysłać najlepszą jednostkę BPDU w segmencie, do którego jest
					podłączony. Mosty 802.1D łączą ze sobą różne segmenty, takie jak
					segmenty sieci Ethernet, w celu utworzenia domeny z mostkiem. W danym
					segmencie może istnieć tylko jedna ścieżka prowadząca do mostu
					głównego. Jeśli są dwa, w sieci istnieje pętla pomostowa. Wszystkie
					mosty podłączone do danego segmentu nasłuchują jednostek BPDU każdego
					z nich i uzgadniają most, który wysyła najlepszą jednostkę BPDU, jako
					most wyznaczony dla tego segmentu. Port na tym moście, który
					odpowiada, jest portem wyznaczonym dla tego segmentu.
				</p>
				<img src={role2} alt="role2"></img>
				<p>
					<b>Role portów alternatywnych i zapasowych</b> - Te dwie role
					odpowiadają stanowi blokowania 802.1D. Zablokowany port jest
					definiowany jako port inny niż wyznaczony czy główny. Odbiera on
					bardziej użyteczną jednostkę BPDU niż ta, którą wysyła w swoim
					segmencie. Port alternatywny odbiera bardziej przydatne jednostki BPDU
					z innego mostu, jest portem zablokowanym:
				</p>
				<img src={role3} alt="role3"></img>
				<p>
					{' '}
					Port zapasowy odbiera bardziej przydatne jednostki BPDU z tego samego
					mostu, na którym się znajduje, jest portem zablokowanym:
				</p>
				<img src={role4} alt="role4"></img>
				<p>
					To rozróżnienie zostało już wprowadzone wewnętrznie w standardzie
					802.1D. Tak właśnie działa Cisco UplinkFast. Uzasadnieniem jest to, że
					port alternatywny zapewnia alternatywną ścieżkę do mostu głównego i
					dlatego może zastąpić port główny w przypadku awarii. Oczywiście port
					zapasowy zapewnia nadmiarową łączność z tym samym segmentem i nie może
					zagwarantować alternatywnej łączności z mostem głównym. Dlatego jest
					wykluczony z grupy łącza w górę.
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
					RSTP wprowadził kilka zmian do formatu BPDU. Tylko dwie flagi, zmiana
					topologii (TC) i potwierdzenie TC (TCA), są zdefiniowane w standardzie
					802.1D. RSTP wykorzystuje teraz wszystkie sześć bitów bajtu flagi.
				</p>
				<img src={BDPU1} alt="BDPU1"></img>
			</>
		),
	},
	{
		header: 'Pełny widok diagramów Cisco BPDU, IEEE BPDU i BPDU',
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
				Understanding Rapid Spanning Tree Protocol (802.1w) - Cisco
			</a>
		),
	},
];

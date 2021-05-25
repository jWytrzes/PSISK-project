import MSTP1 from '../../utils/images/MSTP1.png';
import MSTP2 from '../../utils/images/MSTP2.png';
import MSTP3 from '../../utils/images/MSTP3.png';
import MSTPConf1 from '../../utils/images/MSTPConf1.png';
import MSTPConf2 from '../../utils/images/MSTPConf2.png';
import MSTPConf3 from '../../utils/images/MSTPConf3.png';

export const MSTPUtils = [
	{
		header: 'Wstęp',
		variant: 'body1',
		align: 'justify',
		paragraph: true,
		content:
			'Multiple Spanning Tree (MST) to standard IEEE zainspirowany autorską implementacją protokołu MISTP (Multiple Instances Spanning Tree Protocol) firmy Cisco. Do zrozumienia wymagana jest znajomość Rapid STP (RSTP) (802.1w), ponieważ MSTP w dużym stopniu opiera się na starszym standardzie STP, dlatego aby poprawnie zrozumieć jego działanie wymagana jest również znajomoś tej wersji (IEEE, 802.1w)',
	},
	{
		header: 'Gdzie używać MSTP:',
		variant: 'body1',
		align: 'justify',
		paragraph: true,
		content: (
			<>
				<p>
					Na diagaramie przedstawiono projekt, który zawiera przełącznik dostępu
					A z 1000 sieci VLAN nadmiarowo podłączonych do dwóch przełączników
					dystrybucyjnych, D1 i D2. Taka konfiguracja umożliwia użytkownikom
					łączenie się z przełącznikiem A, a administrator sieci stara się
					osiągnąć równoważenie obciążenia na łączach nadrzędnych przełącznika
					dostępu w oparciu o parzyste lub nieparzyste sieci VLAN lub dowolny
					inny odpowiedni schemat.
				</p>
				<img src={MSTP1} alt="MSTP1"></img>
				<p>
					W sekcjach poniżej przedstawiono kilka przypadków, w których w tej
					konfiguracji używane są różne typy protokołu STP:
				</p>
				<p>
					<b>PVST+</b> - W środowisku Cisco Per-VLAN Spanning Tree (PVST +)
					parametry drzewa rozpinającego są ustawiane w taki sposób, że połowa
					sieci VLAN jest przekazywana na każdym łączu nadrzędnym. Aby to łatwo
					osiągnąć, wybierz mostek D1 jako katalog główny dla sieci VLAN od 501
					do 1000, a mostek D2 jako katalog główny dla sieci VLAN od 1 do 500. W
					tej konfiguracji utrzymywana jest jedna instancja drzewa rozpinającego
					dla każdej sieci VLAN, co oznacza 1000 instancji tylko dla dwóch
					różnych ostatecznych topologii logicznych. To znacznie zużywa cykle
					procesora dla wszystkich przełączników w sieci (oprócz przepustowości
					używanej dla każdej instancji do wysyłania własnych jednostek danych
					protokołu mostu (ang. Bridge Protocol Data Units - BPDU)).
				</p>
				<p>
					<b>Standard 802.1q</b> - Oryginalny standard IEEE 802.1q definiuje
					znacznie więcej niż tylko trunking. Ten standard definiuje wspólne
					drzewo rozpinające (CST), które zakłada tylko jedną instancję drzewa
					rozpinającego dla całej sieci z mostem, niezależnie od liczby sieci
					VLAN. Jeśli CST zostanie zastosowany do topologii tego diagramu, wynik
					będzie podobny do diagramu pokazanego poniżej:
				</p>
				<img src={MSTP2} alt="MSTP2"></img>
				<p>
					<b>MST</b> - MST (IEEE 802.1s) łączy najlepsze aspekty zarówno z PVST
					+, jak i 802.1q. Kilka sieci VLAN można odwzorować na mniejszej
					liczbie wystąpień drzewa rozpinającego, ponieważ większość sieci nie
					potrzebuje więcej niż kilku logicznych topologii. W topologii opisanej
					na pierwszym diagramie istnieją tylko dwie różne końcowe topologie
					logiczne, więc naprawdę potrzebne są tylko dwie instancje drzewa
					opinającego. Nie ma potrzeby uruchamiania 1000 instancji.
				</p>
				<img src={MSTP3} alt="MSTP3"></img>
			</>
		),
	},
	{
		header: 'Region MSTP:',
		variant: 'body1',
		align: 'justify',
		paragraph: true,
		content: (
			<>
				<p>
					Jak wspomniano wcześniej, głównym ulepszeniem wprowadzonym przez MST
					jest to, że kilka sieci VLAN można odwzorować na jedną instancję
					drzewa rozpinającego. Rodzi to problem, w jaki sposób określić, która
					sieć VLAN ma być skojarzona z którą instancją. Dokładniej, jak
					oznaczyć jednostki BPDU, aby urządzenia odbierające mogły
					zidentyfikować instancje i sieci VLAN, do których stosuje się każde
					urządzenie.
				</p>
				<p>
					Problem jest nieistotny w przypadku standardu 802.1q, w którym
					wszystkie instancje są mapowane na unikalną instancję. W implementacji
					PVST + skojarzenie wygląda następująco:
				</p>
				<ul>
					<li>
						Różne sieci VLAN przenoszą jednostki BPDU dla swoich odpowiednich
						instancji (jedna jednostka BPDU na sieć VLAN).
					</li>
				</ul>
				<p>
					Cisco MISTP wysłał jednostkę BPDU dla każdej instancji, w tym listę
					sieci VLAN, za które jednostka BPDU była odpowiedzialna, w celu
					rozwiązania tego problemu. Jeśli przez pomyłkę dwa przełączniki
					zostały nieprawidłowo skonfigurowane i miały inny zakres sieci VLAN
					skojarzonych z tą samą instancją, protokołowi trudno było poprawnie
					odtworzyć tę sytuację.
				</p>
				<p>
					Komitet IEEE 802.1s przyjął znacznie łatwiejsze i prostsze podejście,
					które wprowadziło regiony MST. Jest to coś takiego jak odpowiednik
					Border Gateway Protocol (BGP) Autonomous Systems, czyli grupie
					przełączników umieszczonych pod wspólną administracją.
				</p>
			</>
		),
	},
	{
		header: 'Zalecana konfiguracja:',
		variant: 'body1',
		align: 'justify',
		paragraph: true,
		content: (
			<>
				<p>
					Ponieważ region MST replikuje teraz jednostki BPDU IST w każdej sieci
					VLAN na granicy, każda instancja PVST+ słyszy jednostkę BPDU z
					katalogu głównego IST (oznacza to, że katalog główny znajduje się
					wewnątrz regionu MST). Zaleca się, aby katalog główny IST miał wyższy
					priorytet niż jakikolwiek inny most w sieci, tak aby katalog główny
					IST stał się katalogiem głównym dla wszystkich różnych instancji PVST
					+, jak pokazano na poniższym diagramie:
				</p>
				<img src={MSTPConf1} alt="MSTPConf1"></img>
				<p>
					Na tym diagramie przełącznik C to PVST+ nadmiarowo podłączony do
					regionu MST. Katalog główny IST jest katalogiem głównym dla wszystkich
					instancji PVST +, które istnieją na przełączniku C. W rezultacie
					Switch C blokuje jedno ze swoich łączy nadrzędnych, aby zapobiec
					pętlom. W tym konkretnym przypadku interakcja między PVST + a regionem
					MST jest optymalna, ponieważ:
				</p>
				<ul>
					<li>
						Koszty portów Uplink przełącznika C można dostroić, aby uzyskać
						równoważenie obciążenia różnych sieci VLAN na portach łączy uplink
						(ponieważ przełącznik C obsługuje jedno drzewo opinające na sieć
						VLAN, przełącznik ten może wybrać, które bloki portów uplink są
						określane na podstawie poszczególnych sieci VLAN).
					</li>
					<li>
						UplinkFast może być używany na przełączniku C w celu uzyskania
						szybkiej zbieżności w przypadku awarii łącza w górę.
					</li>
				</ul>
			</>
		),
	},
	{
		header: 'Alternatywna konfiguracja (niezalecana)',
		variant: 'body1',
		align: 'justify',
		paragraph: true,
		content: (
			<>
				<p>
					Inną możliwością jest ustawienie regionu IST jako katalogu głównego
					dla absolutnie żadnej instancji PVST +. Oznacza to, że wszystkie
					instancje PVST + mają lepszy katalog główny niż instancja IST, jak
					pokazano na poniższym diagramie:
				</p>
				<img src={MSTPConf2} alt="MSTPConf2"></img>
				<p>
					Ten przypadek odpowiada rdzeniu PVST + i warstwie dostępu lub
					dystrybucji MST, co jest raczej rzadkim scenariuszem. W przypadku
					ustanowienia mostu głównego poza regionem występują następujące wady w
					porównaniu z poprzednio zalecaną konfiguracją:
				</p>
				<ul>
					<li>
						W regionie MST działa tylko jedna instancja drzewa rozpinającego,
						która współdziała ze światem zewnętrznym. Zasadniczo oznacza to, że
						port graniczny może blokować lub przekazywać tylko dla wszystkich
						sieci VLAN. Innymi słowy, nie jest możliwe równoważenie obciążenia
						między dwoma łączami w górę regionu, które prowadzą do przełącznika
						C. Łącze w górę na przełączniku B dla instancji będzie blokować
						wszystkie sieci VLAN, podczas gdy przełącznik A będzie przekazywał
						dane dla wszystkich sieci VLAN.
					</li>
					<li>
						Taka konfiguracja nadal umożliwia szybką konwergencję w regionie.
						Jeśli łącze w górę na przełączniku A zawiedzie, należy uzyskać
						szybkie przełączenie na łącze w górę na innym przełączniku. Chociaż
						sposób, w jaki IST zachowuje się w regionie, aby cały region MST
						przypominał most CST, nie został szczegółowo omówiony, można sobie
						wyobrazić, że przełączenie w regionie nigdy nie jest tak wydajne,
						jak przełączenie na jednym moście.
					</li>
				</ul>
			</>
		),
	},
	{
		header: 'Nieprawidłowa konfiguracja:',
		variant: 'body1',
		align: 'justify',
		paragraph: true,
		content: (
			<>
				<p>
					Chociaż mechanizm emulacji PVST+ zapewnia łatwą i bezproblemową
					interoperacyjność między MST i PVST+, mechanizm ten oznacza, że
					​​każda konfiguracja inna niż dwie wspomniane wcześniej jest
					nieprawidłowa. Oto podstawowe zasady, których należy przestrzegać, aby
					uzyskać udaną interakcję MST i PVST +:
				</p>
				<ol>
					<li>
						Jeśli most MST jest katalogiem głównym, musi on być głównym
						elementem wszystkich sieci VLAN.
					</li>
					<li>
						Jeśli most PVST+ jest root'em, ten most musi być root'em dla
						wszystkich sieci VLAN (w tym CST, który zawsze działa w sieci VLAN
						1, niezależnie od natywnej sieci VLAN, gdy CST uruchamia PVST+).
					</li>
					<li>
						Symulacja kończy się niepowodzeniem i generuje komunikat o błędzie,
						jeśli most MST jest katalogiem głównym CST, a mostek PVST+ jest
						katalogiem głównym jednej lub kilku innych sieci VLAN. Niepowodzenie
						symulacji powoduje przełączenie portu granicznego w niespójny tryb
						główny.
					</li>
				</ol>
				<img src={MSTPConf3} alt="MSTPConf3"></img>
				<p>
					Na tym diagramie most A w regionie MST jest katalogiem głównym dla
					wszystkich trzech instancji PVST+ z wyjątkiem jednej (czerwonej sieci
					VLAN). Most C jest głównym elementem czerwonej sieci VLAN. Załóżmy, że
					pętla utworzona w czerwonej sieci VLAN, gdzie most C jest root'em,
					zostaje zablokowana przez mostek B. Oznacza to, że mostek B jest
					przeznaczony dla wszystkich sieci VLAN z wyjątkiem czerwonej. Region
					MST nie jest w stanie tego zrobić. Port graniczny może blokować lub
					przekazywać tylko dla wszystkich sieci VLAN, ponieważ w regionie MST
					działa tylko jedno drzewo opinające ze światem zewnętrznym. Tak więc,
					gdy mostek B wykryje lepszą jednostkę BPDU na swoim porcie granicznym,
					most wywołuje ochronę jednostki BPDU w celu zablokowania tego portu.
					Port jest umieszczony w niespójnym trybie root. Dokładnie ten sam
					mechanizm sprawia, że ​​most A blokuje swój port graniczny.
				</p>
			</>
		),
	},
	{
		header: 'Źródło:',
		variant: 'body1',
		align: 'justify',
		paragraph: true,
		content: (
			<a href="https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/24062-146.html">
				[1]
				www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/24062-146.html
				[dostęp: 10.05.2021]
			</a>
		),
	},
];

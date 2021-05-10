import MSTP1 from '../../utils/images/MSTP1.png';
import MSTP2 from '../../utils/images/MSTP2.png';
import MSTP3 from '../../utils/images/MSTP3.png';

export const MSTPUtils = [
	{
		header: 'Wstęp',
		variant: 'body1',
		align: 'justify',
		paragraph: true,
		content:
			'Multiple Spanning Tree (MST) to standard IEEE zainspirowany autorską implementacją protokołu MISTP (Multiple Instances Spanning Tree Protocol) firmy Cisco. Do zrozumienia wymagana jest znajomość Rapid STP (RSTP) (802.1w), ponieważ MSTP w dużym stopniu opiera się na tym innym standardzie IEEE.',
	},
	{
		header: 'Gdzie używać MSTP:',
		variant: 'body1',
		align: 'justify',
		paragraph: true,
		content: (
			<>
				<p>
					Ten diagram przedstawia wspólny projekt, który zawiera przełącznik
					dostępu A z 1000 sieci VLAN nadmiarowo podłączonych do dwóch
					przełączników dystrybucyjnych, D1 i D2. W tej konfiguracji użytkownicy
					łączą się z przełącznikiem A, a administrator sieci zazwyczaj stara
					się osiągnąć równoważenie obciążenia na łączach nadrzędnych
					przełącznika dostępu w oparciu o parzyste lub nieparzyste sieci VLAN
					lub dowolny inny schemat uznany za odpowiedni.
				</p>
				<img src={MSTP1} alt="MSTP1"></img>
				<p>
					W sekcjach poniżej przedstawiono przykładowe przypadki, w których w
					tej konfiguracji używane są różne typy protokołu STP:
				</p>
				<p>
					<b>PVST+</b> - W środowisku Cisco Per-VLAN Spanning Tree (PVST +)
					parametry drzewa rozpinającego są ustawiane w taki sposób, że połowa
					sieci VLAN jest przekazywana na każdym łączu nadrzędnym. Aby to łatwo
					osiągnąć, wybierz mostek D1 jako katalog główny dla sieci VLAN od 501
					do 1000, a mostek D2 jako katalog główny dla sieci VLAN od 1 do 500. W
					tej konfiguracji utrzymywana jest jedna instancja drzewa rozpinającego
					dla każdej sieci VLAN, co oznacza 1000 instancji tylko dla dwóch
					różnych ostatecznych topologii logicznych. To znacznie marnuje cykle
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
					drzewa opinającego. Rodzi to problem, w jaki sposób określić, która
					sieć VLAN ma być skojarzona z którą instancją. Dokładniej, jak
					oznaczyć jednostki BPDU, aby urządzenia odbierające mogły
					zidentyfikować instancje i sieci VLAN, do których stosuje się każde
					urządzenie.
				</p>
				<ul>
					Problem jest nieistotny w przypadku standardu 802.1q, w którym
					wszystkie instancje są mapowane na unikalną instancję. W implementacji
					PVST + skojarzenie wygląda następująco:
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
					odtworzyć tę sytuację. Komitet IEEE 802.1s przyjął znacznie łatwiejsze
					i prostsze podejście, które wprowadziło regiony MST. Pomyśl o regionie
					jako o odpowiedniku Border Gateway Protocol (BGP) Autonomous Systems,
					czyli grupie przełączników umieszczonych pod wspólną administracją.
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
			<a href="https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/24062-146.html">
				Understanding Multiple Spanning Tree Protocol (802.1s) - Cisco
			</a>
		),
	},
	{
		header: 'Alternatywna konfiguracja (niezalecana)',
		variant: 'body1',
		align: 'justify',
		paragraph: true,
		content: (
			<a href="https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/24062-146.html">
				Understanding Multiple Spanning Tree Protocol (802.1s) - Cisco
			</a>
		),
	},
	{
		header: 'Nieprawidłowa konfiguracja:',
		variant: 'body1',
		align: 'justify',
		paragraph: true,
		content: (
			<a href="https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/24062-146.html">
				Understanding Multiple Spanning Tree Protocol (802.1s) - Cisco
			</a>
		),
	},
	{
		header: 'Źródło:',
		variant: 'body1',
		align: 'justify',
		paragraph: true,
		content: (
			<a href="https://www.cisco.com/c/en/us/support/docs/lan-switching/spanning-tree-protocol/24062-146.html">
				Understanding Multiple Spanning Tree Protocol (802.1s) - Cisco
			</a>
		),
	},
];

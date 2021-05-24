import { Box, Typography } from '@material-ui/core';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import bpdu from '../../utils/images/bpdu.jpg';
import stp1 from '../../utils/images/stp1.jpg';
import stp2 from '../../utils/images/stp2.jpg';
import stp3 from '../../utils/images/stp3.jpg';
import stp4 from '../../utils/images/stp4.jpg';
import stp5 from '../../utils/images/stp5.jpg';
import stp6 from '../../utils/images/stp6.jpg';
import stp7 from '../../utils/images/stp7.jpg';
import stp8 from '../../utils/images/stp8.jpg';

const STP = () => {
	return (
		<MainTemplate title="Spanning Tree Protocol (STP)">
			<Typography component="h2" variant="h3">
				Spanning Tree Protocol (STP)
			</Typography>
			<br />
			<br />
			<Typography component="h3" variant="h6">
				Motywacja używania STP
			</Typography>
			<br />
			<Box mb="10px">
				<Typography variant="body1">
					We współczesnych sieciach komputerowych niezbędna jest nadmiarowość
					(redundancja). Kilka połączeń kablowych pomiędzy przełącznikami
					pozwala na zwiększenie niezawodności sieci - w przypadku awarii jednej
					ze ścieżek, zasoby nadal są dostępne dzięki istneniu alternatywnej
					trasy.
				</Typography>
			</Box>
			<Box mb="10px">
				<Typography variant="body1">
					Niestety nadmiarowość powoduje inne problemy. Stworzenie cykli w
					topologii może skutkować:
				</Typography>
				<ul>
					<li>powstaniem burzy rozgłoszeniowej</li>
					<li>niestabilnością bazy adresów MAC</li>
					<li>wielokrotną transmisją ramki</li>
				</ul>
			</Box>
			<br />
			<Typography component="h3" variant="h6">
				Burza rozgłoszeniowa
			</Typography>
			<br />
			<Box mb="10px">
				<Typography variant="body1">
					Jest to anomalia w sieci, w której przesyłanie normalnego ruchu może
					zostać uniemożliwione, przez nagormadzenie ruchu broadcastowego,
					wysyłanego przez przełączniki bez końca. Gdy w pętli na poziomie
					warstwy drugiej sieci krąży zbyt wiele ramek, media transmisyjne i
					urządzenia sieciowe są tak obciążone, a to powoduje awarię sieci.
				</Typography>
			</Box>
			<br />
			<br />
			<Typography component="h3" variant="h6">
				Niestabilność bazy adresów MAC
			</Typography>
			<br />
			<Box mb="10px">
				<Typography variant="body1">
					Jest to sytuacja, w której przesyłanie normalnego ruchu w sieci może
					zostać zakłócone, przez brak zasobów przełącznika, który jest
					spowodowany próbami ustabilizowania tablicy adresów MAC. Niestabilność
					wynika z odbierania kopii tej samej ramki na różnych portach
					przełącznika (ramki ARP nie posiadają atrybutu TTL - time to live).
				</Typography>
			</Box>
			<br />
			<br />
			<Typography component="h3" variant="h6">
				Wielokrotna transmisja ramki
			</Typography>
			<br />
			<Box mb="10px">
				<Typography variant="body1">
					To sytuacja, w której urządzenie docelowe może odbierać wiele kopii
					tej samej ramki, co może powodować błędy, ponieważ wiele protokołów
					nie jest w stanie obsłużyć odbierania wielu kopii jednej transmisji.
				</Typography>
			</Box>
			<br />
			<br />
			<Typography component="h3" variant="h6">
				Spanning Tree Protocol
			</Typography>
			<br />
			<Box mb="10px">
				<Typography variant="body1">
					Wyżej opisane problemy można rozwiązać poprzez wykrycie pętli w
					topologii i zablokowanie odpowiednich interfejsów tak, aby
					wyeliminować alternatywne trasy. Tym zajmują się protokoły STP.
					Poniżej opisano oryginalną specyfikację protokołu - 802.1D.
				</Typography>
			</Box>
			<br />
			<br />
			<Typography component="h3" variant="h6">
				Algorytm spanning tree
			</Typography>
			<br />
			<Box mb="10px">
				<Typography variant="body1">
					Aby wyznaczyć w sieci trasę bez pętli, algorytm musi najpierw
					wyznaczyć most główny (root bridge), czyli urządzenie, które zostanie
					korzeniem drzewa rozpinającego, względem którego będą wykonywane
					następne obliczenia.
				</Typography>
			</Box>
			<Box mb="10px">
				<Typography variant="body1">
					Podstawowym elementem działania algorytmu STP są ramki BPDU (Bridge
					Protocol Data Unit).
				</Typography>
			</Box>
			<figure>
				<img src={bpdu} alt="Pola zawarte w ramce BPDU" />
				<figcaption>Pola zawarte w ramce BPDU</figcaption>
			</figure>
			<Box mb="10px">
				<Typography variant="body1">
					O wyznaczeniu mostu głównego decydują dwie wartości: adres MAC oraz
					priorytet danego przełącznika. Zestawienie tych wartości jest zawarte
					w prace BPDU w polu Bridge ID.
				</Typography>
			</Box>
			<Box mb="10px">
				<Typography variant="body1">
					Tak więc w pierwszym etapie przełączniki wysyłają między sobą ramki
					BPDU. Przełącznik z najniższym Bridge ID zostaje mostem głównym. Jeśli
					priorytet przełączników jest taki sam, niższy Bridge ID to ten z
					najniższym numerycznie adresem MAC.
				</Typography>
			</Box>
			<Box mb="10px">
				<Typography variant="body1">
					Kolejnym krokiem jest określenie typów i stanów portów przełączników.
					Port może być typu:
				</Typography>
				<ul>
					<li>
						desygnowany (designated port) - port w stanie forwarding, normalnie
						działający port, tego typu są wszystkiego porty mosu głównego
					</li>
					<li>
						główny (root port) - port bezpośrednio połączony z mostem głównym
						(urządzenia innego niż root bridge)
					</li>
					<li>
						alternatywny (alternative port) - połącenie alternatywne, w trybie
						blokowania (przekazuje ramki BPDU, nie przekazuje ramek
						komunikacyjnych, może zostać uruchomiony po wykryciu zmiany
						topologii
					</li>
				</ul>
				<Typography variant="body1">
					Każdy port może znajdować się w jednym z czterech stanów:
				</Typography>

				<ul>
					<li>nasłuchiwanie (listening) – przesyła tylko ramki BPDU</li>
					<li>
						blokowanie (blocking) – port nie przekazuje ramek komunikacyjnych,
						ale potrafi przekazywać ramki BPDU
					</li>
					<li>
						uczenie (learning) – port uczy się adresów MAC podłączonych urządzeń
					</li>
					<li>
						przekazywanie (forwarding) – port przekazuje ramki komunikacyjne i
						BPDU
					</li>
				</ul>
			</Box>
			<Box mb="10px">
				<Typography variant="body1">
					Kolejny etap polega na wyznaczeniu najkrótszych ścieżek do mostu
					głównego. Najkrótsza ścieżka to taka, którą najszybciej można dotrzeć
					do root bridge'a. Koszt ścieżki jest obliczany na podstawie
					przepustowości łącza: koszt łącza * ilość łączy. <br />W STP (802.1D)
					poszczególne prędkości portów mają przyporządkowane następujące
					koszty:
				</Typography>
				<ul>
					<li>10 Mb/s – koszt 100</li>
					<li> 100 Mb/s – koszt 19</li>
					<li> 1 Gb/s – koszt 4</li>
					<li> 10 Gb/s – koszt 2</li>
					<li> 20 Gb/s – koszt 1</li>
					<li> 100 Gb/s – koszt 1</li>
					<li> 1 Tb/s – koszt 1</li>
					<li> 10 Tb/s – koszt 1</li>
				</ul>
			</Box>
			<br />
			<br />
			<Typography component="h3" variant="h6">
				Prykład
			</Typography>
			<br />
			<Box mb="10px">
				<Typography variant="body1">Bazowa topologia:</Typography>
				<figure>
					<img
						src={stp1}
						alt="Topologia bazowa z przełącznikami połączonymi w trójkąt"
					/>
					<figcaption>
						Topologia bazowa z przełącznikami połączonymi w trójkąt
					</figcaption>
				</figure>
			</Box>
			<Box mb="10px">
				<Typography variant="body1">
					Przesyłanie BPDU między przełącznikami w celu wybrania mostu głównego:
				</Typography>
				<figure>
					<img src={stp2} alt="Przełączniki przesyłające między sobą BPDU" />
					<figcaption>Przełączniki przesyłające między sobą BPDU</figcaption>
				</figure>
			</Box>
			<Box mb="10px">
				<Typography variant="body1">Wybór mostu głównego:</Typography>
				<figure>
					<img src={stp3} alt="Przełącznik A zostaje wybrany Root Bridgem" />
					<figcaption>
						Przełącznik A zostaje wybrany Root Bridgem (
						<a
							target="_blank"
							rel="noreferrer"
							href="https://www.nastykusieci.pl/stp-wprowadzenie/"
						>
							źródło
						</a>
						)
					</figcaption>
				</figure>
			</Box>
			<Box mb="10px">
				<Typography variant="body1">
					Ustalenie statusów portów mostu głównego:
				</Typography>
				<figure>
					<img
						src={stp4}
						alt="Porty na Root Bridge’u uzyskują status Designated Portów"
					/>
					<figcaption>
						Porty na Root Bridge’u uzyskują status Designated Portów
					</figcaption>
				</figure>
			</Box>
			<Box mb="10px">
				<Typography variant="body1">
					Ustalenie statusów portów głównych:
				</Typography>
				<figure>
					<img
						src={stp5}
						alt="Porty w kierunku Root Bridge’a uzyskują status Root Portów"
					/>
					<figcaption>
						Porty w kierunku Root Bridge’a uzyskują status Root Portów
					</figcaption>
				</figure>
			</Box>
			<Box mb="10px">
				<Typography variant="body1">
					Ustalenie portów głównych na przełącznikach:
				</Typography>
				<figure>
					<img
						src={stp6}
						alt="Biorąc pod uwagę prędkości poszczególnych interfejsów przełącznik B ma najniższy koszt do Root Bridge'a na porcie Gi 0/3, który przez to staje się Root Portem"
					/>
					<figcaption>
						Biorąc pod uwagę prędkości poszczególnych interfejsów przełącznik B
						ma najniższy koszt do Root Bridge’a na porcie Gi 0/3, który przez to
						staje się Root Portem
					</figcaption>
				</figure>
			</Box>
			<Box mb="10px">
				<Typography variant="body1">
					Porównanie Bridge ID pozostałych portów:
				</Typography>
				<figure>
					<img
						src={stp7}
						alt="Port Gi 0/4 na przełączniku B uzyskuje status Designated z uwagi na niższy Bridge ID przełącznika B względem przełącznika C"
					/>
					<figcaption>
						Port Gi 0/4 na przełączniku B uzyskuje status Designated z uwagi na
						niższy Bridge ID przełącznika B względem przełącznika C
					</figcaption>
				</figure>
			</Box>
			<Box mb="10px">
				<Typography variant="body1">
					Zablokowanie portu alternatywnego, wyeliminowanie pętli:
				</Typography>
				<figure>
					<img
						src={stp8}
						alt="Port Gi 0/5 na przełączniku C uzyskuje status Non-Designated i zostaje zablokowany w celu wyeliminowania pętli w sieci"
					/>
					<figcaption>
						Port Gi 0/5 na przełączniku C uzyskuje status Non-Designated i
						zostaje zablokowany w celu wyeliminowania pętli w sieci
					</figcaption>
				</figure>
			</Box>
			<Box mt="30px">
				<Typography component="h3" variant="h6">
					Źródła
				</Typography>
				<ul>
					<li>
						<a
							href="https://www.nastykusieci.pl/stp-wprowadzenie/"
							target="_blank"
							rel="noreferrer"
						>
							https://www.nastykusieci.pl/stp-wprowadzenie/
						</a>
					</li>
					<li>
						<a
							href="https://pasja-informatyki.pl/sieci-komputerowe/przelacznik-cisco-stp-spanning-tree-protocol/"
							target="_blank"
							rel="noreferrer"
						>
							https://pasja-informatyki.pl/sieci-komputerowe/przelacznik-cisco-stp-spanning-tree-protocol/
						</a>
					</li>

					<li>
						<a
							href="https://www.juniper.net/documentation/us/en/software/junos/stp-l2/topics/topic-map/spanning-tree-overview.html#id-how-spanning-tree-protocols-work__d19591e56"
							target="_blank"
							rel="noreferrer"
						>
							https://www.juniper.net/documentation/us/en/software/junos/stp-l2/topics/topic-map/spanning-tree-overview.html#id-how-spanning-tree-protocols-work__d19591e56
						</a>
					</li>
				</ul>
			</Box>
		</MainTemplate>
	);
};

export default STP;

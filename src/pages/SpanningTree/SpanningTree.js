import { Box, Typography } from '@material-ui/core';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import st from '../../utils/images/st.png';

const SpanningTree = () => {
	return (
		<MainTemplate title="Spanning Tree (drzewo rozpinające)">
			<Typography component="h2" variant="h3">
				Spanning Tree (drzewo rozpinające)
			</Typography>
			<br />
			<br />
			<Typography component="h3" variant="h6">
				Drzewo rozpinające
			</Typography>
			<br />
			<Box mb="10px">
				<Typography variant="body1">
					<b>Drzewem</b> nazywa się każdy graf nieskierowany, który jest acykliczny (nie zawiera
					cykli) i spójny (między każdą parą wierzchołków istnieje łącząca je ścieżka). Wynika z
					tego, że w drzewie z każdego wierzchołka można dotrzeć do każdego innego wierzchołka
					wyłącznie jednym sposobem.
				</Typography>
			</Box>
			<Box mb="10px">
				<Typography variant="body1">
					W teorii grafów <b>drzewem rozpinającym T</b> nazywa się podgraf drzewa G, czyli drzewo,
					które zawiera wszystkie wierzchołki grafu G, a zbiór jego krawędzi jest podzbiorem zbioru
					krawędzi grafu G. Drzewo rozpinające powstaje przez usunięcie z grafu krawędzi, które
					tworzą cykl.
				</Typography>
			</Box>

			<figure>
				<img src={st} alt="Przykład drzew rozpinających w grafie" />
				<figcaption>
					Przykład drzew rozpinających w grafie (
					<a
						target="_blank"
						rel="noreferrer"
						href="https://pl.wikipedia.org/wiki/Drzewo_rozpinaj%C4%85ce"
					>
						źródło
					</a>
					)
				</figcaption>
			</figure>
			<br />
			<br />
			<Typography component="h3" variant="h6">
				Minimalne drzewo rozpinające
			</Typography>
			<Box mb="10px" mt="10px">
				<Typography variant="body1">
					<b>Minimalne drzewo rozpinające</b> jest inaczej nazywane
					<b> drzewem rozpinającym o minmalnej wadze</b> grafu ważonego nieskierowanego. Wagę drzewa
					oblicza się sumując wartości wag krawędzi wchodzących w skład tego drzewa.
				</Typography>
			</Box>
			<Box mb="10px">
				<Typography variant="body1">
					<b>Graf ważony</b> to taki graf, którego każda krawędź ma przypisaną jakąś wartość
					liczbową - <b> wagę</b>. Waga krawędzi może oznaczać np. przepustowość krawędzi lub jej
					długość.
				</Typography>
			</Box>
			<Box mb="10px">
				<Typography variant="body1">
					<b>Liczba cyklomatryczna</b> to mininalna liczba krawędzi niezbędna do usunięcia w
					nieskierowanym grafie, tak aby wyeliminować z niego wszystkie cykle. Jeśli graf zawiera
					<i> v</i> wierzchołków, to drzewo rozpinające zawsze będzie miało
					<i> v-1</i> krawędzi. Jeśli graf zawiera <i>e</i>
					krawędzi, aby powstało drzewo rozpinające, należy usunąć z grafu
					<i> e-v+1</i> krawędzi.
				</Typography>
			</Box>
			<Box mb="10px">
				<Typography variant="body1">
					Do wyznaczenia minimalnego drzewa rozpinającego można wykorzystać
					<b> algorytm Kruskala</b>. Wykorzystuje on strategię zachłanną, która zawsze zwraca
					optymalne rozwiązanie. Ten algorytm polega na dodawaniu do rozwiązania najkrótszych
					możliwych krawędzi. Kroki algorytmu:
				</Typography>
				<ol>
					<li>Sortowanie krawędzi rosnąco wedlug ich wag, umieszczenie ich w kolejce.</li>
					<li>Pobranie z kolejki krawędzi o najmniejszej wadze oraz usunięcie jej z kolejki.</li>
					<li>
						Dołączenie krawędzi do rozwiązania, jeśli wierzchołki łączone przez nią należą do
						różnych drzew (dołączenie nie spowoduje stworzenia cyklu).
					</li>
					<li>
						Jeśli liczba krawędzi zawartych w rozwiązaniu wynosi <i> v-1</i>, zakończenie działanie
						algorytmu. Jesli nie, dalsze wykonywanie algorytmu od punktu 2.
					</li>
				</ol>
			</Box>

			<Box mt="30px">
				<Typography component="h3" variant="h6">
					Źródła
				</Typography>
				<ul>
					<li>
						<a
							href="https://pl.wikipedia.org/wiki/Drzewo_rozpinaj%C4%85ce"
							target="_blank"
							rel="noreferrer"
						>
							https://pl.wikipedia.org/wiki/Drzewo_rozpinaj%C4%85ce
						</a>
					</li>
					<li>
						<a href="https://pl.wikipedia.org/wiki/Drzewo_(matematyka)">
							https://pl.wikipedia.org/wiki/Drzewo_(matematyka)
						</a>
					</li>
				</ul>
			</Box>
		</MainTemplate>
	);
};

export default SpanningTree;

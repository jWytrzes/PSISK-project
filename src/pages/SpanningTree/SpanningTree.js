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
					<b>Drzewem</b> nazywa się każdy graf nieskierowany, który jest
					acykliczny (nie zawiera cykli) i spójny (między każdą parą
					wierzchołków istnieje łącząca je ścieżka). Wynika z tego, że w drzewie
					z każdego wierzchołka można dotrzeć do każdego innego wierzchołka
					wyłącznie jednym sposobem.
				</Typography>
			</Box>
			<Box mb="10px">
				<Typography variant="body1">
					W teorii grafów <b>drzewem rozpinającym T</b> nazywa się podgraf
					drzewa G, czyli drzewo, które zawiera wszystkie wierzchołki grafu G, a
					zbiór jego krawędzi jest podzbiorem zbioru krawędzi grafu G.
				</Typography>
			</Box>

			<figure>
				<img src={st} alt="Przykład drzew rozpinających w grafie" />
				<figcaption>
					Przykład drzew rozpinających w grafie (
					<a
						target="_blank"
						href="https://pl.wikipedia.org/wiki/Drzewo_rozpinaj%C4%85ce"
					>
						źródło
					</a>
					)
				</figcaption>
			</figure>

			<Box mt="30px">
				<Typography component="h3" variant="h6">
					Źródła
				</Typography>
				<ul>
					<li>
						<a
							href="https://pl.wikipedia.org/wiki/Drzewo_rozpinaj%C4%85ce"
							target="_blank"
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

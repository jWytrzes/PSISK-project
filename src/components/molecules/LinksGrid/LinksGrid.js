import {
	Button,
	CardActions,
	CardContent,
	Grid,
	Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { StyledGrid, StyledCard } from './styles-LinksGrid';

const cards = [
	{
		title: 'Spanning Tree (drzewo rozpinające)',
		description: 'Ogólne informacje na temat drzew rozpinających.',
		link: '/spanningTree',
	},
	{
		title: 'Spanning Tree Protocol (STP)',
		description: 'Działanie protokołu STP.',
		link: '/stp',
	},
	{
		title: 'Rapid Spanning Tree Protocol (RSTP)',
		description: 'Działanie protokołu RSTP.',
		link: '/rstp',
	},
	{
		title: 'Multiple Spanning Tree Protocol (MSTP)',
		description: 'Działanie protokołu MSTP.',
		link: '/mstp',
	},
];

const LinksGrid = () => {
	return (
		<StyledGrid container spacing={3}>
			{cards.map((card) => (
				<Grid xs={12} sm={6} item={true} key={card.title}>
					<StyledCard>
						<Link to={card.link}>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h3">
									{card.title}
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									{card.description}
								</Typography>
							</CardContent>
							<CardActions>
								<Button size="small" color="primary">
									Otwórz
								</Button>
							</CardActions>
						</Link>
					</StyledCard>
				</Grid>
			))}
		</StyledGrid>
	);
};

export default LinksGrid;

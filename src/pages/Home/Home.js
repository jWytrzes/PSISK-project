import { Typography } from '@material-ui/core';
import LinksGrid from '../../components/molecules/LinksGrid/LinksGrid';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';

const Home = () => {
	return (
		<MainTemplate title="STP | Materiały edukacyjne">
			<Typography component="h2" variant="h3">
				STP | Materiały edukcyjne
			</Typography>
			<br />
			<LinksGrid />
		</MainTemplate>
	);
};

export default Home;

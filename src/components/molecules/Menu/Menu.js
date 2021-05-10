import { useLocation } from 'react-router-dom';
import routes from '../../../utils/routes';
import { StyledLi, StyledLink, StyledUl } from './styles-Menu';

const menuItems = [
	{
		path: routes.home,
		label: 'Strona główna',
	},
	{
		path: routes.spanningTree,
		label: 'Spanning tree (drzewo rozpinające)',
	},
	{
		path: routes.stp,
		label: 'Spanning Tree Protocol',
	},
	{
		path: routes.rstp,
		label: 'Rapid Spanning Tree Protocol',
	},
	{
		path: routes.mstp,
		label: 'Multiple Spanning Tree Protocol',
	},
];

const Menu = () => {
	const location = useLocation();

	return (
		<nav>
			<StyledUl>
				{menuItems.map((item) => (
					<StyledLi key={item.path}>
						<StyledLink
							to={item.path}
							active={item.path === location.pathname ? 1 : 0}
						>
							{item.label}
						</StyledLink>
					</StyledLi>
				))}
			</StyledUl>
		</nav>
	);
};

export default Menu;

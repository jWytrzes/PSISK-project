import { Container, Divider, IconButton, Toolbar } from '@material-ui/core';
import { Menu as MenuIcon, ChevronLeft } from '@material-ui/icons';
import { useState } from 'react';
import Menu from '../../components/molecules/Menu/Menu';
import {
	StyledAppBar,
	StyledButtonWrapper,
	StyledDrawer,
	StyledDrawerContent,
	StyledMain,
	StyledTypography,
} from './MainTemplate-styles';

const MainTemplate = ({ title, children }) => {
	const [isDrawerOpen, setIsDraweOpen] = useState(true);

	return (
		<div>
			<StyledAppBar open={isDrawerOpen} position="absolute">
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={() => setIsDraweOpen(!isDrawerOpen)}
					>
						<MenuIcon />
					</IconButton>
					<StyledTypography component="h1" variant="h6">
						{title}
					</StyledTypography>
				</Toolbar>
			</StyledAppBar>

			<StyledDrawer
				variant="persistent"
				open={isDrawerOpen}
				onClose={() => setIsDraweOpen(false)}
			>
				<StyledButtonWrapper>
					<IconButton onClick={() => setIsDraweOpen(false)}>
						<ChevronLeft />
					</IconButton>
				</StyledButtonWrapper>
				<Divider />
				<StyledDrawerContent>
					<Menu />
				</StyledDrawerContent>
			</StyledDrawer>
			<StyledMain open={isDrawerOpen}>
				<Container maxWidth="md">{children}</Container>
			</StyledMain>
		</div>
	);
};

export default MainTemplate;

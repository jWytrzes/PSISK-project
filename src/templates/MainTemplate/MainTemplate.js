import {
	Container,
	Divider,
	Hidden,
	IconButton,
	Toolbar,
} from '@material-ui/core';
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
	const [isDrawerOpen, setIsDrawerOpen] = useState(true);

	const drawer = (
		<>
			<StyledButtonWrapper>
				<IconButton onClick={() => setIsDrawerOpen(false)}>
					<ChevronLeft />
				</IconButton>
			</StyledButtonWrapper>
			<Divider />
			<StyledDrawerContent>
				<Menu />
			</StyledDrawerContent>
		</>
	);

	const container =
		window !== undefined ? () => window.document.body : undefined;

	return (
		<div>
			<StyledAppBar open={isDrawerOpen} position="absolute">
				<Toolbar>
					<IconButton
						edge="start"
						color="inherit"
						aria-label="open drawer"
						onClick={() => setIsDrawerOpen(!isDrawerOpen)}
					>
						<MenuIcon />
					</IconButton>
					<StyledTypography component="h1" variant="h6">
						{title}
					</StyledTypography>
				</Toolbar>
			</StyledAppBar>
			<div>
				<Hidden mdUp={true} implementation="js">
					<StyledDrawer
						container={container}
						variant="temporary"
						anchor={'left'}
						open={isDrawerOpen}
						onClose={() => setIsDrawerOpen(false)}
						ModalProps={{
							keepMounted: true,
						}}
					>
						{drawer}
					</StyledDrawer>
				</Hidden>
				<Hidden smDown={true} implementation="css">
					<StyledDrawer
						variant="persistent"
						open={isDrawerOpen}
						onClose={() => setIsDrawerOpen(false)}
					>
						{drawer}
					</StyledDrawer>
				</Hidden>
			</div>
			<StyledMain open={isDrawerOpen}>
				<Container maxWidth="md">{children}</Container>
			</StyledMain>
		</div>
	);
};

export default MainTemplate;

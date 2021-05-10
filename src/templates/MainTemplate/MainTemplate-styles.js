import styled from 'styled-components';
import { AppBar, Drawer, Typography } from '@material-ui/core';

const drawerWidth = 250;

export const StyledAppBar = styled(AppBar)`
	transition: ${({ theme }) => theme.transitions.create(['margin', 'width'])};

	@media (min-width: 992px) {
		margin-left: ${({ open }) => (open ? `${drawerWidth}px` : 0)};
		width: ${({ open }) => (open ? `calc(100% - ${drawerWidth}px)` : '100%')};
	}
`;

export const StyledDrawer = styled(Drawer)`
	.MuiDrawer-paper {
		width: ${drawerWidth}px;
	}
`;

export const StyledMain = styled.main`
	flex-grow: 1;
	padding: theme.spacing(3);
	transition: ${({ theme }) => theme.transitions.create(['margin', 'width'])};

	padding: 88px 0 24px;

	@media (min-width: 992px) {
		margin-left: ${({ open }) => (open ? `${drawerWidth}px` : 0)};
		width: ${({ open }) => (open ? `calc(100% - ${drawerWidth}px)` : '100%')};
	}
`;

export const StyledButtonWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
	height: 63px;
	align-items: center;
	padding: 10px 24px;
`;

export const StyledDrawerContent = styled.div`
	padding: 16px;
`;

export const StyledTypography = styled(Typography)`
	margin-left: 24px;
`;

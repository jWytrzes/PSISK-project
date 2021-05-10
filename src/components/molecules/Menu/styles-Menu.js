import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledUl = styled.ul`
	margin: 0;
	padding: 0;
	list-style: none;
`;

export const StyledLi = styled.li`
	margin: 10px 0;
`;

export const StyledLink = styled(Link)`
	padding: 10px 0;
	text-decoration: none;
	color: ${({ theme, active }) =>
		active ? theme.palette.primary.main : theme.palette.text.primary};
	font-weight: ${({ active }) => (active ? 700 : 400)};
	display: block;
	transition: color 0.25s ease-in, font-weight 0.25s ease-in;
`;

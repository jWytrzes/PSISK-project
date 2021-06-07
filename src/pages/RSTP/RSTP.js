import { Box, Typography } from '@material-ui/core';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import { RSTPUtils } from './RSTP.utils';
import './RSTP.css';

const RSTP = () => {
	return (
		<MainTemplate title="Rapid Spanning Tree Protocol (RSTP)">
			<Box mb="10px">
				<Typography component="h2" variant="h3">
					Rapid Spanning Tree Protocol (RSTP)
				</Typography>
			</Box>

			{RSTPUtils.map((element) => (
				<>
					<Typography component="h3" variant="h6" align="justify">
						{element.header}
					</Typography>
					<Typography variant={element.variant} align={element.align} paragraph={element.paragraph}>
						{element.content}
					</Typography>
				</>
			))}
		</MainTemplate>
	);
};

export default RSTP;

import { Typography } from '@material-ui/core';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import { RSTPUtils } from './RSTP.utils';

const RSTP = () => {
	return (
		<MainTemplate title="Rapid Spanning Tree Protocol (RSTP)">
			<Typography component="h2" variant="h3">
				Rapid Spanning Tree Protocol (RSTP)
			</Typography>
			<Typography component="body1">{RSTPUtils.introduction}</Typography>
		</MainTemplate>
	);
};

export default RSTP;

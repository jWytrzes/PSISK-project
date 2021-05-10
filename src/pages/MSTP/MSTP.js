import { Typography } from '@material-ui/core';
import MainTemplate from '../../templates/MainTemplate/MainTemplate';
import { MSTPUtils } from './MSTP.utils';
import './MSTP.css';

const MSTP = () => {
	return (
		<MainTemplate title="Multiple Spanning Tree Protocol (MSTP)">
			<Typography component="h2" variant="h3">
				Multiple Spanning Tree Protocol (MSTP)
			</Typography>
			{MSTPUtils.map((element) => (
				<>
					<Typography component="h3" variant="h6" align="justify">
						{element.header}
					</Typography>
					<Typography
						variant={element.variant}
						align={element.align}
						paragraph={element.paragraph}
					>
						{element.content}
					</Typography>
				</>
			))}
		</MainTemplate>
	);
};

export default MSTP;

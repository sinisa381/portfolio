import React from 'react'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import styled from '@emotion/styled'
import { mq } from './globals'

const Blank = styled(Paper)`
margin-bottom: 1rem; 
padding:0.5rem 1rem; 
width:100%; 
display:inline-block; 
color:tomato; 
/* background-color:#8f71ff; */
/* background-color:#f5c7f7; */

${mq[0]}{
  width:50%;
}
`

function PaperSheet(props) {
	return (
		<div>
			<Blank elevation={1}>
				<Typography variant='h5' component='h3'>
					This is a sheet of paper.
				</Typography>
				<Typography component='p' style={{ color: '#000000' }}>
					Paper can be used to build surface or other elements for your application.
				</Typography>
			</Blank>
		</div>
	)
}

export default PaperSheet

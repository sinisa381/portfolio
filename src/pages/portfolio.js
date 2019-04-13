import React from 'react'
// import { graphql } from 'gatsby'
import Projects from '../components/projects'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from '@emotion/styled'
import Paper from '@material-ui/core/Paper'
import { FlexBox } from '../components/shared'

const Papir = styled(Paper)`
  padding:1rem;
`

const Portfolio = ({ data, location }) => {
	return (
		<React.Fragment>
			<Layout location={location}>
				<SEO title='Home' keywords={[ `web developer`, `react`, `front end`, `developer` ]} />
				<FlexBox>
					<Papir />
					<Papir>Portfolio</Papir>
					<Projects />
				</FlexBox>
			</Layout>
		</React.Fragment>
	)
}
export default Portfolio

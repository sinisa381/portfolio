import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import styled from '@emotion/styled'
import { MDXRenderer } from 'gatsby-mdx'
import useMdx from '../components/hooks/use-mdx'
import BckG from 'gatsby-background-image'
import { FlexBox, Container, Title } from '../components/shared'
import SpringButton from '../components/springs/button'

export default props => {
	const posts = useMdx()
	return (
		<React.Fragment>
			<Layout location={props.location}>
				<SEO title='Home' keywords={[ `web developer`, `react`, `front end`, `developer` ]} />
				<Container>
					<FlexBox>
						<MDXstyle>
							{posts.map((post, i) => (
								<div key={i}>
									<Title>{post.title && post.title}</Title>
									<MDXRenderer>{post.body}</MDXRenderer>
									<Bck fluid={post.sharp.fluid} Tag='div' />
									<FlexBox justify='space-between' align='center'>
										<SpringButton path={post.path}>check the site here &rarr;</SpringButton>
										{console.log(post.github)}
										{post.github !== 'sry' && <Wrapper>
											<Github src='/GitHub-Mark-64px.png'  width='30px' height='30px'>
											</Github>
												<LinkToGithub href='https://github.com/sinisa381/hotels'/>
										</Wrapper> }
									</FlexBox>
								</div>
							))}
						</MDXstyle>
					</FlexBox>
				</Container>
			</Layout>
		</React.Fragment>
	)
}

//   allFile(
//  	filter: { extension: { regex: "/(jpeg|jpg|gif|png)/" }, sourceInstanceName: { eq: "portfolio" } }
//  ) {
//  	edges {
//  		node {
//  			childImageSharp {
//  				fluid(maxWidth: 1200) {
//  					...GatsbyImageSharpFluid
//  				}
//  			}
//  		}
//  	}
//  }

const Bck = styled(BckG)`
box-shadow: 0 0 4px rgba(0, 0, 0, .125);
  height: 0;
  background-size: cover;
  padding-top: 50%;
  background-repeat:no-repeat;
`
const MDXstyle = styled.div`
	p {
		font-family: Clear Sans;
	}

	h2 {
		font-family: Clear Sans;
	}
`

const Github = styled.img``;

const LinkToGithub = styled.a`
	position:absolute;
	top:0; bottom:0; left:0; right:0;
	&:hover{
		cursor:pointer;
	}
`;
 
const Wrapper = styled.div`
	position:relative;
`;
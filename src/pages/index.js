import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/core'
import { colors } from '../components/globals/colors'
import TextLoop from 'react-text-loop'
import { graphql } from 'gatsby'
import { IconsBox, Grid, Title, Text, Container, Abbr } from '../components/shared'
import { mq } from '../components/globals'
import ReactUndraw from '../images/undraw/undraw_react_y7wq.svg'
import Layout from '../components/layout'
import Img from 'gatsby-image'
import { FaReact, FaJsSquare, FaHtml5, FaCss3Alt } from 'react-icons/fa'
import GatsbyIcon from '../images/gatsby-icon.png'
export default props => {
	const whitelaptop = props.data.whitelaptop.childImageSharp.fluid
	const blacklaptop = props.data.blacklaptop.childImageSharp.fluid
	return (
		<Layout location={props.location} port={'tralala'}>
			<Container>
				<Grid>
					<ReactUndraw css={css(`max-height:70vh;@media (max-width:900px){ max-height:30vh; margin-bottom:20px; } width:100%; display:block;`)} />
					<div>
						<Title color='#000'>Fast and reliable</Title>
						<Text color='#000'>
							Hello! My name is Sinisa Colic. I have around {new Date().getFullYear() - 2018} years of experience with the web development. I am{' '}
							<TextLoop>
								{[ 'Frontend', 'Backend', 'Fullstack' ].map(text => (
									<Text color={colors.gold} key={text}>
										{text}
									</Text>
								))}
							</TextLoop>{' '}
							developer. My better qualities are Frontend.This is my portfolio, the website is built with{' '}
							<A href='https://www.gatsbyjs.org/' rel='noopener noreferrer' target='_blank'>
								Gatsby
							</A>. In this project I used{' '}
							<A href='https://emotion.sh/docs/introduction' rel='noopener noreferrer' target='_blank'>
								Emotion
							</A>{' '}
							to help me with CSS. All the pictures you see are from{' '}
							<A href='https://www.pexels.com/' rel='noopener noreferrer' target='_blank'>
								Pexels
							</A>, SVG's are from{' '}
							<A href='https://undraw.co/' rel='noopener noreferrer' target='_blank'>
								Undraw
							</A>{' '}
							and these cool animations are from{' '}
							<A href='https://lottiefiles.com/' rel='noopener noreferrer' target='_blank'>
								Lottie
							</A>{' '}
							files.
						</Text>
						<IconsBox>
							<Abbr title='react'>
								<FaReact color='#53C1DE' size='2rem' />
							</Abbr>
							<Abbr title='gatsby'>
								<img
									src={GatsbyIcon}
									style={{ width: '2rem', height: '2rem', margin: 0 }}
									alt='gatsby icon'
								/>
							</Abbr>
							<Abbr title='javascript'>
								<FaJsSquare color='#FCCF11' size='2rem' />
							</Abbr>
							<Abbr title='html'>
								<FaHtml5 color='#E34F26' size='2rem' />
							</Abbr>
							<Abbr title='css'>
								<FaCss3Alt color='#4498B5' size='2rem' />
							</Abbr>
						</IconsBox>
					</div>
				</Grid>
			</Container>
			<div style={{ textAlign: 'center' }}>
				<Title>Browse with the speed</Title>
			</div>
			<Container>
				<Flexbox>
					<StyledImage>{whitelaptop && <OmgImage fluid={whitelaptop} alt='white laptop' />}</StyledImage>
					<StyledImage>{blacklaptop && <OmgImage fluid={blacklaptop} alt='black laptop' />}</StyledImage>
				</Flexbox>
			</Container>
		</Layout>
	)
}

export const Query = graphql`
	query {
		parallax: file(relativePath: { eq: "adventure-clouds.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1200) {
					...GatsbyImageSharpFluid
				}
			}
		}
		hotel: file(relativePath: { eq: "code.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1200) {
					...GatsbyImageSharpFluid
				}
			}
		}
		whitelaptop: file(relativePath: { eq: "black-contemporary-desk-296115.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1200) {
					...GatsbyImageSharpFluid
				}
			}
		}
		blacklaptop: file(relativePath: { eq: "black.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 1200) {
					...GatsbyImageSharpFluid
				}
			}
		}
	}
`

const Flexbox = styled.div`
	display: block;
	${mq[2]} {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`

const StyledImage = styled.div`
	width: 100wv;
	height: 100wv;
	${mq[2]} {
		width: 50%;
		height: 20rem;
	}
`
const OmgImage = styled(Img)`
width:100%;
height:100%;
`
const A = styled.a`
	color: blue;
	font-family: Clear Sans;
	
`

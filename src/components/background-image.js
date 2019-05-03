import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import styled from '@emotion/styled'
import { mq, theme } from '../components/globals'

import { StyledBackgroundSection } from '../components/shared'

const BackgroundSection = () => (
	<StaticQuery
		query={graphql`
			{
				allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/src/portfolio/" } }) {
					edges {
						node {
							html
						}
					}
				}
			}
		`}
		render={data => {
			return (
				<Portfolio>
					{data.allMarkdownRemark.edges.map(({ node }) => (
						<div dangerouslySetInnerHTML={{ __html: node.html }} />
					))}
				</Portfolio>
			)
		}}
	/>
)

export default BackgroundSection

const Portfolio = styled.div`
	width: 90%;
	display: grid;
	grid-template-columns: 1fr;
	justify-content: center;
	align-content: center;
	text-align: center;
	 img {
		border-radius: 7px;
		cursor: pointer;
	}
	p {
		font-family: 'Hind madurai', sans-serif;
		font-size: .875rem;
		${mq[1]} {
			font-size: 1rem;
		}
		${mq[2]} {
			font-size: 1.25rem;
		}
	}
`

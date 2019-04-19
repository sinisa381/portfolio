import React from 'react'
import styled from '@emotion/styled'
import { graphql } from 'gatsby'
import { FlexBox, Title, Text, HomeSection } from '../components/shared'
import { mq } from '../components/globals'
import reactUndraw from '../images/undraw/undraw_react_y7wq.svg'
import Layout from '../components/layout'
import { MDXProvider } from '@mdx-js/tag'
import Hello from '../mdx/aloha.mdx'

class BlogPostTemplate extends React.Component {
	render() {
		const data = this.props.data.allMarkdownRemark.edges.forEach(({ node }) => {
			return node.frontmatter.title
		})
		return (
			<Layout data={data} location={this.props.location} port={'tralala'}>
				<HomeSection style={{}}>
					<Image
						src={reactUndraw}
						alt='react picture'
						style={{
							width: '18rem',
							height: '18rem'
						}}
					/>
					<div style={{ width: '50%' }}>
						<Box>
							<Title>Fast and reliable</Title>
							<Text>
								Hello and <span>welcome</span>. I'm a frontend developer specialized in React and Gatsby
								combined with Contentful or Wordpress. Happy hunting!
							</Text>
						</Box>
					</div>
				</HomeSection>
			</Layout>
		)
	}
}

export default BlogPostTemplate
export const Query = graphql`
	query {
		allMarkdownRemark {
			edges {
				node {
					frontmatter {
						title
					}
				}
			}
		}
	}
`

const Image = styled.img`margin: 0;`
const Box = styled.div`
	border: none;
	margin-left: 1rem;
	padding: 0rem;
	padding-left: 0rem;
	${mq[2]} {
		margin-left: 2rem;
		padding: 2rem;
		padding-left: 2rem;
		border-left: 1px solid black;
	}
`

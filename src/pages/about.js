import React from 'react'
import Layout from '../components/layout'
import { Paper } from '@material-ui/core'
import version_control from '../images/undraw/yellow/undraw_version_control_9bpv.svg'
import activity from '../images/undraw/yellow/undraw_developer_activity_bv83.svg'
import typing from '../images/undraw/yellow/undraw_code_typing_7jnv.svg'
import development from '../images/undraw/yellow/undraw_development_ouy3.svg'
import { Image, Container } from '../components/shared'
export default ({ location }) => (
	<Layout location={location}>
		<Container>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi deserunt iusto quod nihil accusamus a,
			perspiciatis ut vero inventore qui voluptatibus itaque officia blanditiis expedita pariatur impedit adipisci
			illum quis explicabo sapiente similique rerum! Consectetur harum dolor exercitationem culpa quis?
			<Image src={typing} alt='react picture' />
			<Image src={activity} alt='react picture' />
			<Image src={version_control} alt='react picture' />
			<Image src={development} alt='react picture' />
		</Container>
	</Layout>
)

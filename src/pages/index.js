import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section, Image } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.AtsplHeader />
		<Section
			padding="140px 0 140px 0"
			background="#FFFFFF url(https://images.unsplash.com/photo-1533670803344-afe2e89e5493?auto=format&fit=crop&w=1500&q=80) 100% 100% /100% no-repeat scroll padding-box"
			min-height="100vh"
			lg-background="#fff"
			md-padding="96px 0 70px 0"
			sm-padding="72px 0 70px 0"
		>
			<Override slot="SectionContent" flex-direction="row" flex-wrap="wrap" />
			<Box
				display="flex"
				width="50%"
				flex-direction="column"
				justify-content="center"
				align-items="flex-start"
				lg-width="100%"
				lg-align-items="center"
				lg-margin="0px 0px 60px 0px"
				sm-margin="0px 0px 40px 0px"
				sm-padding="0px 0px 0px 0px"
			>
				<Text
					margin="0px 0px 24px 0px"
					color="--dark"
					font="--headline1"
					lg-text-align="center"
					sm-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					md-font="normal 700 42px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
				>
					Comfort is Now Beautiful
				</Text>
				<Text margin="0px 0px 40px 0px" color="--darkL2" font="--lead" lg-text-align="center">
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
				</Text>
				<Box display="flex" sm-flex-direction="column" sm-text-align="center">
					<Link
						href="#"
						padding="12px 24px 12px 24px"
						color="--dark"
						background="--color-secondary"
						text-decoration-line="initial"
						font="--lead"
						border-radius="8px"
						margin="0px 16px 0px 0px"
						sm-margin="0px 0px 16px 0px"
						sm-text-align="center"
						hover-background="--color-orange"
						hover-transition="background-color 0.2s ease-in-out 0s"
						transition="background-color 0.2s ease-in-out 0s"
						flex-direction="row"
					>
						Get Started
					</Link>
					<Link
						href="#"
						padding="12px 24px 12px 24px"
						color="--darkL1"
						text-decoration-line="initial"
						font="--lead"
						border-radius="8px"
						margin="0px 16px 0px 0px"
						border-width="2px"
						border-style="solid"
						border-color="--color-darkL1"
						sm-margin="0px 0px 0px 0px"
						sm-text-align="center"
						lg-margin="0px 0px 0px 0px"
						hover-transition="border 0.2s ease-in-out 0s"
						hover-border-color="--color-orange"
						transition="border 0.2s ease-in-out 0s"
					>
						Check our video
					</Link>
				</Box>
			</Box>
			<Box
				display="flex"
				width="50%"
				justify-content="center"
				overflow-y="hidden"
				overflow-x="hidden"
				lg-width="100%"
			/>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Box
				padding="80px 72px 80px 72px"
				background="rgba(0, 0, 0, 0) url(https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/Image%20%289%29.png?v=2021-08-26T14:56:08.732Z) 0% 0% /cover no-repeat scroll padding-box"
				border-radius="24px"
				margin="0px 0px 64px 0px"
				sm-padding="60px 36px 60px 36px"
			>
				<Box
					width="60%"
					display="flex"
					flex-direction="column"
					md-width="100%"
					md-align-items="center"
					md-justify-content="center"
					md-text-align="center"
					lg-width="100%"
				>
					<Text
						margin="0px 0px 16px 0px"
						font="--headline2"
						color="--dark"
						md-text-align="center"
						sm-font="normal 700 32px/1.2 &quot;Source Sans Pro&quot;, sans-serif"
					>
						Setting up a workplace in the office and at home
					</Text>
					<Text margin="0px 0px 0px 0px" font="--base" color="--greyD3" md-text-align="center">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
					</Text>
				</Box>
			</Box>
			<Box
				display="grid"
				lg-flex-wrap="wrap"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="36px 4%"
				lg-grid-template-columns="repeat(2, 1fr)"
				sm-grid-template-columns="1fr"
				sm-grid-gap="12px"
			>
				<Box display="flex" flex-direction="column" sm-margin="0px 0px 30px 0px" sm-width="100%">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						1
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Bring your ideas
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" sm-width="100%" sm-margin="0px 0px 30px 0px">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						2
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Bring your ideas
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" sm-margin="0px 0px 30px 0px" sm-width="100%">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						3
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Bring your ideas
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" sm-width="100%" sm-margin="0px 0px 0px 0px">
					<Text
						padding="7px 24px 8px 24px"
						margin="0px 0px 32px 0px"
						font="--headline3"
						border-radius="50px"
						align-items="center"
						display="flex"
						justify-content="center"
						color="--light"
						width="49px"
						height="49px"
						background="--color-indigo"
						sm-margin="0px 0px 20px 0px"
						lg-margin="0px 0px 18px 0px"
					>
						4
					</Text>
					<Text margin="0px 0px 18px 0px" color="--darkL2" font="--headline3" lg-text-align="left">
						Bring your ideas
					</Text>
					<Text margin="0px 0px 0px 0px" color="--greyD2" font="--base" lg-text-align="left">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna{" "}
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				padding="0px 0px 0px 0px"
				lg-padding="0px 30px 0px 0px"
				md-padding="0px 0px 0px 0px"
				md-margin="0px 0px 30px 0px"
			>
				<Image max-width="340px" src="https://uploads.quarkly.io/612695d67f2b1f001fa06c1f/images/image%2052.png?v=2021-08-27T23:20:31.207Z" md-margin="0px 0px 20px 0px" />
				<Text margin="0px 0px 0px 0px" color="--darkL2" font="--base">
					Curabitur lobortis id lorem
				</Text>
			</Box>
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
			>
				<Text margin="0px 0px 40px 0px" color="--dark" font="--headline2" md-margin="0px 0px 30px 0px">
					Hey! I’m writing this sentence because
				</Text>
				<Text margin="0px 0px 40px 0px" color="--darkL2" font="--base">
					Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum vestibulum. Suspendisse fermentum sem sagittis ante venenatis egestas quis vel justo. Maecenas semper suscipit nunc, sed aliquam sapien convallis eu. Nulla ut turpis in diam dapibus consequat.
				</Text>
				<Text margin="0px 0px 0px 0px" color="--darkL2" font="--base">
					Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum vestibulum. Suspendisse fermentum sem sagittis ante venenatis egestas quis vel justo. Maecenas semper suscipit nunc, sed aliquam sapien convallis eu. Nulla ut turpis in diam dapibus consequat.
				</Text>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" sm-padding="60px 0 60px 0" background="--color-dark">
			<Override slot="SectionContent" flex-direction="row" md-flex-wrap="wrap" />
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
				padding="0px 80px 0px 0px"
				lg-padding="0px 30px 0px 0px"
				md-padding="0px 0px 0px 0px"
			>
				<Text margin="0px 0px 0px 0px" color="--light" font="--headline2" md-margin="0px 0px 30px 0px">
					Hey! I’m writing this sentence because
				</Text>
			</Box>
			<Box
				width="50%"
				display="flex"
				flex-direction="column"
				justify-content="space-between"
				md-width="100%"
			>
				<Text margin="0px 0px 0px 0px" color="#F7FBFF" font="--base">
					Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet eros id lacus vestibulum vestibulum. Suspendisse fermentum sem sagittis ante venenatis egestas quis vel justo. Maecenas semper suscipit nunc, sed aliquam sapien convallis eu. Nulla ut turpis in diam dapibus consequat.
				</Text>
			</Box>
		</Section>
		<Components.AtsplFooter />
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
		<RawHtml>
			<style place={"endOfHead"} rawKey={"645b17200822dc002139c7e3"}>
				{":root {\n  box-sizing: border-box;\n}\n\n* {\n  box-sizing: inherit;\n}"}
			</style>
		</RawHtml>
	</Theme>;
});
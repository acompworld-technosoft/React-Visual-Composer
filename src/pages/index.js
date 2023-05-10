import React from "react";
import theme from "theme";
import { Theme, Link, Text, Box, Section } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { RawHtml, Override } from "@quarkly/components";
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
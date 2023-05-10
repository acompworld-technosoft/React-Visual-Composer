import React from "react";
import { useOverrides, Override, SocialMedia } from "@quarkly/components";
import { Text, Link, Box, Section } from "@quarkly/widgets";
const defaultProps = {
	"background": "--color-darkL1",
	"padding": "80px 0 80px 0",
	"quarkly-title": "Footer"
};
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"display": "flex",
			"align-items": "center",
			"flex-direction": "column",
			"justify-content": "center",
			"padding": "0px 200px 0px 200px",
			"lg-padding": "0px 0px 0px 0px"
		}
	},
	"text": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 30px 0px",
			"font": "--headline1",
			"color": "--light",
			"text-align": "center",
			"sm-font": "normal 700 62px/1.2 \"Source Sans Pro\", sans-serif",
			"children": <>
				Contacts{"  "}
			</>
		}
	},
	"text1": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 48px 0px",
			"font": "--lead",
			"color": "--light",
			"text-align": "center",
			"children": "Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor id sit amet risus. Nam tempus vel odio vitae aliquam."
		}
	},
	"link": {
		"kind": "Link",
		"props": {
			"href": "mailto:blank?hello@company.com",
			"text-align": "center",
			"color": "--light",
			"font": "--headline3",
			"text-decoration-line": "initial",
			"margin": "0px 0px 16px 0px",
			"children": "hello@company.com"
		}
	},
	"link1": {
		"kind": "Link",
		"props": {
			"href": "tel:1234567899",
			"text-align": "center",
			"color": "--light",
			"font": "--headline3",
			"text-decoration-line": "initial",
			"margin": "0px 0px 16px 0px",
			"children": "(123) 456-78-99"
		}
	},
	"text2": {
		"kind": "Text",
		"props": {
			"margin": "0px 0px 48px 0px",
			"font": "--headline3",
			"color": "--light",
			"text-align": "center",
			"children": "4998 Hanover Street, New York, 10011"
		}
	},
	"socialMedia": {
		"kind": "SocialMedia",
		"props": {
			"facebook": "https://www.facebook.com/quarklyapp/",
			"twitter": "https://twitter.com/quarklyapp",
			"instagram": "https://instagram.com/instagram",
			"margin": "0px 0px 0px 0px"
		}
	},
	"socialMediaOverride": {
		"kind": "Override",
		"props": {
			"slot": "link",
			"border-radius": "50%",
			"color": "--grey",
			"hover-color": "--light",
			"background": "#191E22",
			"hover-background": "--color-primary",
			"margin": "0 5px 0 5px",
			"padding": "5x 5px 5px 5px",
			"width": "48px",
			"height": "48px",
			"align-items": "center",
			"display": "flex",
			"justify-content": "center",
			"hover-transition": "background-color 0.2s ease-in-out 0s",
			"transition": "background-color 0.2s ease-in-out 0s"
		}
	},
	"socialMediaOverride1": {
		"kind": "Override",
		"props": {
			"slot": "icon",
			"color": "--light",
			"padding": "7px 7px 7px 7px",
			"border-width": "0px",
			"size": "38px",
			"border-radius": "50px"
		}
	}
};

const AtsplFooter = props => {
	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Section {...rest}>
		<Box {...override("box")}>
			<Text {...override("text")} />
			<Text {...override("text1")} />
			<Link {...override("link")} />
			<Link {...override("link1")} />
			<Text {...override("text2")} />
			<SocialMedia {...override("socialMedia")}>
				<Override {...override("socialMediaOverride")} />
				<Override {...override("socialMediaOverride1")} />
			</SocialMedia>
		</Box>
		{children}
	</Section>;
};

Object.assign(AtsplFooter, { ...Section,
	defaultProps,
	overrides
});
export default AtsplFooter;
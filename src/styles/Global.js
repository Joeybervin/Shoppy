/* http://meyerweb.com/eric/tools/css/reset/ 
  v2.0 | 20110126
  License: none (public domain)
*/

import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

/* Reset part : clean all the browsers default styling configurations */
* {
	box-sizing: border-box;
}

html, body, div, span, h1, h2, h3, p, a,img,ol, ul, li, form, label, legend, article, aside, figure, figcaption, footer, header, nav, output, section {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
html, body {
	overflow-x: hidden;
	
}
body {
	line-height: 1;
}
a {
	text-decoration: none;
}
ol, ul {
	list-style: none;
}

/* Make images easier to work with */
img,
picture {
max-width: 100%;
display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
font: inherit;
}

/* Global style : using theme */
/* police */

/* https://matthewjamestaylor.com/responsive-font-size */
body{
	font-size: calc(${(props) => props.theme.fontSize.paragraphe.regular } + 0.390625vw);
	line-height: calc(${(props) => props.theme.fontSize.paragraphe.regular} + 1.5vw);
	font-family: ${(props) => props.theme.fonts.primaryFont || props.theme.fonts.secondaryFont};
	color: ${(props) => props.theme.colors.primaryTextColor};
}
a, p , li, h1, h2, h3 {
padding: ${(props) => props.theme.paddings.textPadding}px;
color : ${(props) => props.theme.colors.primaryTextColor};
}
h1, h2, h3 {
font-weight: ${(props) => props.theme.fontWeight.bold};
}
h1 { 
	font-size: calc(${(props) => props.theme.fontSize.title.h1 } + 0.390625vw);
	line-height: calc(${(props) => props.theme.fontSize.title.h1 } + 1vw);
}
h2 { 
	font-size: calc(${(props) => props.theme.fontSize.title.h2 } + 0.390625vw);
	line-height: calc(${(props) => props.theme.fontSize.title.h2 } + 1vw);
	margin-bottom : 35px;
}
h3 {
	font-size: calc(${(props) => props.theme.fontSize.title.h3 } + 0.390625vw);
	line-height: calc(${(props) => props.theme.fontSize.title.h3 } + 1vw);
}

@media screen and (min-width : 425px) {


}

@media screen and (min-width : 768px) {

}

@media screen and (min-width : 1024px) {

}

`;

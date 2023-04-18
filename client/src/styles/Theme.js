

export const theme = {

    
    colors: {
        /* general */
        primary : '#7777FF',
        primaryAlpha : '#7777FF40',
        secondary : '#FF2B80 ',
        tertiary: '#303030',
        black: '#000000',
        white: '#ffffff',
        /* background */
        background: '#ffffff',
        /* text */
        primaryTextColor: '#000000',
        secondaryTextColor: '#777777',
        tertiaryTextColor: '#6666CC', 
        inputPlaceholder: '#C2C2C2',
        darkGrayText: '#303030',
        
        /* buttons */
        buttonsStateColors : {
            hover : '#5C38FC' ,
            active: "#FF2B80",
            disabledDark : "#777777",
            disabledLight : "#C7C7C7",
            focus: ""
        },
        /* notifications */
        danger: '#FD3838',
        warning : '#FFA115',
        success: '#00644F',
        /* bonus */
        yellow : '#FFE344',
        purple : '#7C44FF',
        neoGreen : '#AEFF44',
        lightBlue : '#92AFFF',
        darkBlue : '#0F3292',
        pink: '#FF44FF',
        orange : '#FF7944',
    },
    fonts: {
        primaryFont: 'Poppins',
        secondaryFont: 'sans-serif',
        titleFonth1 : '',
    },
    fontSize : {
        paragraphe : {
            small : 'clamp(0.75rem, 0.7321rem + 0.0893vw, 0.8125rem);', /* min: 12px | max: 13px */
            regular : 'clamp(0.9375rem, 0.8839rem + 0.2679vw, 1.125rem);;', /* min: 15px | max: 16px */
            medium : 'clamp(1rem, 0.9643rem + 0.1786vw, 1.125rem);', /* min: 16px | max: 18px */
            large : 'clamp(1.125rem, 1.0536rem + 0.3571vw, 1.375rem);', /* 16px */
        },
        title : {
            h1 : 'clamp(1.8125rem, 1.5rem + 1.6667vw, 3rem)', /* min: 16px | max: 18px */
            h2 : 'clamp(1.125rem, 1.0536rem + 0.3571vw, 1.375rem);', /* min: 16px | max: 18px */
            h3 : 'clamp(0.875rem, 0.8393rem + 0.1786vw, 1rem);', /* min: 16px | max: 18px */
        }
    },
    fontWeight : {
        thin : 100,
        regular : 300,
        bold : 600,
        extraBold : 800,
    },
    
    paddings: {
        textPadding: 5,
        
    },
    margins: {
    
    },
    sizes: {
        navbar : '75px',
    }
}
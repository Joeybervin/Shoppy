
import styled from "styled-components";

export const StyledHome= styled.div`


.home {
    position : relative;
    max-width: 100%;

    section {
        margin: 70px auto;
        text-align: center;
    }
}

// =============> SECTION : COLLABORATIONS 

.collaborationSection {

    div {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 7px;
    }

    img {
        height : 40px;
        max-width: 90px;
        padding: 10px;
    }
    
}

// =============> SECTION : MEMBERSHIP

.membershipSection {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color : violet ;
    min-width: 100vw;
    min-height : 380px;
    padding: 8px;

    background: linear-gradient(90deg, #FC466B 0%, #3F5EFB 100%);

    
    h2 {
        margin-bottom : 0;
        line-height: 1em;
    }

    div {
        display: flex;
        flex-direction : column;
        justify-content: center;
        align-items: center;
        min-height : 380px;
        width : 100%;
        background-color: #FFFFFF;
    }

    p {
        line-height: 1em;
        margin-bottom : 15px;
        font-size: clamp(0.6875rem, 0.6518rem + 0.1786vw, 0.8125rem);
    }

}

// =============> SECTION : CATEGORIES

.categoriesSection {

    max-width: 100vw;
    overflow: hidden;
    
    h2 {
        text-align: left;
        margin-left: 15px;
    }

    // -------> slider
    .slideContainer {

        position: relative;
        border-left : 1px solid white;
        border-right : 1px solid white;
            
        &::before {
            content : '';
            position: absolute;
            left : -2px;
            width : 65px;
            height: 100%;
            z-index: 2;
            background: rgb(255,255,255);
            background:linear-gradient(90deg, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 100%);
        }

        .slide {
            width: 100%;
            display: flex;
            justify-content: space-between;
            flex-wrap: nowrap;
            overflow-x: auto;
            padding : 0 25px;

            &::before {
                content : '';
                position: absolute;
                right : -2px;
                width : 25px;
                height: 100%;
                z-index: 2;
                background: rgb(255,255,255);
                background:linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%);
            }
        
            &::-webkit-scrollbar {
                display: none;
            }

        }
    }
        
}



// =============> SECTION : SERVICES

.servicesSection {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

/* SECTION : PRODUCTS => CAROUSEL */

/* For bigger devices as desktop or big screen */

@media screen and (min-width: 768px) {

    .home section {
    max-width : 85vw;
    }

    // =============> SECTION : COLLABORATIONS

    .collaborationSection img {
        max-width: 100px;
    }

    // =============> SECTION : SERVICES

    /* SECTION : PRODUCTS => CAROUSEL */
    
    .slider-container {
        max-width: 100vw;
        position: relative;
        right: 0;
    }




}
`

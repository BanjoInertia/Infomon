import styled from "styled-components";
import { size } from "../../../../data/variables";

export const PokemonDisplayFooter = () => {
    return (
        <Footer>
            <FooterTitle>Contact</FooterTitle>
            <p>Created by Marcelo Henrique | Email: nozembro@gmail.com | GitHub: </p>
        </Footer>
    )
}

const Footer = styled.section`
    width: 100%;
    position: absolute;
    bottom: 0;
    background: #467AAB;
    padding: 20px;
    font-family: 'PixeloidBold', sans-serif;

    @media (min-width: ${size.mobileL}) {
        font-size: 25px;
    }

    @media (min-width: ${size.laptopL}) {
        font-size: 30px;
    }
`

const FooterTitle = styled.h1`
    margin-bottom: 20px;
`
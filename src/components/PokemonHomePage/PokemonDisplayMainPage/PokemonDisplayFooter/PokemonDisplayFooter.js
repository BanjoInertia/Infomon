import styled from "styled-components";
import { colors, size } from "../../../../data/variables";

export const PokemonDisplayFooter = () => {
    return (
        <Footer data-testid="pokemon-footer">
            <FooterTitle>Contact</FooterTitle>
            <p>Created by Marcelo Henrique | Email: <FooterLinks>nozembro@gmail.com</FooterLinks> | GitHub: <FooterLinks href="https://github.com/BanjoInertia">BanjoInertia</FooterLinks></p>
        </Footer>
    )
}

const Footer = styled.section`
    width: 100%;
    position: absolute;
    bottom: 0;
    background: ${colors.secondaryBlue};
    padding: 40px;
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

const FooterLinks = styled.a`
    color: white;
`
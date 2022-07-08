import styled from 'styled-components'

export const HeroContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position: relative;
    z-index: 1;

    :before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.6) 100%),
        linear-gradient(180deg, rgba(0, 0, 0, 0.2) 0%, transparent 100%);
        z-index: 2;
    }
`;

export const HeroText = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    font-family: 'Poppins', sans-serif;

    .wrapper {
        display: block;
        justify-content: center;
        align-items: center;
    }

    .wrapper .dynamic-txts {
        margin-left: 15px; 
    }

    .dynamic-txts li {
        color: white;
        list-style: none;
        font-size: 30px;
        font-weight: 100;
    }

    .dynamic-txts li span {
        position: relative;
    }

    .dynamic-txts li span::after {
        content: '';
        position: absolute;
        left: 0;
        height: 100%;
        width: 100%;
        background: #0c0c0c;
        border-left: 2px solid #fff;
        animation: typing 1.5s steps(10) infinite;
    }
    @keyframes typing {
        100% {
            left: 100%;
            margin: 0 -35px 0 35px;
        }
    }
`;

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;
`;


export const HeroContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    max-width: 600px;
    margin-bottom: 90px;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;





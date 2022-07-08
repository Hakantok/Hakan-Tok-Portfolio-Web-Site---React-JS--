import React from 'react';
import Video from '../../videos/video-2.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroText, HeroContent, HeroH1 } from './HeroElements';

const HeroSection = () => {

  return (
    <HeroContainer id='anasayfa'>
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Merhaba, ben Hakan Tok</HeroH1>
        </HeroContent>
        <HeroText>
            <div class='wrapper'>
                <ul class='dynamic-txts'>
                    <li><span>Bilgisayar Mühendisiyim</span></li>
                </ul>
            </div>
        </HeroText>  
    </HeroContainer>
  )
}

export default HeroSection

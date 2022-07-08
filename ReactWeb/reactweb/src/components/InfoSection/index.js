import React from 'react';
import { InfoContainer, InfoWrapper, InfoRow, Column1, Column2, TextWrapper,TopLine, Img, Heading, Subtitle, ImgWrap} from './InfoElements'

const InfoSection = ({
    lightBg, 
    id, 
    imgStart, 
    topLine, 
    lightText, 
    headline, 
    darkText, 
    description,
    description2,
    img,
    alt,
}) => {
  return (
    <>
     <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
            <InfoRow imgStart={imgStart}>
                <Column1>
                <TextWrapper>
                    <TopLine>{topLine}</TopLine>
                    <Heading lightText={lightText}>{headline}</Heading>
                    <Subtitle darkText={darkText}>
                        {description} <br /> <br />
                        {description2}
                        </Subtitle>
                    
                </TextWrapper>
                </Column1>
                <Column2>
                <ImgWrap>
                <Img src={img} alt={alt} />
                </ImgWrap>
                </Column2>
            </InfoRow>
        </InfoWrapper>
        </InfoContainer> 
    </>
  )
}

export default InfoSection

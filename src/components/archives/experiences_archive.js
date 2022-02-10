import React from 'react'
import {Button} from "reactstrap"
import {Title, MainContainer, MainDiv, LeftDiv, RightDiv, SecondaryTitle, BoldText} from "../../styles/archive_style"
import Navibar from "../../components/navbar";
import bookData from "../../data/BOM/books.json"

const archive = () => {
    return (
      <MainContainer>
        <Navibar />
        <Title>HUEmanistic Archives</Title>
        <MainDiv>
          <LeftDiv>
            <SecondaryTitle>Book of the Month</SecondaryTitle>
            {bookData.map(b => {
  return (<Button href={"/BOM/"+ b.id }color="secondary" size="lg" block>
              <BoldText>{b.date}</BoldText>
              {b.title}
            </Button>)
})}
           
          </LeftDiv>
          <RightDiv>
            <SecondaryTitle>Personal Experiences</SecondaryTitle>
            <Button
              href="./archive-experiences-Marianna"
              color="secondary"
              size="lg"
              block
            >
              <BoldText>Marianna's Story</BoldText>
            </Button>
          </RightDiv>
        </MainDiv>
      </MainContainer>
    );
}

export default archive

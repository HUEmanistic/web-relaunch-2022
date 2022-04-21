import React from 'react'
import {Button} from "reactstrap"
import {Title, MainContainer, MainDiv, SecondaryTitle, BoldText} from "../../styles/archive_style"
import Navibar from "../../components/navbar";
import bookData from "../../data/BOM/books.json"

const BOMarchive = () => {
    return (
      <MainContainer>
        <Navibar />
        <Title>HUEmanistic Book of the Month Archives</Title>
        <MainDiv>
            <SecondaryTitle>Book of the Month</SecondaryTitle>
            {bookData.map(b => {
  return (<Button href={"/BOM/"+ b.id }color="secondary" size="lg" block>
              <BoldText>{b.date}</BoldText>
              {b.title}
            </Button>)
})}
           
        </MainDiv>
      </MainContainer>
    );
}

export default BOMarchive

import React from "react";
import { useParams, Link } from "react-router-dom";
import Navibar from "./navbar";
import {
  Media,
  Alert,
  Badge,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";
import {
  RowNoOutline,
  RowOutline,
  NoColOutline,
  ColOutline,
  MainContainer,
  BookMedia,
  PageTitle,
  TitleRow,
  Reviews,
  Page
} from "../styles/bom_styles";
import data from "../data/BOM/books.json";
import DOMPurify from "dompurify";

function BOM(props) {
  let { id } = useParams();
  if (!id) {
    id = data.length.toString();
  }
  const book = data.filter((b) => b.id === id)[0];
  return (
    <>
      <Page>
      <Navibar />
      <MainContainer>
        <TitleRow>
          <PageTitle>Book of the Month - {book.date}</PageTitle>
        </TitleRow>
        <RowOutline>
          <BookMedia>
            <BookMedia left>
              <BookMedia
                object
                src={book.image}
                alt={book.title}
                style={{
                  boxShadow: "10px 10px 8px 10px #888888",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  background: "white",
                }}
              />
            </BookMedia>
            <BookMedia
              body
              style={{
                width: "85%",
                paddingLeft: "13%",
                lineHeight: "1.5rem",
              }}
            >
              <BookMedia
                heading
                style={{
                  width: "80%",
                  fontSize: "2rem",
                  lineHeight: "2.5rem",
                }}
              >
                {book.title}
              </BookMedia>
              <Media
                heading
                style={{
                  width: "100%",
                  fontSize: "1rem",
                  lineHeight: "3rem",
                  marginBottom: "3%",
                }}
              >
                by {book.author}
              </Media>
              {book.overview}
            </BookMedia>
          </BookMedia>
        </RowOutline>
        <RowNoOutline>
          <ColOutline>
            {" "}
            <h2> Staff Reviews</h2>
            <hr />
            <h3>
              by {book.review_author} <Badge>{book.badge}</Badge>
            </h3>
            <hr />
            <p
              style={{ lineHeight: "2rem" }}
              dangerouslySetInnerHTML={{
                __html: DOMPurify.sanitize(book.review),
              }}
            />
          </ColOutline>
          <NoColOutline>
            <Reviews>
              <Alert color="light">
                <h2>Reviews & Reactions</h2>
                <hr />
              </Alert>
              {book.reactions.map((r) => {
                return (
                  <Alert color={r.color}>
                    {r.reaction}
                    <br /> <br />
                    {r.author}
                  </Alert>
                );
              })}

              <UncontrolledDropdown>
                <DropdownToggle caret>View Past Selections</DropdownToggle>
                <DropdownMenu>
                  {data.map((b) => {
                    if (b.id !== id) {
                      return (
                        <DropdownItem>
                          <Link to={"/BOM/" + b.id}>{b.date}</Link>
                        </DropdownItem>
                      );
                    }
                    return null;
                  })}
                </DropdownMenu>
              </UncontrolledDropdown>
            </Reviews>
          </NoColOutline>
        </RowNoOutline>
      </MainContainer>
      </Page>
   </>
  );
}

export default BOM;

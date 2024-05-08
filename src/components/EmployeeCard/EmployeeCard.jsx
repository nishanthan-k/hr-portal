import React, { useState } from "react";
import { Card, GridColumn, Image, Pagination, Placeholder, PlaceholderHeader, PlaceholderImage, PlaceholderLine, PlaceholderParagraph, Segment } from "semantic-ui-react";
import { formatDate, formatExp } from "../../commonFunctions/formatFunctions";
import "./EmployeeCard.scss";

const EmployeeCard = (props) => {
  const cardsPerPage = 10;
  const totalPages = Math.ceil(props.filteredEmp.length / cardsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  // const formatDate = (date) => {
  // 	date = date.split('/');
  // 	return `${date[2]}-${date[1]}-${date[0]}`
  // }

  // const formatExp = (exp) => {
  // 	return parseInt(exp) > 1 ? `${exp} yrs` : `${exp} yr`
  // }

  const renderCards = () => {
    const startIndex = (currentPage - 1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    return props.onLoading ? (
      <div columns={3} className="employee-card-container">
        <GridColumn className="loading-cards">
          <Segment raised>
            <Placeholder>
              <Placeholder style={{ height: "100px", width: "100px" }}>
                <PlaceholderImage />
              </Placeholder>
              <PlaceholderHeader>
                <PlaceholderLine />
                <PlaceholderLine />
              </PlaceholderHeader>
              <PlaceholderParagraph>
                <PlaceholderLine length="medium" />
                <PlaceholderLine length="short" />
              </PlaceholderParagraph>
            </Placeholder>
          </Segment>
        </GridColumn>

        <GridColumn className="loading-cards">
          <Segment raised>
            <Placeholder>
              <Placeholder style={{ height: "100px", width: "100px" }}>
                <PlaceholderImage />
              </Placeholder>
              <PlaceholderHeader>
                <PlaceholderLine />
                <PlaceholderLine />
              </PlaceholderHeader>
              <PlaceholderParagraph>
                <PlaceholderLine length="medium" />
                <PlaceholderLine length="short" />
              </PlaceholderParagraph>
            </Placeholder>
          </Segment>
        </GridColumn>

        <GridColumn className="loading-cards">
          <Segment raised>
            <Placeholder>
              <Placeholder style={{ height: "100px", width: "100px" }}>
                <PlaceholderImage />
              </Placeholder>
              <PlaceholderHeader>
                <PlaceholderLine />
                <PlaceholderLine />
              </PlaceholderHeader>
              <PlaceholderParagraph>
                <PlaceholderLine length="medium" />
                <PlaceholderLine length="short" />
              </PlaceholderParagraph>
            </Placeholder>
          </Segment>
        </GridColumn>
      </div>
    ) : props.filteredEmp.length !== 0 ? (
      props.filteredEmp.slice(startIndex, endIndex).map((emp, index) => (
        <div className="card-container" key={index}>
          <Card
            className="employee-card"
            key={emp.fullName}
            onClick={() => props.clickHandler(emp)}
            style={{
              marginBottom: "0",
              marginTop: "0",
            }}
          >
            <Image src={emp.src} ui={false} style={{ width: "100px", height: "100px" }} />
            <Card.Content className="card-content">
              <Card.Header>{emp.fullName}</Card.Header>
              <Card.Meta>{`Joined in ${formatDate(emp.doj)}`}</Card.Meta>
              <Card.Meta>{formatExp(emp.exp)} </Card.Meta>
              <Card.Description>{emp.role}</Card.Description>
            </Card.Content>
          </Card>
        </div>
      ))
    ) : (
      <h2>No Results Found!</h2>
    );
  };

  const handlePageChange = (e, { activePage }) => {
    setCurrentPage(activePage);
  };

  return (
    <div className={props.filteredEmp.length !== 0 ? "employee-container" : "employee-container no-results"}>
      <div className="employee-card-container">{renderCards()}</div>
      {props.filteredEmp.length !== 0 && totalPages >= 2 && (
        <div className="pagination">
          <Pagination boundaryRange={0} defaultActivePage={1} ellipsisItem={null} firstItem={null} lastItem={null} siblingRange={1} totalPages={totalPages} onPageChange={handlePageChange} />
        </div>
      )}
    </div>
  );
};

export default EmployeeCard;

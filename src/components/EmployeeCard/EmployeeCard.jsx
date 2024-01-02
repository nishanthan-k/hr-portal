import React, { useState } from "react";
import { Card, Image, Pagination } from "semantic-ui-react";
import "./EmployeeCard.scss";

const EmployeeCard = (props) => {
	const cardsPerPage = 10;
	const totalPages = Math.ceil(props.filteredEmp.length / cardsPerPage);
	const [currentPage, setCurrentPage] = useState(1);

	const renderCards = () => {
		const startIndex = (currentPage - 1) * cardsPerPage;
		const endIndex = startIndex + cardsPerPage;

		return props.filteredEmp.length !== 0 ? (
			props.filteredEmp.slice(startIndex, endIndex).map((emp, index) => (
				<div className="card-container" key={index}>
					<Card
						className="employee-card"
						key={ emp.fullName }
						onClick={ () => props.clickHandler(emp) }
						style={ {
							marginBottom: "0",
							marginTop: "0",
						} }
					>
						<Image
							src={ emp.src }
							ui={ false }
							style={ { width: "100px", height: "100px" } }
						/>
						<Card.Content className="card-content">
							<Card.Header>{ emp.fullName }</Card.Header>
							<Card.Meta>Joined in { emp.doj }</Card.Meta>
							<Card.Meta>{ emp.exp } Exp</Card.Meta>
							<Card.Description>{ emp.role }</Card.Description>
						</Card.Content>
					</Card>
				</div>
			))
		) : (
			<h2>No Results Found!</h2>
		)
	};

	const handlePageChange = (e, { activePage }) => {
		setCurrentPage(activePage);
	};

	return (
		<div className={props.filteredEmp.length !== 0 ? "employee-container" : "employee-container no-results"}>
			<div className="employee-card-container">{ renderCards() }</div>
			{ props.filteredEmp.length !== 0 && (
				<div className="pagination">
					<Pagination
						boundaryRange={ 0 }
						defaultActivePage={ 1 }
						ellipsisItem={ null }
						firstItem={ null }
						lastItem={ null }
						siblingRange={ 1 }
						totalPages={ totalPages }
						onPageChange={ handlePageChange }
					/>
				</div>
			) }
		</div>
	);
};

export default EmployeeCard;

import React, { useState } from "react";
import "./Leave.scss";
import leaveData from "../../assets/data/leaveData.json";
import empData from "../../assets/data/employeesData.json";
import { Button } from "semantic-ui-react";
// import Table from "semantic-ui-react";

const Leave = () => {
	let empProfile = [];
	leaveData.map((c, d) => {
		empProfile.push(empData.employees.filter((a, b) => c.empID === a.empID));
		return [];
	});

	// console.log(empProfile);

	const initialStatus = leaveData.map(() => ({
		approved: false,
		declined: false,
	}));

	const [statusArray, setStatusArray] = useState(initialStatus);

	const statusHandler = (sign, rowIndex) => {
		setStatusArray((prevStatusArray) => {
			const updatedStatusArray = [...prevStatusArray];
			updatedStatusArray[rowIndex] = {
				...updatedStatusArray[rowIndex],
				approved: sign === "approve",
				declined: sign === "decline",
			};
			return updatedStatusArray;
		});
		updateJson(sign, rowIndex);
	};

	// console.log("statusArray:", statusArray)
	// const formatHeader = (label) => {
	// 	const words = label.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g);
	// 	const header = words.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ");

	// 	return words ? header : label;
	// };

	const updateJson = (sign, rowIndex) => {
		leaveData.map((user, userIndex) => {
			if (rowIndex === userIndex) {
				if (sign === "approve") {
					user.status = true;
				} else {
					user.status = false;
				}
			}
			return []
			// console.log("user:", user);
		})
	}

	return (
		<div className="table-container">
			{/* <Table
				className="table"
				// style={ { width: "850px", margin: "20px auto", border: "1px solid" } }
			>
				<Table.Header className="table-header">
					<Table.Row className="table-header-row">
						{ Object.entries(leaveData[0]).map(
							(data, value) =>
								data[0] !== "status" && (
									<Table.HeaderCell
										className="table-header-cell"
										key={ value }
										textAlign="center"
									>
										{ formatHeader(data[0]) }
									</Table.HeaderCell>
								)
						) }
						<Table.HeaderCell className="table-header-cell" textAlign="center">
							Approval
						</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body>
					{ leaveData.map((user, rowIndex) => (
						<Table.Row key={ rowIndex }>
							{ Object.entries(user).map(
								(data, detail) =>
									data[0] !== "status" && (
										<Table.Cell
											className={
												detail === 0 ? "table-first-cell" : "table-data"
											}
											key={ detail }
											textAlign="center"
										>
											{ data[1] }
										</Table.Cell>
									)
							) }
							<Table.Cell className="table-data" textAlign="center">
								{ !statusArray[rowIndex].approved &&
									!statusArray[rowIndex].declined ? (
									<>
										<Button
											positive
											content="Approve"
											onClick={ () => {
												statusHandler("approve", rowIndex);
											} }
										/>
										<Button
											negative
											content="Decline"
											onClick={ () => {
												statusHandler("decline", rowIndex);
											} }
										/>
									</>
								) : statusArray[rowIndex].approved ? (
									<Button positive content="Approved" />
								) : (
									<Button negative content="Declined" />
								) }
							</Table.Cell>
						</Table.Row>
					)) }
				</Table.Body>
			</Table> */}
			<table className="leave-table" cellSpacing={0} >
				<thead className="table-head">
					<tr className="table-head-row">
						<th className="table-heading" >EMPLOYEE ID</th>
						<th className="table-heading" >FULL NAME</th>
						<th className="table-heading" >START DATE</th>
						<th className="table-heading" >END DATE</th>
						<th className="table-heading" >REASON</th>
						<th className="table-heading" >APPROVAL</th>
					</tr>
				</thead>
				<tbody className="table-body">
					{ leaveData.map((user, rowIndex) => (
						<tr className="table-body-row" key={ rowIndex }>
							{ Object.entries(user).map(
								(data, detail) =>
									data[0] !== "status" && (
										<td
											// className={
											// 	detail === 0 ? "table-first-data" : "table-data"
											// }
											className="table-data"
											key={ detail }
											textAlign="center"
										>
											{ data[1] }
										</td>
									)
							) }
							<td className="table-data button-data-item" 	>
								{ !statusArray[rowIndex].approved &&
									!statusArray[rowIndex].declined ? (
									<>
										<Button
											positive
											content="Approve"
											onClick={ () => {
												statusHandler("approve", rowIndex);
											} }
										/>
										<Button
											negative
											content="Decline"
											onClick={ () => {
												statusHandler("decline", rowIndex);
											} }
										/>
									</>
								) : statusArray[rowIndex].approved ? (
									<Button positive content="Approved" />
								) : (
									<Button negative content="Declined" />
								) }
							</td>
						</tr>
					)) }
				</tbody>
			</table>
		</div>
	);
};

export default Leave;

import React, { useState } from "react";
import "./Leave.scss";
import leaveData from "../../assets/data/leaveData.json";
import empData from "../../assets/data/employeesData.json";
import { Button } from "semantic-ui-react";

const Leave = () => {
	let empProfile = [];
	leaveData.map((c, d) => {
		empProfile.push(empData.employees.filter((a, b) => c.empID === a.empID));
		return [];
	});

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
		})
	}

	return (
		<div className="table-container">
			<table className="leave-table" cellSpacing={ 0 } cellPadding={ 5 } >
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
											className="table-data"
											key={ detail }
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

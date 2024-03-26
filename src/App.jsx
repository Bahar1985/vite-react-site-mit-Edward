import employees from "./data/employees.json";
import dayjs from "dayjs";


function App() {
	const title = "Employee Directory";
	const text= "You are in the group members"
	const introText =
		"Welcome to our Employee Directory, your one-stop destination for discovering and connecting with the talented individuals who make our organization thrive.";

	return (
		<div>
			<h1 className="text-3xl mb-3 text-blue-800">{title}</h1>
			<p>{text}</p>
			<img className="mb-3 rounded" src="images/cityscape.jpg" />
			<p>{introText}</p>
			{employees.map((employee) => (
				<div
					key={employee.employeeID}
					className="bg-slate-800 mt-3 text-slate-200 p-3 rounded"
				>
					<div className="flex gap-3">
						<img
							className="w-28 rounded"
							src={`images/employee_${employee.employeeID}.jpg`}
						/>
						<div>
							<div>
								{employee.firstName} {employee.lastName}
							</div>
							<div className="text-yellow-200">
								{employee.title}
							</div>
							<div className="text-orange-600">
								Tel: {employee.address.phone}
							</div>
							<div className="text-orange-600">
								Birthday:{" "}
								{dayjs(employee.birthDate).format(
									"MMM DD, YYYY"
								)}
							</div>
						</div>
					</div>
					<div className="mt-2 italic text-slate-400">
						{employee.notes}
					</div>
				</div>
			))}
		</div>
	);
}

export default App;

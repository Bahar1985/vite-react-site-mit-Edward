
import employees from "./data/employees.json";

function App() {
	   const title = "Employee Directory";
		const introText =
			"Welcome to our Employee Directory, your one-stop destination for discovering and connecting with the talented individuals who make our organization thrive.";
	return (
		<>
			<h1 className="text-3xl mb-3 text-blue-800">{title}</h1>
			<p>{introText}</p>
			<ul>
				{employees.map((employee) => (
					<li key={employee.employeeID}>{employee.firstName}</li>
				))}
			</ul>
		</>
	);
}

export default App;

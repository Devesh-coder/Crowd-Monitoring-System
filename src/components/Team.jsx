function Team() {
	return (
		<>
			<h3 className='table-heading'>Group Members</h3>
			<table className='table table-hover'>
				<thead>
					<tr>
						<th scope='col'> Team </th>
						<th scope='col'>Department - EXTC</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<th scope='row' rowSpan={3}>
							Third Year
						</th>
						<td>Rahil Shah - 60002190085</td>
					</tr>
					<tr>
						<td>Srihari Kamath - 60002190106</td>
					</tr>
					<tr>
						<td>Yash Dange - 60002190122</td>
					</tr>
				</tbody>

				<tbody>
					<tr>
						<th scope='row' rowSpan={3}>
							Second Year
						</th>
						<td>Devesh Agarwal - 60002200145</td>
					</tr>
					<tr>
						<td>Nihal Shaikh - 60002200155</td>
					</tr>
					<tr>
						<td>Sadiq Khan - 60002200154</td>
					</tr>
				</tbody>
			</table>
		</>
	)
}

export default Team

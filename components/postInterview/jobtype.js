export default function JobType(){
	return (
		<div className="flex">
			<div>
				<h1>Job Type:</h1>
			</div>
			<div className="flex">
				<div>
					<label className="flex items-center">
						<input type="radio" name="frontendengineer" value="front end engineer"/>
						<span>Front End Engineer</span>
					</label>
					<p>Back End Engineer</p>
				</div>
				<div>
					<p>Fullstack Engineer</p>
					<p>Test Engineer</p>
				</div>
				<div>
					<p>Devops Engineer</p>
				</div>
			</div>
		</div>
	)
}
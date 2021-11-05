export default function Container({ children }) {
	return (
		<div className="Container">
			{children}

			<style jsx>{`
				.Container {
					margin: auto;
					min-width: 430px;
					max-width: 1000px;
					min-height: 500px;
				}
			`}</style>
		</div>
	)
}

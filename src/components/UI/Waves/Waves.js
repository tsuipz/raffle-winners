import classes from './Waves.module.css';

const Waves = () => {
	return (
		<footer>
			<div>
				<svg
					className={classes.waves}
					viewBox='0 24 150 28'
					preserveAspectRatio='none'
					shapeRendering='auto'
				>
					<defs>
						<path
							id='gentle-wave'
							d='M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z'
						/>
					</defs>
					<g className={classes.parallax}>
						<use href='#gentle-wave' x='48' y='0' fill='rgba(93, 146, 177, 0.7)' />
						<use href='#gentle-wave' x='48' y='3' fill='rgba(120, 164, 190, 0.5)' />
						<use href='#gentle-wave' x='48' y='5' fill='rgba(174, 201, 216, 0.3)' />
						<use href='#gentle-wave' x='48' y='7' fill='#f5f5f5' />
					</g>
				</svg>
			</div>

			<div className={`${classes.content} center`}>
				<p>Patrick Tsui</p>
			</div>
		</footer>
	);
};

export default Waves;

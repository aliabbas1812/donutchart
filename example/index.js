import React from 'react';
import { render } from 'react-dom';

import Donut from '../src';



const renderProgress = progress => <strong>{progress}/5</strong>;
const Donuts = _ => (
	<React.Fragment>
		<Donut progress={3} onRender={renderProgress} />
		<Donut progress={1} onRender={renderProgress} />
		<Donut progress={5} onRender={renderProgress} />
		
	</React.Fragment>
);

render(<Donuts />, document.getElementById('demo1'));

render(
	<ComplexDonut
		size={200}
		radius={70}
		segments={[
			{
				color: '#FF8A80',
				value: 230
			},
			{
				color: '#FF80AB',
				value: 308
			},
			{
				color: '#B9F6CA',
				value: 520
			},
			
		]}
		
	/>,
	
);

import React from 'react';
import Faqs from './Faqs';
import { Homedata } from './Homedata';
function Faqsection() {
	return (
		<div
			className="flex justify-center bg-[#2A82AD]"
			style={{
				clipPath: 'polygon(0 5%, 100% 0, 100% 100%, 0 95%)',
			}}
		>
			<Faqs data={Homedata}></Faqs>
		</div>
	);
}

export default Faqsection;

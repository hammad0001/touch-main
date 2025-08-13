'use client';
import React, { useEffect, useState } from 'react';

import Faq from 'react-faq-component';
import './faq-custom.css';
const styles = {
	// bgColor: 'transparent', // FAQ block background: white
	// titleTextColor: '#FFFF', // Dark blue for the main title
	// titleTextSize: '30px', // Bigger title

	// rowTitleColor: 'FFFF', // FAQ question titles same dark blue
	// rowTitleTextSize: '18px',
	// rowContentColor: '#333333', // Answers: dark gray
	// rowContentTextSize: '16px',
	arrowColor: '#0a4b78', // Arrow same blue
	transitionDuration: '0.3s',
	timingFunc: 'ease',
	rowContentPaddingTop: '10px',
	rowContentPaddingBottom: '20px',
	rowContentPaddingLeft: '20px',
	rowContentPaddingRight: '20px',
};

const config = {
	animate: true,
	arrowIcon: 'V',
	openOnload: 0,
	expandIcon: '+',
	collapseIcon: '-',
};
const Faqs = ({ data }) => {
	return (
		<div className="max-w-screen-xl flex justify-center xl:p-8 lg:p-5 p-4 bg-transparent">
			<Faq data={data} styles={styles} config={config} />
		</div>
	);
};

export default Faqs;

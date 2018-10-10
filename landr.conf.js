module.exports = {
	theme: 'theme/landr-theme-fin',
	settings: {
		title: 'Balena Fin',
		lead: 'Balena Fin: a board for fleet owners',
		description:
			'Robust carrier board for Raspberry Pi Compute Module.',
		analytics: {
			gaSite: 'balenafin.io', // google Analytics site
			gaId: 'UA-45671959-7', // google Analytics ID
		},
		featuresLead: 'Hardened design for field deployment use cases',
		features: [
			{
				title: 'Raspberry Pi based',
				description:
					'Built around the Compute Module 3 Lite, a tried-and-true processor with a robust developer ecosystem.',
				icon: 'raspi',
			},
			{
				title: 'Reliable Storage',
				description:
					'On-board 8/16/32/64 GB industrial eMMC is more reliable than SD cards',
				icon: 'storage',
			},
			{
				title: 'Industrial Power',
				description:
					'6 to 24V range (5V @2.5A via HAT) with barrel jack and phoenix connector',
				icon: 'power',
			},
			{
				title: 'Flexible networking',
				description:
					'Dual-band WiFi, Bluetooth, mini PCIe for cellular modems and peripherals, and a SIM card slot',
				icon: 'flexible',
			},
			{
				title: 'Real-time and low-power capable',
				description:
					'Embedded 32-bit ARM M4 co-processor allows maximum power efficiency and real-time computing',
				icon: 'realtime',
			},
			{
				title: 'Expandable',
				description:
					'Multiple interfaces to fit any use case: Raspberry Pi HAT compatible, HDMI, MIPI, I2C, SPI, UART and GPIO',
				icon: 'stack',
			},
		],
		motivation: {
			blogPost:
				'https://resin.io/blog/introducing-project-fin-a-board-for-fleet-owners',
			paragraphs: [
				'We designed the Balena Fin to reduce the friction that fleet owners face while building, deploying and scaling large fleets of connected devices. We’ve been working with our community and customers on thousands of use cases over the past few years, and it has become clear that scaling hardware is a problem.',
				'The Balena Fin is a Raspberry Pi Compute Module carrier board that can run all the software that the Raspberry Pi can run, but hardened for deployment in the field. Even better, it’s offered at an accessible price point relative to other industrial boards.',
			],
		},
	},
};

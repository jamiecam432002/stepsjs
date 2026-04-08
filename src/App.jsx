import { useState } from 'react';

const messages = [
	'Learn React ⚛️',
	'Apply for jobs 💼',
	'Invest your new income 🤑',
];

export default function App() {
	const [step, setStep] = useState(1);
	const [isOpen, setIsOpen] = useState(true);

	function handlePrevious() {
		if (step === 1) return;
		setStep((prev) => prev - 1);
	}

	function handleNext() {
		if (step === 3) return;
		setStep((prev) => prev + 1);
	}

	function handleClose() {
		setIsOpen((open) => !open);
	}

	return (
		<>
			<button className='close' onClick={handleClose}>
				&times;
			</button>
			{isOpen && (
				<div className='steps'>
					<div className='numbers'>
						<div className={step >= 1 ? 'active' : ''}>1</div>
						<div className={step >= 2 ? 'active' : ''}>2</div>
						<div className={step >= 3 ? 'active' : ''}>3</div>
					</div>
					<p className='message'>
						Step {step}: {messages[step - 1]}
					</p>

					<div className='buttons'>
						<button
							className='bg-[#7950f2] text-white'
							onClick={handlePrevious}>
							Previous
						</button>
						<button className='bg-[#7950f2] text-white' onClick={handleNext}>
							Next
						</button>
					</div>
				</div>
			)}
		</>
	);
}

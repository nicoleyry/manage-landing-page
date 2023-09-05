import '../styles/middlesection.scss';
import Button from './Button';

export default function MiddleSection() {
	return (
		<div className='MiddleSection'>
			<div className='left'>
				<h1 className='title'>What's different about Manage?</h1>
				<p className='subtitle'>
					Manage provides all the functionality your team needs, without the complexity. Our software is
					tailor-made for modern digital product teams.
				</p>
			</div>
			<div className='right'>
				<div className='list'>
					<Button orangeBtn={true} text='01' />
					<div className='text'>
						<div className='list-title'>Track company-wide progress</div>
						<div className='list-desc'>
							See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the
							milestone level all the way done to the smallest of details. Never lose sight of the bigger
							picture again.
						</div>
					</div>
				</div>
				<div className='list'>
					<Button orangeBtn={true} text='02' />
					<div className='text'>
						<div className='list-title'>Advanced built-in reports</div>
						<div className='list-desc'>
							Set internal delivery estimates and track progress toward company goals. Our customisable
							dashboard helps you build out the reports you need to keep key stakeholders informed.
						</div>
					</div>
				</div>
				<div className='list'>
					<Button orangeBtn={true} text='03' />
					<div className='text'>
						<div className='list-title'>Everything you need in one place</div>
						<div className='list-desc'>
							Stop jumping from one service to another to communicate, store files, track tasks and share
							documents. Manage offers an all-in-one team productivity solution.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

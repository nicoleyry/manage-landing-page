import '../styles/middlesection.scss';
import Button from './Button';
import AvatarAnisha from '../assets/images/avatar-anisha.png';
import AvatarAli from '../assets/images/avatar-ali.png';
import AvatarRichard from '../assets/images/avatar-richard.png';
import AvatarShanai from '../assets/images/avatar-shanai.png';

// Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function MiddleSection() {
	return (
		<div className='MiddleSection'>
			<div className='upper'>
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
								See how your day-to-day tasks fit into the wider vision. Go from tracking progress at
								the milestone level all the way done to the smallest of details. Never lose sight of the
								bigger picture again.
							</div>
						</div>
					</div>
					<div className='list'>
						<Button orangeBtn={true} text='02' />
						<div className='text'>
							<div className='list-title'>Advanced built-in reports</div>
							<div className='list-desc'>
								Set internal delivery estimates and track progress toward company goals. Our
								customisable dashboard helps you build out the reports you need to keep key stakeholders
								informed.
							</div>
						</div>
					</div>
					<div className='list'>
						<Button orangeBtn={true} text='03' />
						<div className='text'>
							<div className='list-title'>Everything you need in one place</div>
							<div className='list-desc'>
								Stop jumping from one service to another to communicate, store files, track tasks and
								share documents. Manage offers an all-in-one team productivity solution.
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='bottom'>
				<h1 className='title'>What they've said</h1>
				<Swiper
					slidesPerView={3}
					spaceBetween={30}
					pagination={{
						clickable: true,
					}}
					className='testimonials-slider'
				>
					<SwiperSlide>
						<div className='slide-box'>
							<img className='avatar' src={AvatarAnisha} alt='Anisha' />
							<div className='review-box'>
								<p className='name'>Anisha Li</p>
								<p className='review'>
									"Manage has supercharged our team's workflow. The ability to maintain visibility on
									larger milestones at all times keeps everyone motivated."
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='slide-box'>
							<img className='avatar' src={AvatarAli} alt='Ali' />
							<div className='review-box'>
								<p className='name'>Ali Bravo</p>
								<p className='review'>
									"We have been able to cancel so many other subscriptions since using Manage. There
									is no more cross-channel confusion and everyone is much more focused."
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='slide-box'>
							<img className='avatar' src={AvatarRichard} alt='Richard' />
							<div className='review-box'>
								<p className='name'>Richard Watts</p>
								<p className='review'>
									"Manage allows us to provide structure and process. It keeps us organized and
									focused. I can't stop recommending them to everyone I talk to!"
								</p>
							</div>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className='slide-box'>
							<img className='avatar' src={AvatarShanai} alt='Shanai' />
							<div className='review-box'>
								<p className='name'>Shanai Gough</p>
								<p className='review'>
									"Their software allows us to track, manage and collaborate on our projects from
									anywhere. It keeps the whole team in-sync without being intrusive."
								</p>
							</div>
						</div>
					</SwiperSlide>
				</Swiper>
			</div>
		</div>
	);
}

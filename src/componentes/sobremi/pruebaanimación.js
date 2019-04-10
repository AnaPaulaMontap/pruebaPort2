import React, { Component } from "react";
import { TimelineLite} from "gsap";
import './pruebaanimacion.css'


class TimelineSequence extends Component {
	
	constructor(props){
		super(props);

		this.logoTl = new TimelineLite({ delay :1 });

		this.content = null;
		this.feature = null;
		this.description = null;
	}

	// add instances to the timeline
	componentDidMount(){
		this.logoTl
            .set(this.content, { autoAlpha: 1 })// show content div
            .from(this.feature, 0.5, { scale: .5, autoAlpha: 0 }, "feature") // added 0.5 seconds after end of timeline
			.from(this.description, 0.5, { left: 100, autoAlpha: 0 }, "feature+=0.25")
			
	}

	render(){
		return <div className="container">				

                                                                                                                                                                                                                                                
						<div className="content" ref={ div => this.content = div }>
							<div className="info">
								<img
									src="https://www.greensock.com/_img/codepen/feature_robust.png"
									width="240"
									height="151"
                                    className="feature"
                                    alt="1"
									ref={ img => this.feature = img }
								/>
								<p className="description" ref={ p => this.description = p }>
                  Animate colors, beziers, css properties, arrays, scrolls and lots more. Round values, smoothly reverse() on the fly, use relative values, employ virtually any easing equation, and manage conflicting tweens like a pro. GSAP does all this and much more with ease.
                </p>
							

						

						</div>

					</div>

				
		</div>;
	}

}

export default TimelineSequence;

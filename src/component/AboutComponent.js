import React, {Component} from 'react';
import SidebarComponent from './SidebarComponent';
import MessageComponent from './MessageComponent';
class AboutComponent extends Component {
    render() {
        return (
        	<div>
    	 		<SidebarComponent></SidebarComponent>    	 		
	    	 	<div>
	    	 		<MessageComponent></MessageComponent>
	    	 	</div>
	    	 	<div className="content-wrapper">
	    	 		<div className="container-fluid">
		            	<div className="row">
		            		<h1 className="col-md-12 col-12 heading primary-dark-font fancy-heading animated fadeInLeft">About Me</h1> 
		            		<div className="col-md-12 col-12 home-section-space">
		            			<div className="card-bg animated fadeInDown card-shadow">
		            				<div className="about-card"> 
	                                    <div className="row align-items-center">
	                                    	<div className="col-xl-2 col-lg-4 col-md-5 col-12" align="center">
                                    			<div className="about-profile-pic card-shadow">
                                    				<img src="images/profile.png" className="img-fluid" alt="Profile"/>
                                    			</div>
	                                    	</div>
	                                    	<div className="col-xl-10 col-lg-8 col-md-7 col-12 profile-details">
	                                			<div className="about-card-content ">
                                    				<h5 className="primary-dark-font about-name">UMASANKAR T S</h5>
                                    				<p className="about-designation">Android Developer / Architect</p>
                                    				<p><i className="lni-envelope align-middle primary-light-font"/> <a href="mailto:umasankar.tsj@gmail.com" className="text-word-br primary-light-font text-decor">&nbsp;umasankar.tsj@gmail.com</a></p>
                                    				<p><i className="lni-mobile align-middle primary-light-font"/> <a href="tel:8807527642" className="primary-light-font text-decor">&nbsp;8807527642</a></p>
                                    			</div>    
	                                    	</div>	                                    	
	                                    </div>
	                                </div>
	                            </div>
                            </div>
		            	</div>

		            	<div className="row">	    	 				
		            		<div className="col-xl-8 col-lg-7 col-md-12 home-section-space">
                                <h6 className="fancy-title primary-light-font mb-0">Personal Info</h6>
                                <div className="row">
                                	<div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 mt-5">
                                		<div className="card-bg card-shadow personal-detail-card animated fadeInLeft anim-delay-3s">
						            		<p className="personal-info-content text-center mb-0">T.R. Surendran</p>
        									<p className="primary-dark-bg mb-0 personal-detail-title text-center white-font">Father Name</p>
        								</div>
                                	</div>
                                	<div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 mt-5">
                                		<div className="card-bg card-shadow personal-detail-card animated fadeInLeft anim-delay-3s">
						            		<p className="personal-info-content text-center mb-0">June 04, 1992</p>
        									<p className="primary-dark-bg mb-0 personal-detail-title text-center white-font">DOB</p>
        								</div>
                                	</div>
                                	<div className="col-xl-4 col-lg-6 col-md-4 col-sm-6 mt-5">
                                		<div className="card-bg card-shadow personal-detail-card animated fadeInLeft anim-delay-3s">
						            		<p className="personal-info-content text-center mb-0">Male</p>
        									<p className="primary-dark-bg mb-0 personal-detail-title text-center white-font">Gender</p>
        								</div>
                                	</div>
                                	<div className="col-xl-6 col-lg-6 col-md-6 col-sm-6 mt-5">
                                		<div className="card-bg card-shadow personal-detail-card animated fadeInLeft anim-delay-3s">
						            		<p className="personal-info-content text-center mb-0">Married</p>
        									<p className="primary-dark-bg mb-0 personal-detail-title text-center white-font">Marital Status</p>
        								</div>
                                	</div>
                                	<div className="col-xl-6 col-lg-12 col-md-6 col-sm-12 mt-5">
                                		<div className="card-bg card-shadow personal-detail-card animated fadeInLeft anim-delay-3s">
						            		<p className="personal-info-content text-center mb-0">99, Valluvar Colony, <br/>P&T Nagar road, Madurai - 625014</p>
        									<p className="primary-dark-bg mb-0 personal-detail-title text-center white-font">Address</p>
        								</div>
                                	</div>
                                </div>		            			
		            		</div>		            					            	
		            	</div>		            	
	    	 		</div>
		 		</div>
	 		</div>    	 	
        )
    }
}

export default AboutComponent

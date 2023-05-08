import React, {Component} from 'react';
import SidebarComponent from './SidebarComponent';
import MessageComponent from './MessageComponent';

class QualificationComponent extends Component{
	render(){
		return(
			<div>                
                <SidebarComponent></SidebarComponent>               
                <div>
                    <MessageComponent></MessageComponent>
                </div>
                <div className="content-wrapper">
                    <div className="container-fluid">
                        <div className="row">
                            <h1 className="col-md-12 heading primary-dark-font fancy-heading animated fadeInLeft">Skills</h1>
                        </div>
                        <div className="qualify-desk-view">                            
                            <div className="row qualify-sec-space">                                
                                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 animated fadeInLeft">
                                    <div className="qualify-card card-bg card-shadow"> 
                                        <div className="row align-items-center">
                                        	<div className="col-md-10 col-9 vertical-center text-right">
                                                <span>Native Android Development</span>
                                            </div>
                                            <div className="col-md-2 col-3" align="center" >
                                                <i className="lni-android secondary-dark-font"></i>
                                            </div>                                                                              
                                        </div>  
                                    </div>
                                    <div className="qualify-card card-bg card-shadow"> 
                                        <div className="row align-items-center">
                            				 <div className="col-md-10 col-9 vertical-center text-right">
                                                <span>User Experience Design</span>
                                            </div> 
                                            <div className="col-md-2 col-3" align="center" >
                                                <i className="lni-laptop-phone secondary-dark-font"></i>
                                            </div>                                                                            
                                        </div>  
                                    </div>
                                    <div className="qualify-card card-bg card-shadow"> 
                                        <div className="row align-items-center">                                        
                                            <div className="col-md-10 col-9 vertical-center text-right">
                                                <span>Agile Software Development Methodologies</span>
                                            </div> 
                                            <div className="col-md-2 col-3" align="center" >
                                                <i className="lni-list secondary-dark-font"></i>
                                            </div>                                     
                                        </div>  
                                    </div>
                                    <div className="qualify-card card-bg card-shadow"> 
                                        <div className="row align-items-center">                                        
                                            <div className="col-md-10 col-9 vertical-center text-right">
                                                <span>Hybrid Android Development (Native Script)</span>
                                            </div>
                                            <div className="col-md-2 col-3" align="center" >
                                                <i className="lni-rocket secondary-dark-font"></i>
                                            </div>                                      
                                        </div>  
                                    </div>
                                    <div className="qualify-card card-bg card-shadow"> 
                                        <div className="row align-items-center">                                       
                                            <div className="col-md-10 col-9 vertical-center text-right">
                                                <span>Android vector based animation</span>
                                            </div> 
                                             <div className="col-md-2 col-3" align="center" >
                                                <i className="lni-select secondary-dark-font"></i>
                                            </div>                                     
                                        </div>  
                                    </div>
                                </div>
                                <div className="col-xl-4 col-md-12 col-sm-12 animated fadeInDown qualify-img-sec" align="center">
                                    <div className="qualify-image">
                                        <img src="/images/qualification-mockup.svg" className="img-fluid " alt="Mobile app screen"/>
                                    </div>
                                </div>
                                <div className="col-xl-4 col-lg-6 col-md-12 col-sm-12 animated fadeInRight">
                                    <div className="qualify-card card-bg card-shadow"> 
                                        <div className="row align-items-center">
                                            <div className="col-md-2 col-3" align="center" >
                                                <i className="lni-indent-increase secondary-dark-font"></i>
                                            </div>
                                            <div className="col-md-10 col-9 vertical-center">
                                                <span>Websocket Implementation</span>
                                            </div>                                      
                                        </div>  
                                    </div>
                                    <div className="qualify-card card-bg card-shadow"> 
                                        <div className="row align-items-center">
                                            <div className="col-md-2 col-3" align="center" >
                                                <i className="lni-control-panel secondary-dark-font"></i>
                                            </div>
                                            <div className="col-md-10 col-9 vertical-center">
                                                <span>HTTP Error codes based API processing</span>
                                            </div>                                      
                                        </div>  
                                    </div>
                                    <div className="qualify-card card-bg card-shadow"> 
                                        <div className="row align-items-center">
                                            <div className="col-md-2 col-3" align="center" >
                                                <i className="lni-leaf secondary-dark-font"></i>
                                            </div>
                                            <div className="col-md-10 col-9 vertical-center">
                                                <span>Handle app related API in Single place</span>
                                            </div>                                      
                                        </div>  
                                    </div>
                                    <div className="qualify-card card-bg card-shadow"> 
                                        <div className="row align-items-center">
                                            <div className="col-md-2 col-3" align="center" >
                                                <i className="lni-layers secondary-dark-font"></i>
                                            </div>
                                            <div className="col-md-10 col-9 vertical-center">
                                                <span>Experienced with MVVM and MVP Architectures</span>
                                            </div>                                      
                                        </div>  
                                    </div>
                                    <div className="qualify-card card-bg card-shadow"> 
                                        <div className="row align-items-center">
                                            <div className="col-md-2 col-3" align="center" >
                                                <i className="lni-key secondary-dark-font"></i>
                                            </div>
                                            <div className="col-md-10 col-9 vertical-center">
                                                <span>Experienced in Google API keys integrations</span>
                                            </div>                                      
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="qualify-mob-view">
                            <div className="row qualify-sec-space">
                                <div className="col-sm-12 col-md-10 offset-md-1 col-12 animated fadeInLeft"> 
                                    <div className="qualify-mob-card card-bg card-shadow mt-3">
                                         <div className="row align-items-center justify-content-center">   
                                            <div className="col-12 qualify-list">                                         
                                                <div className="circular-icon" align="center" >
                                                    <i className="lni-android secondary-dark-font"></i>
                                                </div> 
                                                <div className="qualification-content">
                                                    <p className="mb-0">Native Android Development</p>
                                                </div> 
                                            </div>                                                                            
                                        </div> 
                                    </div>
                                    <div className="qualify-mob-card card-bg card-shadow mt-4">
                                         <div className="row align-items-center justify-content-center">   
                                            <div className="col-12 qualify-list">                                         
                                                <div className="circular-icon" align="center" >
                                                    <i className="lni-laptop-phone secondary-dark-font"></i>
                                                </div> 
                                                <div className="qualification-content">
                                                    <p className="mb-0">User Experience Design</p>
                                                </div> 
                                            </div>                                                                            
                                        </div> 
                                    </div>  
                                    <div className="qualify-mob-card card-bg card-shadow mt-4">
                                         <div className="row align-items-center justify-content-center">   
                                            <div className="col-12 qualify-list">                                         
                                                <div className="circular-icon" align="center" >
                                                    <i className="lni-list secondary-dark-font"></i>
                                                </div> 
                                                <div className="qualification-content">
                                                    <p className="mb-0">Agile Software Development Methodologies</p>
                                                </div> 
                                            </div>                                                                            
                                        </div> 
                                    </div>
                                    <div className="qualify-mob-card card-bg card-shadow mt-4">
                                         <div className="row align-items-center justify-content-center">   
                                            <div className="col-12 qualify-list">                                         
                                                <div className="circular-icon" align="center" >
                                                    <i className="lni-rocket secondary-dark-font"></i>
                                                </div> 
                                                <div className="qualification-content">
                                                    <p className="mb-0">Hybrid Android Development (Native Script)</p>
                                                </div> 
                                            </div>                                                                            
                                        </div> 
                                    </div>   
                                    <div className="qualify-mob-card card-bg card-shadow mt-4">
                                         <div className="row align-items-center justify-content-center">   
                                            <div className="col-12 qualify-list">                                         
                                                <div className="circular-icon" align="center" >
                                                    <i className="lni-select secondary-dark-font"></i>
                                                </div> 
                                                <div className="qualification-content">
                                                    <p className="mb-0">Android vector based animation</p>
                                                </div> 
                                            </div>                                                                            
                                        </div> 
                                    </div>       
                                    <div className="qualify-mob-card card-bg card-shadow mt-4">
                                         <div className="row align-items-center justify-content-center">   
                                            <div className="col-12 qualify-list">                                         
                                                <div className="circular-icon" align="center" >
                                                    <i className="lni-indent-increase secondary-dark-font"></i>
                                                </div> 
                                                <div className="qualification-content">
                                                    <p className="mb-0">Websocket Implementation</p>
                                                </div> 
                                            </div>                                                                            
                                        </div> 
                                    </div>     
                                    <div className="qualify-mob-card card-bg card-shadow mt-4">
                                         <div className="row align-items-center justify-content-center">   
                                            <div className="col-12 qualify-list">                                         
                                                <div className="circular-icon" align="center" >
                                                    <i className="lni-control-panel secondary-dark-font"></i>
                                                </div> 
                                                <div className="qualification-content">
                                                    <p className="mb-0">HTTP Error codes based API processing</p>
                                                </div> 
                                            </div>                                                                            
                                        </div> 
                                    </div>
                                    <div className="qualify-mob-card card-bg card-shadow mt-4">
                                         <div className="row align-items-center justify-content-center">   
                                            <div className="col-12 qualify-list">                                         
                                                <div className="circular-icon" align="center" >
                                                    <i className="lni-leaf secondary-dark-font"></i>
                                                </div> 
                                                <div className="qualification-content">
                                                    <p className="mb-0">Handle app related API in Single place</p>
                                                </div> 
                                            </div>                                                                            
                                        </div> 
                                    </div>
                                    <div className="qualify-mob-card card-bg card-shadow mt-4">
                                         <div className="row align-items-center justify-content-center">   
                                            <div className="col-12 qualify-list">                                         
                                                <div className="circular-icon" align="center" >
                                                    <i className="lni-layers secondary-dark-font"></i>
                                                </div> 
                                                <div className="qualification-content">
                                                    <p className="mb-0">Experienced with MVVM and MVP Architectures</p>
                                                </div> 
                                            </div>                                                                            
                                        </div> 
                                    </div>
                                    <div className="qualify-mob-card card-bg card-shadow mt-4">
                                         <div className="row align-items-center justify-content-center">   
                                            <div className="col-12 qualify-list">                                         
                                                <div className="circular-icon" align="center" >
                                                    <i className="lni-key secondary-dark-font"></i>
                                                </div> 
                                                <div className="qualification-content">
                                                    <p className="mb-0">Experienced in Google API keys integrations</p>
                                                </div> 
                                            </div>                                                                            
                                        </div> 
                                    </div>                
                                    {/*<div className="qualify-mob-card card-bg card-shadow mt-3">
                                         <div className="row align-items-center">                                            
                                            <div className="col-md-2 col-3" align="center" >
                                                <i className="lni-android secondary-dark-font"></i>
                                            </div> 
                                            <div className="col-md-10 col-9 vertical-center pl-0">
                                                <p className="mb-0">Native Android Development</p>
                                            </div>                                                                             
                                        </div> 
                                    </div>
                                    <div className="qualify-mob-card card-bg card-shadow mt-3">
                                        <div className="row align-items-center">                                             
                                            <div className="col-md-2 col-3" align="center" >
                                                <i className="lni-laptop-phone secondary-dark-font"></i>
                                            </div>
                                            <div className="col-md-10 col-9 vertical-center pl-0">
                                                <p className="mb-0">User Experience Design</p>
                                            </div>                                                                            
                                        </div>  
                                    </div>
                                    <div className="qualify-mob-card card-bg card-shadow mt-3">
                                        <div className="row align-items-center">                                            
                                            <div className="col-md-2 col-3" align="center" >
                                                <i className="lni-list secondary-dark-font"></i>
                                            </div>  
                                             <div className="col-md-10 col-9 vertical-center pl-0">
                                                <p className="mb-0">Agile Software Development Methodologies</p>
                                            </div>                                   
                                        </div>  
                                    </div>
                                    <div className="qualify-mob-card card-bg card-shadow mt-3">
                                        <div className="row align-items-center">
                                            <div className="col-md-2 col-3" align="center" >
                                                <i className="lni-rocket secondary-dark-font"></i>
                                            </div>                                         
                                            <div className="col-md-10 col-9 vertical-center pl-0">
                                                <p className="mb-0">Hybrid Android Development<br/>(Native Script)</p>
                                            </div>                                                                                 
                                        </div>  
                                    </div>
                                    <div className="qualify-mob-card card-bg card-shadow mt-3">
                                        <div className="row align-items-center">
                                             <div className="col-md-2 col-3" align="center" >
                                                <i className="lni-select secondary-dark-font"></i>
                                            </div>                                        
                                            <div className="col-md-10 col-9 vertical-center pl-0">
                                                <p className="mb-0">Android vector based animation</p>
                                            </div>                                                                               
                                        </div> 
                                    </div>*/}
                                </div>
                                {/*<div className="col-sm-6 col-6 animated fadeInRight">                              
                                    <div className="qualify-mob-card card-bg card-shadow mt-3">
                                       <div className="row align-items-center">
                                            <div className="col-md-2 col-3" align="center" >
                                                <i className="lni-indent-increase secondary-dark-font"></i>
                                            </div>
                                            <div className="col-md-10 col-9 vertical-center pl-0">
                                                <p className="mb-0">Websocket Implementation</p>
                                            </div>                                      
                                        </div>  
                                    </div>
                                    <div className="qualify-mob-card card-bg card-shadow mt-3">
                                        <div className="row align-items-center">
                                            <div className="col-md-2 col-3" align="center" >
                                                <i className="lni-control-panel secondary-dark-font"></i>
                                            </div>
                                            <div className="col-md-10 col-9 vertical-center pl-0">
                                               <p className="mb-0">HTTP Error codes based API processing</p>
                                            </div>                                      
                                        </div>  
                                    </div>
                                    <div className="qualify-mob-card card-bg card-shadow mt-3">
                                         <div className="row align-items-center">
                                            <div className="col-md-2 col-3" align="center" >
                                                <i className="lni-leaf secondary-dark-font"></i>
                                            </div>
                                            <div className="col-md-10 col-9 vertical-center pl-0">
                                               <p className="mb-0">Handle app related API in Single place</p>
                                            </div>                                      
                                        </div>
                                    </div>
                                    <div className="qualify-mob-card card-bg card-shadow mt-3">
                                        <div className="row align-items-center">
                                            <div className="col-md-2 col-3" align="center" >
                                                <i className="lni-layers secondary-dark-font"></i>
                                            </div>
                                            <div className="col-md-10 col-9 vertical-center pl-0">
                                                <p className="mb-0">Experienced with MVVM and MVP Architectures</p>
                                            </div>                                      
                                        </div>  
                                    </div>
                                    <div className="qualify-mob-card card-bg card-shadow mt-3">
                                       <div className="row align-items-center">
                                            <div className="col-md-2 col-3" align="center" >
                                                <i className="lni-key secondary-dark-font"></i>
                                            </div>
                                            <div className="col-md-10 col-9 vertical-center pl-0">
                                                <p className="mb-0">Experienced in Google API keys integrations</p>
                                            </div>                                      
                                        </div>  
                                    </div>
                                </div>*/}
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-xl-4 col-lg-8 col-md-12 mt-3 animated fadeInLeft anim-delay-6s">
                                <div className="card-style primary-light-bg card-shadow">
                                    <h6 className="fancy-title white-font mb-0 text-center">Personal Skills</h6>
                                    <div className="personal-info-sec">
                                        <div className="row">
                                            <div className="col-md-12 display-inline">
                                                <i className="lni-android objective-icon secondary-light-font"></i>
                                                <p className="white-font">Leadership</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 display-inline">
                                                <i className="lni-android objective-icon secondary-light-font"></i>
                                                <p className="white-font">Creativity</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 display-inline">
                                                <i className="lni-android objective-icon secondary-light-font"></i>
                                                <p className="white-font">Teamwork</p>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12 display-inline">
                                                <i className="lni-android objective-icon secondary-light-font"></i>
                                                <p className="white-font">Learning new stuff & evolving</p>
                                            </div>
                                        </div>                                      
                                        <div className="row">
                                            <div className="col-md-12 display-inline">
                                                <i className="lni-android objective-icon secondary-light-font"></i>
                                                <p className="white-font">Making Brave Decisions</p>
                                            </div>
                                        </div>                                      
                                    </div>
                                    <img src="/images/motivation.svg" className="img-fluid motivation-img move-up-down" alt="Breaking Barrier"/>
                                </div>
                            </div>
                            <div className="col-xl-8 col-lg-12 col-md-12 animated fadeInRight mt-3 anim-delay-9s">
                                <h6 className="fancy-title primary-light-font">Highlights</h6>
                                <div className="highlight-card card-shadow card-bg">
                                    <div className="highlight-view highlight-card-top-border">
                                        <div className="highlight-content highlight-bottomview highlight-view-left highlight-view-right">
                                            <div className="row">
                                                <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2" align="center">
                                                    <div className="highlight-icon green-gradient">
                                                        <i className="lni-cog"></i>
                                                    </div>
                                                </div>
                                                <div className="col-xl-11 col-lg-11 col-md-10 col-sm-10">
                                                    <p className="highlight-text-center">Known for writing efficient, maintainable and reusable code</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dashed-border"></div>
                                    <div className="highlight-view highlight-topview highlight-view-left highlight-view-right">
                                        <div className="highlight-content highlight-bottomview highlight-view-left highlight-view-right">
                                            <div className="row">
                                                <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2" align="center">
                                                    <div className="highlight-icon purple-gradient">
                                                        <i className="lni-database"></i>
                                                    </div>
                                                </div>
                                                <div className="col-xl-11 col-lg-11 col-md-10 col-sm-10">
                                                    <p className="highlight-text-center">Experienced in Google Map api integrations and Firebase Realtime Database chating.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dashed-border"></div>
                                    <div className="highlight-view highlight-topview highlight-view-left highlight-view-right">
                                        <div className="highlight-content highlight-bottomview highlight-view-left highlight-view-right">
                                            <div className="row">
                                                <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2" align="center">
                                                    <div className="highlight-icon orange-gradient">
                                                        <i className="lni-layout"></i>
                                                    </div>
                                                </div>
                                                <div className="col-xl-11 col-lg-11 col-md-10 col-sm-10">
                                                    <p className="highlight-text-center">Proficient in design, data structures, problem-solving, and debugging</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dashed-border"></div>
                                    <div className="highlight-view highlight-topview highlight-view-left highlight-view-right">
                                        <div className="highlight-content highlight-bottomview highlight-view-left highlight-view-right">
                                            <div className="row">
                                                <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2" align="center">
                                                    <div className="highlight-icon pale-green-gradient">
                                                        <i className="lni-grid"></i>
                                                    </div>
                                                </div>
                                                <div className="col-xl-11 col-lg-11 col-md-10 col-sm-10">
                                                    <p className="highlight-text-center">Expert in the interaction between various devices and versions of Android</p>
                                                </div>
                                            </div>                                  
                                        </div>
                                    </div>
                                    <div className="dashed-border"></div>
                                    <div className="highlight-view highlight-topview highlight-view-left highlight-view-right">
                                        <div className="highlight-content highlight-bottomview highlight-view-left highlight-view-right">
                                            <div className="row">
                                                <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2" align="center">
                                                    <div className="highlight-icon pink-gradient">
                                                        <i className="lni-mobile"></i>
                                                    </div>
                                                </div>
                                                <div className="col-xl-11 col-lg-11 col-md-10 col-sm-10">
                                                    <p className="highlight-text-center">Ability to design for scale and Performance</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="dashed-border"></div>
                                    <div className="highlight-view highlight-topview highlight-view-left highlight-view-right highlight-card-bottom-border">
                                        <div className="highlight-content">
                                            <div className="row">
                                                <div className="col-xl-1 col-lg-1 col-md-2 col-sm-2" align="center">
                                                    <div className="highlight-icon blue-gradient">
                                                        <i className="lni-android"></i>
                                                    </div>
                                                </div>
                                                <div className="col-xl-11 col-lg-11 col-md-10 col-sm-10">
                                                    <p className="highlight-text-center">Created 3+ fully functional applications for Android devices</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>                                                      
                        </div>
                        <div className="row home-section-space">                            
                            <div className="col-xl-4 col-lg-6 col-md-12 home-section-space">
                                <div className="animated fadeInRight anim-delay-3s">
                                    <h6 className="fancy-title primary-light-font">Technical Skills</h6>
                                    <div className="card-bg card-shadow mb-3">
                                        <div className="tech-skill-card-content">
                                            <div className="row align-items-center">
                                                <div className="col-md-3 col-3" align="center">
                                                    <img src="images/kotlin.png" className="img-fluid" alt="Kotlin"/>
                                                </div>
                                                <div className="col-md-9 col-9">
                                                    <p className="mb-0 tech-skill-name">Kotlin</p>
                                                </div>                                              
                                            </div>                                      
                                        </div>                                  
                                    </div>
                                </div>
                                <div className="card-bg card-shadow tech-skill-card mb-3 animated fadeInRight anim-delay-6s">
                                    <div className="tech-skill-card-content">
                                        <div className="row align-items-center">
                                            <div className="col-md-3 col-3" align="center">
                                                <img src="images/java.png" className="img-fluid" alt="Java"/>
                                            </div>
                                            <div className="col-md-9 col-9">
                                                <p className="mb-0 tech-skill-name">Java</p>
                                            </div>                                          
                                        </div>
                                    </div>
                                </div>
                                <div className="card-bg card-shadow tech-skill-card mb-3 animated fadeInRight anim-delay-9s">
                                    <div className="tech-skill-card-content">
                                        <div className="row align-items-center">
                                            <div className="col-md-3 col-3" align="center">
                                                <img src="images/android.png" className="img-fluid" alt="Android"/>
                                            </div>
                                            <div className="col-md-9 col-9">
                                                <p className="mb-0 tech-skill-name">Android NDK</p>
                                            </div>                                          
                                        </div>
                                    </div>
                                </div>
                                <div className="card-bg card-shadow tech-skill-card mb-3 animated fadeInRight anim-delay-12s">
                                    <div className="tech-skill-card-content">
                                        <div className="row align-items-center">
                                            <div className="col-md-3 col-3" align="center">
                                                <img src="images/xml.png" className="img-fluid" alt="Xml"/>
                                            </div>
                                            <div className="col-md-9 col-9">
                                                <p className="mb-0 tech-skill-name">XML</p>
                                            </div>                                          
                                        </div>
                                    </div>
                                </div>
                                <div className="card-bg card-shadow tech-skill-card mb-3 animated fadeInRight anim-delay-15s">
                                    <div className="tech-skill-card-content">
                                        <div className="row align-items-center">
                                            <div className="col-md-3 col-3" align="center">
                                                <img src="images/database.png" className="img-fluid" alt="Database"/>
                                            </div>
                                            <div className="col-md-9 col-9">
                                                <p className="mb-0 tech-skill-name">Couchbase DB</p>
                                            </div>                                          
                                        </div>
                                    </div>
                                </div>
                                <div className="card-bg card-shadow tech-skill-card mb-3 animated fadeInRight anim-delay-18s">
                                    <div className="tech-skill-card-content">
                                        <div className="row align-items-center">
                                            <div className="col-md-3 col-3" align="center">
                                                <img src="images/nativescript.png" className="img-fluid" alt="Nativescript"/>
                                            </div>
                                            <div className="col-md-9 col-9">
                                                <p className="mb-0 tech-skill-name">NativeScript</p>
                                            </div>                                          
                                        </div>
                                    </div>
                                </div>
                                <div className="card-bg card-shadow tech-skill-card mb-3 animated fadeInRight anim-delay-21s">
                                    <div className="tech-skill-card-content">
                                        <div className="row align-items-center">
                                            <div className="col-md-3 col-3" align="center">
                                                <img src="images/vuejs.png" className="img-fluid" alt="Vuejs"/>
                                            </div>
                                            <div className="col-md-9 col-9">
                                                <p className="mb-0 tech-skill-name">VueJS</p>
                                            </div>                                          
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

export default QualificationComponent
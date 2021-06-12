import React from 'react'

export default function Bio() {
    return (
        <React.Fragment>
            <div class="jumbotron">
                <section className="page-section" id="services">
                    <div className="container">
                        <div className="text-center">
                            <h2 className="section-heading text-uppercase">Bio</h2>
                            <h3 className="section-subheading text-muted">Drum & Bass Producer From Buenos Aires, Argentina</h3>
                        </div>
                        
                        
                        
                        <div className="row text-center">
                            <div className="col-md-4">
                                <span className="fa-stack fa-4x">
                                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fas fa-shopping-cart fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="my-3">Releases</h4>
                                <p className="text-muted">With releases in black inferno records USA, Onset Audio USA and The Tech collective NZ, his music goes from deep-dark Dnb with a twisted touch of halftime-techno, to minimal-neurofunk influences</p>
                            </div>
                            <div className="col-md-4">
                                <span className="fa-stack fa-4x">
                                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fas fa-laptop fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="my-3">Live</h4>
                                <p className="text-muted">Going from the underground to renowned drum and bass parties in buenos aires like +160, DNB4life, Wave bass Rave, among others, his sets have a mix between minimal-dnb / jungle with a tech influence to hard neurofunk</p>
                            </div>
                            <div className="col-md-4">
                                <span className="fa-stack fa-4x">
                                    <i className="fas fa-circle fa-stack-2x text-primary"></i>
                                    <i className="fas fa-lock fa-stack-1x fa-inverse"></i>
                                </span>
                                <h4 className="my-3">Support</h4>
                                <p className="text-muted">he had support from Noisia in their radio with his from beyond ep, and supported by locked concept podcast By Lockjaw</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>  
        </React.Fragment>
    )
}

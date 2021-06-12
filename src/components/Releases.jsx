import React from 'react';


export default function Releases() {
    return (
        <React.Fragment>
            <section className="page-section bg-light" id="releases">
                <div className="container">
                    <div className="text-center">
                        <h2 className="section-heading text-uppercase">Releases</h2>
                        <h3 className="section-subheading text-muted">Info About Releases at date</h3>
                    </div>
                    <div className="row">
                                    <div className="col-lg-4">
                                        <div className="team-member">
                                            <img className="mx-auto rounded-circle" src= "https://i1.sndcdn.com/artworks-000538474323-jwrd52-t500x500.jpg"alt= "" />
                                            
                                            <p className="text-muted"> From Beyond </p>
                                            
                                            <a class="btn btn-dark btn-social mx-2" href="https://soundcloud.com/noised_dnb/sets/from-beyond"><i class="fab fa-facebook-f"></i></a>
                                             
                                            
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="team-member">
                                            <img class="mx-auto rounded-circle" src="https://i1.sndcdn.com/artworks-000533828574-ulmkts-t500x500.jpg" alt="" />
                                           
                                            <p class="text-muted">TTC018</p>
                                            
                                            <a class="btn btn-dark btn-social mx-2" href="https://soundcloud.com/noised_dnb/sets/ttc018-ep"><i class="fab fa-facebook-f"></i></a>
                                             
                                        </div>
                                    </div>
                                    <div class="col-lg-4">
                                        <div class="team-member">
                                            <img class="mx-auto rounded-circle" src="https://i1.sndcdn.com/artworks-000707286304-3iwrbr-t500x500.jpg" alt="" />
                                            
                                            <p class="text-muted">Monolith</p>
                                            
                                            <a class="btn btn-dark btn-social mx-2" href="https://soundcloud.com/noised_dnb/sets/monolith-ep-oa201"><i class="fab fa-facebook-f"></i></a>
                                             
                                        </div>
                                    </div>
                                </div>  

                    <div className="row">
                        <div className="col-lg-8 mx-auto text-center"><p className="large text-muted"></p></div>
                    </div>             
                </div> 
            </section>
        </React.Fragment>
    )
}

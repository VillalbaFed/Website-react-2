import React from 'react';
 

export default ({ picsLinks }) => {  
    return (
        <section className="page-section bg-light" id="team">
                    <div className="container">
                    { 
                    
                            picsLinks && picsLinks.map(( { title, caption }, index) => 
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="pics-bio">
                                            <img className="mx-auto  " src= "https://scontent.faep7-1.fna.fbcdn.net/v/t1.0-9/70281233_10157681339719626_3611737535073484800_o.jpg?_nc_cat=105&_nc_sid=cdbe9c&_nc_ohc=nrSKOepiNyIAX--1VmI&_nc_oc=AQlP0ZXxJkQU7JmiOnNlWh3htTkzzE7sCExTVRqn-O3h57dK3J0rDsFisrjPITvL2VM&_nc_ht=scontent.faep7-1.fna&oh=09c62cf88093c50c730d3b61c5a406d8&oe=5F8331FA "alt= "  " />
                                            <h4> { title } </h4>
                                        </div>
                                    </div>

                                    <div class="col-lg-4">
                                        <div className="pics-bio">
                                            <img className="mx-auto  " src="https://scontent.faep7-1.fna.fbcdn.net/v/t1.0-9/43163333_1810722748982784_6986356140552486912_o.jpg?_nc_cat=110&_nc_sid=cdbe9c&_nc_ohc=nqC1vBzk20kAX-06l41&_nc_ht=scontent.faep7-1.fna&oh=f46bb7b207a8de1c95cfa83486c8bf80&oe=5F837C35" alt="" />
                                            <h4> { title } </h4>
                                            
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-4">
                                        <div className="pics-bio">
                                           
                                            <h4> { title } </h4>   
                                        </div>
                                    </div>
                                    
                                </div>
                            )
                        }       



                         
                    </div>
         </section>

    )



}
import our_blog_data from '@/src/data/our-blog-data';
import Link from 'next/link';
import React from 'react';
import Solutions from "../../../data/solutions.json"


const Services = () => {
    return (
        <>
            <div className="ptg-blog-area dark-bg pt-120 pb-90">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title-wraper text-center">
                            <div className="tp-section">
                                {/* <span className="tp-section__subtitle mb-15 shadow-none text-rgb p-0 wow tpfadeUp">Studio News</span> */}
                                <h2
                                    className="tp-section__title text-non-rgb tp-rgb-border text-black text-uppercase mb-65 wow tpfadeUp" data-wow-delay=".4s">
                                    our   Solutions
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">

                {Solutions.Solutions.map((item, i) => 
                    <div key={i} className="col-xl-3 col-lg-6">
		
                        <div className="ptg-blog__item mb-30 wow tpfadeUp" data-wow-delay={item.delay} >
                            <div className="ptg-blog__item-thumb w-img" >
                                <img src={item.img} height={190} alt="" />
                            </div>
                            <div className="ptg-blog__item-content white-bg-2">
                                <div className="ptg-blog__item-meta">
                                    <span><a href="#"><b className="ptg-blog-cta">{item.category}</b></a></span>
                                    {/* <span><a href="#"> / <b> {item.month} {item.date}</b></a> </span> */}
                                </div>
                                <h3 className="ptg-blog__item-title text-black"><Link href={`/solutions/${item.id}`}>{item.title}</Link></h3>
                                <Link href={`/solutions/${item.id}`} className="ptg-blog-btn text- text-blue">Read More
                                    <span className="pl-10">
                                        <i className="fal fa-long-arrow-right"></i>
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                    )
                }
                </div>
                <div className="job-btn-wrapper text-center">
                     <Link href="/solutions" className="tp-black-btn wow tpfadeUp">
                        See More
                        <span>
                           <i className="fal fa-long-arrow-right"></i>
                           <i className="fal fa-long-arrow-right"></i>
                        </span>
                     </Link>
                  </div>
            </div>
        </div>
        </>
    );
};

export default Services;
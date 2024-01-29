import React from 'react'
import Header from '../header/Header'
import "../css/BlogPage.css"
import Nav from 'react-bootstrap/Nav';
import * as Icon from 'react-bootstrap-icons';
import sidebarImg from "../../img/blog/post-thumb.jpg"
import Footer from '../footer/FooterText';


function BlogDetails() {
    return (
        <div>
            <Header />
            <div className='BlogPage'>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 blog-desc">
                            <h2 className='blogTitle mt-5'>Blog</h2>
                            <ol className='breadcrumb'>
                                <li>
                                    <a href='/' className='active'>Home</a>
                                </li>
                                <li>
                                    <a href='/blog'>Blog</a>
                                </li>
                            </ol>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-sm-12 d-flex">
                            <div className="col-sm-4 col-xs-12">
                                <div className='post-img'></div>
                            </div>
                            <div className='col-sm-8 position-relative'>
                                <span className='featured_news'>Featured news</span>
                                <div className='post-img overlay'></div>
                                <div className="post-content">
                                    <div className='entry-meta w-100'>
                                        <ul className='category'>
                                            <li>
                                                <a href='/'>Admin</a>
                                            </li>
                                            <li>
                                                <a href='/'>15 march 2016</a>
                                            </li>
                                            <li>
                                                <a href='/'>Movie news  </a>
                                            </li>
                                        </ul>
                                        <div className="entry-social">
                                            <Nav.Link href="#home"> <Icon.Facebook />
                                            </Nav.Link>
                                            <Nav.Link href="#home"> <Icon.Twitter />
                                            </Nav.Link>
                                            <Nav.Link href="#home"> <Icon.Instagram />
                                            </Nav.Link>

                                        </div>
                                    </div>
                                    <br />
                                    <h2 className='entry-titlee'>
                                        The Battle of Algiers (Di Algeri)
                                        <i>(1967)</i>
                                    </h2>
                                    <p className='entry-excepts'>
                                        Conveniently transition market-driven total linkage rather than leveraged intellectual capital. Dynamically embrace resource sucking e-commerce before covalent deliverables. Distinctively communicate process-centric ideas without resource-leveling "outside the box" thinking. Competently initiate front-end customer service whereas alternative solutions.
                                    </p>
                                    <div className='read mt-5'>
                                        <a href='/' className=' readmore'>  Read more  </a>
                                        <div className='social-icon '>
                                            <span><Icon.HandThumbsUp /> </span>14
                                            <span><Icon.Command /> </span>11
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="container mt-4">
                    <div className="row">
                        <div className='col-sm-8 col-xs-12'>
                            <div className='blog-container'>
                                <div className='blog-item d-flex'>
                                    <div className='col-sm-4 col-xs-12 '>
                                        <div className="post-img2"></div>
                                    </div>
                                    <div className='col-sm-8 position-relative'>
                                        <div className='post-img overlay'></div>
                                        <div className="post-content">
                                            <div className='entry-meta w-100'>
                                                <ul className='category'>
                                                    <li>
                                                        <a href='/'>Admin</a>
                                                    </li>
                                                    <li>
                                                        <a href='/'>15 march 2016</a>
                                                    </li>
                                                    <li>
                                                        <a href='/'>Movie news  </a>
                                                    </li>
                                                </ul>
                                                <div className="entry-social">
                                                    <Nav.Link href="#home"> <Icon.Facebook />
                                                    </Nav.Link>
                                                    <Nav.Link href="#home"> <Icon.Twitter />
                                                    </Nav.Link>
                                                    <Nav.Link href="#home"> <Icon.Instagram />
                                                    </Nav.Link>

                                                </div>
                                            </div>
                                            <br />
                                            <h2 className='entry-titlee'>
                                                The Battle of Algiers (Di Algeri)
                                                <i>(1967)</i>
                                            </h2>
                                            <p className='entry-excepts'>
                                                Conveniently transition market-driven total linkage rather than leveraged intellectual capital. Dynamically embrace resource sucking e-commerce before covalent deliverables. Distinctively communicate process-centric ideas without resource-leveling "outside the box" thinking. Competently initiate front-end customer service whereas alternative solutions.
                                            </p>
                                            <div className='read mt-5'>
                                                <a href='/' className=' readmore'>  Read more  </a>
                                                <div className='social-icon '>
                                                    <span><Icon.HandThumbsUp /> </span>14
                                                    <span><Icon.Command /> </span>11
                                                </div>

                                            </div>
                                        </div>
                                    </div>

                                </div>
                                <div className='blog-item d-flex mt-3'>

                                    <div className='col-sm-4 col-xs-12 '>
                                        <div className="post-img2 post-img3"></div>
                                    </div>
                                    <div className='col-sm-8 position-relative'>
                                        <div className='post-img overlay'></div>
                                        <div className="post-content">
                                            <div className='entry-meta w-100'>
                                                <ul className='category'>
                                                    <li>
                                                        <a href='/'>Admin</a>
                                                    </li>
                                                    <li>
                                                        <a href='/'>15 march 2016</a>
                                                    </li>
                                                    <li>
                                                        <a href='/'>Movie news  </a>
                                                    </li>
                                                </ul>
                                                <div className="entry-social">
                                                    <Nav.Link href="#home"> <Icon.Facebook />
                                                    </Nav.Link>
                                                    <Nav.Link href="#home"> <Icon.Twitter />
                                                    </Nav.Link>
                                                    <Nav.Link href="#home"> <Icon.Instagram />
                                                    </Nav.Link>

                                                </div>
                                            </div>
                                            <br />
                                            <h2 className='entry-titlee'>
                                                The Battle of Algiers (Di Algeri)
                                                <i>(1967)</i>
                                            </h2>
                                            <p className='entry-excepts'>
                                                Conveniently transition market-driven total linkage rather than leveraged intellectual capital. Dynamically embrace resource sucking e-commerce before covalent deliverables. Distinctively communicate process-centric ideas without resource-leveling "outside the box" thinking. Competently initiate front-end customer service whereas alternative solutions.
                                            </p>
                                            <div className='read mt-5'>
                                                <a href='/' className=' readmore'>  Read more  </a>
                                                <div className='social-icon '>
                                                    <span><Icon.HandThumbsUp /> </span>14
                                                    <span><Icon.Command /> </span>11
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='blog-item d-flex mt-3'>

                                    <div className='col-sm-4 col-xs-12 '>
                                        <div className="post-img2 post-img4"></div>
                                    </div>
                                    <div className='col-sm-8 position-relative'>
                                        <div className='post-img overlay'></div>
                                        <div className="post-content">
                                            <div className='entry-meta w-100'>
                                                <ul className='category'>
                                                    <li>
                                                        <a href='/'>Admin</a>
                                                    </li>
                                                    <li>
                                                        <a href='/'>15 march 2016</a>
                                                    </li>
                                                    <li>
                                                        <a href='/'>Movie news  </a>
                                                    </li>
                                                </ul>
                                                <div className="entry-social">
                                                    <Nav.Link href="#home"> <Icon.Facebook />
                                                    </Nav.Link>
                                                    <Nav.Link href="#home"> <Icon.Twitter />
                                                    </Nav.Link>
                                                    <Nav.Link href="#home"> <Icon.Instagram />
                                                    </Nav.Link>

                                                </div>
                                            </div>
                                            <br />
                                            <h2 className='entry-titlee'>
                                                The Battle of Algiers (Di Algeri)
                                                <i>(1967)</i>
                                            </h2>
                                            <p className='entry-excepts'>
                                                Conveniently transition market-driven total linkage rather than leveraged intellectual capital. Dynamically embrace resource sucking e-commerce before covalent deliverables. Distinctively communicate process-centric ideas without resource-leveling "outside the box" thinking. Competently initiate front-end customer service whereas alternative solutions.
                                            </p>
                                            <div className='read mt-5'>
                                                <a href='/' className=' readmore'>  Read more  </a>
                                                <div className='social-icon '>
                                                    <span><Icon.HandThumbsUp /> </span>14
                                                    <span><Icon.Command /> </span>11
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='col-sm-4 sidebar'>
                            <h5 className='widget-title'>Search</h5>
                            <form className='search_form'>
                                <input type='text' placeholder='Search and hit Enter' />
                                <button>
                                    <Icon.Search />
                                </button>
                            </form>
                            <div className='widget'>
                                <h5 className='widget-title'>Categories</h5>
                                <ul>
                                    <li>
                                        <a href="/" >Gallery Post</a>
                                        <span>4</span>
                                    </li>
                                    <li>
                                        <a href="/" >Standard Post </a>
                                        <span>2</span>
                                    </li>
                                    <li>
                                        <a href="/" >Video Post  </a>
                                        <span>4</span>
                                    </li>
                                    <li>
                                        <a href="/" >News   </a>
                                        <span>3</span>
                                    </li>
                                    <li>
                                        <a href="/" >Quotes   </a>
                                        <span>1</span>
                                    </li>
                                </ul>
                            </div>
                            <div className='widget'>
                                <h5 className='widget-title'>twitter widget</h5>
                                <ul className='recent-posts'>
                                    <li>
                                        <a href="/" className='rp-media'>
                                            <img src={sidebarImg} alt='' />
                                        </a>
                                        <div className='rp-info'>
                                            <a href="/" className='link-post'>Smashing Mag  <i>@Smag 3m</i></a>
                                            <p>One of the craziest food truck
                                                designs we’ve ever seen!
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="/" className='rp-media'>
                                            <img src={sidebarImg} alt='' />
                                        </a>
                                        <div className='rp-info'>
                                            <a href="/" className='link-post'>Smashing Mag  <i>@Smag 3m</i></a>
                                            <p>One of the craziest food truck
                                                designs we’ve ever seen!
                                            </p>
                                        </div>
                                    </li>
                                    <li>
                                        <a href="/" className='rp-media'>
                                            <img src={sidebarImg} alt='' />
                                        </a>
                                        <div className='rp-info'>
                                            <a href="/" className='link-post'>Smashing Mag  <i>@Smag 3m</i></a>
                                            <p>One of the craziest food truck
                                                designs we’ve ever seen!
                                            </p>
                                        </div>
                                    </li>
                                </ul>

                            </div>
                            <div className='widget'>
                                <h5 className='widget-title'>RECENT POSTS
                                </h5>
                                <ul className='recent-posts'>
                                    <li>
                                        <a href="/" className='rp-media'>
                                            <img src={sidebarImg} alt='' />
                                        </a>
                                        <div className='rp-info'>
                                            <a href="/" className='link-post'>The movie star the professor and Mary Ann</a>

                                        </div>
                                    </li>
                                    <li>
                                        <a href="/" className='rp-media'>
                                            <img src={sidebarImg} alt='' />
                                        </a>
                                        <div className='rp-info'>
                                            <a href="/" className='link-post'>The movie star the professor and Mary Ann</a>

                                        </div>
                                    </li>
                                </ul>

                            </div>
                            <div className='widget'>
                                <h5 className='widget-title'>ARCHIVE
                                </h5>
                                <ul>
                                    <li>
                                        <a href="/" >January 2016 </a>
                                        <span>4</span>
                                    </li>
                                    <li>
                                        <a href="/" >Febrary 2015  </a>
                                        <span>2</span>
                                    </li>
                                    <li>
                                        <a href="/" >March 2016   </a>
                                        <span>4</span>
                                    </li>
                                    <li>
                                        <a href="/" >April 2015   </a>
                                        <span>14</span>
                                    </li>
                                    <li>
                                        <a href="/" >May 2017   </a>
                                        <span>23</span>
                                    </li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default BlogDetails
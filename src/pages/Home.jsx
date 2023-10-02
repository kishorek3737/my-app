import React from 'react';

function Home() {
  return (
    <div className="container-fluid px-0">
      <div className="header">
        <p className="mb-0">Clean hands save lives - Wash your hands!</p>
      </div>
      <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid mx-5">
            <a className="navbar-brand " href="#">
              <div className="link-ter-gal" style={{ color: '#09371F' }}>
                <img src="/img/icon.png" alt="" style={{ width: '20px', fontFamily: "'Rozha One', serif" }} />
                Network MD
              </div>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0 clr">
                <li className="nav-item">
                  <a aria-current="page" href="#OurDocters">Our doctors</a>
                </li>
                <li className="nav-item">
                  <a className="active" href="#HowItWorks">How It Works</a>
                </li>
                <li className="nav-item">
                  <a className=" " href="#BookaSession" tabIndex="-1" aria-disabled="true">Book a Session</a>
                </li>
                <li className="nav-item d-none d-md-block">
                  <a href="#" tabIndex="-1" aria-disabled="true">
                    <img src="/img/SVG.png" alt="Log in" />
                    Log in
                  </a>
                </li>
                <li className="nav-item d-block d-md-none">
                  <a href="#" tabIndex="1" aria-disabled="true">
                    Log in
                  </a>
                </li>
                <li className="nav-item ">
                  <a className=" active bttn d-none d-md-block" style={{ color: 'white' }} href="#" tabIndex="-1" aria-disabled="true">
                    Plans & Pricing
                  </a>
                  <a className=" active d-block d-md-none">Plans & Pricing</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
      <div className="imgmain" style={{ display: 'inline-grid', gridTemplateColumns: '1fr', gridTemplateRows: '200px' }}>
        <img className="imgg" src="/img/90.png" alt="" />
        <div className="s1">
          <h2>
            Virtual Healthcare <br />
            When You <br />
            Need It Most
          </h2>
          <div className="s2">
            <p>For Anyone, Anywhere, at Anytime.</p>
          </div>
          <a className="join" href="#">Join Now</a>
        </div>
      </div>
      <div id="sss">
        <p style={{ fontFamily: "'Rozha One', serif" }}><b>Meet Our Doctors</b></p>
      </div>
      <div className="container11 mx-4" id="OurDocters">
        <div className="content1 px-3">
          <div className="row">
            <div className="col-6 col-md-3 p-0">
              <div className="row">
                <img className="w-100" src="/img/87.png" alt="" />
              </div>
              <div className="row">
                <h6 className="py-2">Blake Shaw, M.D.</h6>
                <p className="px-5">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
              </div>
            </div>
            <div className="col-6 col-md-3 p-0">
              <div className="row">
                <img className="w-100" src="/img/99.png" alt="" />
              </div>
              <div className="row">
                <h6 className="py-2">Evelyn Wright, M.D.</h6>
                <p className="px-5">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
              </div>
            </div>
            <div className="col-6 col-md-3 p-0">
              <div className="row">
                <img className="w-100" src="/img/97.png" alt="" />
              </div>
              <div className="row">
                <h6 className="py-2">Jenna Cadwell, M.D</h6>
                <p className="px-5">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
              </div>
            </div>
            <div className="col-6 col-md-3 p-0">
              <div className="row">
                <img className="w-100" src="/img/98.png" alt="" />
              </div>
              <div className="row">
                <h6 className="py-2">David Wayne, M.D.</h6>
                <p className="px-5">I'm a paragraph. Click here to add your own text and edit me. Let your users get to know you.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sss">
        <p style={{ fontFamily: "'Rozha One', serif", margin: '4%' }}><b>How It Works</b></p>
      </div>
      <div className="ss1">
        I'm a paragraph. Click here to add your own text and edit me. It’s easy. <br />
        Just click “Edit Text” or double click me to add your own content and make changes to the font.
      </div>
      <div className="rbox" id="HowItWorks">
        <div className="green  d-none d-md-flex " style={{ borderRight: '2px solid #09371F' }}></div>
        <div className="rbox0">
          <div className="w-100 h-100">
            <div className="row" style={{ marginTop: '10%' }}>
              <div className="col d-flex w-100">
                <div className="mx-auto d-flex">
                  <img src="/img/Frame (1).png" alt="" />
                  <h4>Start a Chat
                    <p>
                      <br />I'm a paragraph. Click here to add your own text and edit me.
                    </p>
                  </h4>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex w-100">
                  <div className="mx-auto d-flex">
                    <img src="/img/Frame (2).png" alt="" />
                    <h4>Choose a Plan
                      <p>
                        <br />I'm a paragraph. Click here to add your own text and edit me.
                      </p>
                    </h4>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col d-flex w-100">
                  <div className="mx-auto d-flex">
                    <img src="/img/Frame.png" alt="" />
                    <h4>Book a Session
                      <p>
                        <br />I'm a paragraph. Click here to add your own text and edit me.
                      </p>
                    </h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div id="sss">
        <p style={{ fontFamily: "'Rozha One', serif", margin: '4%' }}><b>Certified. Responsive. Compassionate.</b></p>
      </div>
      <div className="rbox1" id="BookaSession">
        <div className="container">
          <div className="row">
            <div className="col-6 col-md-3">
              <div className="ccimg d-none d-md-block">
                <img style={{ height: '180px' }} src="/img/Frame (3).png" alt="" />
              </div>
              <div className="ccimg d-block d-md-none">
                <img src="/img/Frame (3).png" alt="" />
              </div>
              <div className="my-5 " style={{ textAlign: 'center' }}>
                <h6>Medical Consultation</h6>
                <p>1 hr</p>
                <a className="booknow" href="#" style={{ width: '35%' }}>Book Now</a>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="ccimg d-block d-md-none">
                <img src="/img/Frame (4).png" alt="" />
              </div>
              <div className="ccimg d-none d-md-block">
                <img style={{ height: '180px' }} src="/img/Frame (4).png" alt="" />
              </div>
              <div className="my-5 " style={{ textAlign: 'center' }}>
                <h6>Allergy Consultation</h6>
                <p>1 hr</p>
                <a className="booknow" href="#" style={{ width: '35%' }}>Book Now</a>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="ccimg d-block d-md-none">
                <img src="/img/Frame (5).png" alt="" />
              </div>
              <div className="ccimg d-none d-md-block">
                <img style={{ height: '180px' }} src="/img/Frame (5).png" alt="" />
              </div>
              <div className="my-5 " style={{ textAlign: 'center' }}>
                <h6>Psychology Consultation</h6>
                <p>1 hr</p>
                <a className="booknow" href="#" style={{ width: '35%' }}>Book Now</a>
              </div>
            </div>
            <div className="col-6 col-md-3">
              <div className="ccimg d-block d-md-none">
                <img src="/img/Frame (6).png" alt="" />
              </div>
              <div className="ccimg d-none d-md-block">
                <img style={{ width: '220px', height: '180px' }} src="/img/Frame (6).png" alt="" />
              </div>
              <div className="row my-5" style={{ textAlign: 'center' }}>
                <h6>Psychiatry Consultation</h6>
                <p>1 hr</p>
                <a className="booknow" href="#" style={{ width: '33%' }}>Book Now</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="story">
        <div className="story1">
          <div id="sss">
            <h6 style={{ fontFamily: "'Rozha One', serif", margin: '4%' }}><b>Patient Stories</b></h6>
          </div>
          <p style={{ fontFamily: "'Inter', sans-serif" }}>
            “I'm a testimonial. Click to edit me and add text that says something nice about you and your services. Let your customers review you and tell their friends how great you are.”
          </p>
          <div className="story2">
            <a href="/ContactForm" style={{ marginTop: '10px' }}>Add your Story Here</a> <br />
            <a href="/ContactStories" style={{ marginTop: '10px' }}>Stories</a>
          </div>
        </div>
      </div>
      <div className="mobile">
        <div className="div-phoneimage  d-none d-md-block">
          <div className="SVG-a-mobile-phone">
            <div className="image-aria-label">
              <div className="get-the-app">
                <div className="overlap-group">
                  <div className="overlap">
                    <img className="listitem-state" src="img/listitemstate.png" alt="" />
                    <img className="group" src="img/group.png" alt="" />
                  </div>
                  <div className="group-wrapper">
                    <img className="img" src="img/group-2.png" alt="" />
                  </div>
                  <div className="div">
                    <img className="mask" src="img/mask.svg" alt="" />
                    <img className="rectangle" src="img/rectangle.svg" alt="" />
                    <div className="tab-label">Feed</div>
                    <div className="text-wrapper">Home</div>
                    <div className="site-title-wrapper">
                      <div className="site-title">online-medical-consu</div>
                    </div>
                    <img className="img-2" src="img/choosecolor.svg" alt="" />
                    <img className="img-2" src="img/rectangle1.svg" alt="" />
                    <img className="img-2" src="img/shape.svg" alt="" />
                  </div>
                  <img className="element-elements-divider" src="img/element1.png" alt="" />
                  <div className="indicator-wrapper">
                    <img className="indicator" src="img/indicator.png" alt="" />
                  </div>
                  <img className="rectangle-2" src="img/rectangle3.svg" alt="" />
                  <img className="rectangle-3" src="img/rectangle3.svg" alt="" />
                </div>
              </div>
            </div>
          </div>
          <div className="image-wrapper">
            <img className="image" src="img/image.png" alt="" />
          </div>
        </div>
        <div className="mobilecon">
          <div className="mobilecon1">
            <h2>Join us on mobile!</h2>
            <p>The Spaces by Wix app lets you easily stay in touch and updated with us on the go. Just add your phone number and we’ll text you a link to download the app.</p>
          </div>
          <div className="mobilecon2 d-block d-md-flex">
            <input type="text" className="input1 d-none d-md-block" placeholder="+1" />
            <input type="text" className="input1" placeholder="Phone number" />
            <a className="booknow" href="#">Send</a>
          </div>
          <div className="imggg" style={{ padding: '3%' }}>
            <img src="/img/playstore.png" alt="" />
            <img src="/img/appstore.png" alt="" />
          </div>
        </div>
      </div>
      <div className="greenboxw w-100">
        <div className="greenbox w-40">
          <div className="row">
            <div className="col">
              <div className="networkmd">
                <h3>Network MD</h3>
                <div>
                  <p>For our latest health tips and tricks <br />subscribe below</p>
                </div>
                <div className="d-flex">
                  <input type="text" className="email1 input2" placeholder="E-mail" style={{ backgroundColor: 'transparent', borderBottom: '2px solid white' }} />
                  <a className="booknow mx-2" href="#" style={{ backgroundColor: '#D4FF00', color: 'black' }}>Send</a>
                </div>
                <div style={{ fontFamily: 'Inter', fontSize: '13px' }}>
                  <p>© 2035 by Network <br />Powered and secured by Wix</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="greenbox2">
                <div className="container" style={{ color: 'white' }}>
                  <div className="row m-5">
                    <div className="col">Menu</div>
                    <div className="col">Social</div>
                    <div className="col">Contact</div>
                  </div>
                  <div className="row">
                    <div className="col">
                      Our Doctors <br />How It Works <br />Book a Session <br />
                    </div>
                    <div className="col">
                      Facebook <br />Twitter <br />LinkedIn <br />Instagram
                    </div>
                    <div className="col">
                      123-456-7890 <br />info@mysite.com
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

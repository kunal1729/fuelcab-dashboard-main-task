import React, { useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Container } from '@mui/material';
import './BlogDetail.css';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import parse from 'html-react-parser'; // Import html-react-parser library

export default function BlogDetail() {
  const location = useLocation();
  const blog = location.state;

  // Ref for the last heading in the blog description
  const lastHeadingRef = useRef(null);

  // Function to scroll to the last heading
  const scrollToLastHeading = () => {
    if (lastHeadingRef.current) {
      lastHeadingRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Function to handle click on subheading
  const handleSubheadingClick = (e) => {
    //scrollToLastHeading();
   const source=e.target.id
   const target=source+'x'
   console.log(source,target)
    const xyz=document.getElementById(target)
    console.log(xyz)
    if(xyz){
      xyz.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(()=>{window.scrollBy(0,-100)},750)
   
    console.log('Scrolling to last heading...');
  };

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const extractHeadings = (description) => {
    const tempElement = document.createElement('div');
    tempElement.innerHTML = description;
    const headingElements = tempElement.querySelectorAll('h1, h2, h3, h4, h5, h6');
    return Array.from(headingElements).map((heading, index) => ({
      id: `heading${index + 1}`,
      text: heading.textContent
    }));
  };

  const headings = extractHeadings(blog.description);

  return (
    <>
      <Navbar />
      <Container maxWidth="lg">
        <div className="blog-title-container">
          <h2 className="blog-title" style={{ color: '#1D523B' }}>
            {blog.title}
          </h2>
        </div>
        <div className="blog-image-container">
          <img className="blog-image" src={blog.imageUrl} alt={blog.title} />
        </div>
        <div className="blog-detail-page">
          <div className="blog-container">
            <div className="sidebar" style={{ textAlign: 'justify' }}>
              <div className="sidebarinside">
                {headings.map((heading, index) => (
                  <a key={index} onClick={(e) => { e.preventDefault(); handleSubheadingClick(e); }}>
  <h3 id={heading.id}>{heading.text}</h3>
</a>

                ))}
              </div>
            </div>
            <div className="blog-description-container">
              <div className="blog-description">
                {/* Render blog description with HTML interpreted */}
                {parse(blog.description)}
                {/* Add an empty div with ref to the last heading */}
                <div ref={lastHeadingRef}></div>
              </div>
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </>
  );
}




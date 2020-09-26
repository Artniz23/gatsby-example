import React from 'react';
import {graphql, useStaticQuery} from 'gatsby';
import img from '../images/copy/image1.jpg';
import Img from 'gatsby-image';

const getImages = graphql`
{
    fixed: file(relativePath: {eq: "copy/image1.jpg"}) {
      childImageSharp {
        fixed(width: 300, height: 400) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: {eq: "copy/image2.jpg"}) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }  
`

const Images = () => {
    // console.dir(img);
    const data = useStaticQuery(getImages)
    // console.log(data);
    return (
        <section className="images">
            <article className="single-image">
                <h3>Basic image</h3>
                <img src={img} alt="img" width="100%"/>
            </article>
            <article className="single-image">
                <h3>Fixed image/blur</h3>
                <Img fixed={data.fixed.childImageSharp.fixed} />
            </article>
            <article className="single-image">
                <h3>Fluid image/svg</h3>
                <Img fluid={data.fluid.childImageSharp.fluid} />
                <div className="small">
                    <Img fluid={data.fluid.childImageSharp.fluid} />
                </div>
            </article>
        </section>
    );
}

export default Images;

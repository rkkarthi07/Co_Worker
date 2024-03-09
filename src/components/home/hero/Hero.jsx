
import Heading from "../../common/heading/Heading"
import "./Hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <div className='row'>
            <Heading subtitle='WELCOME TO HUSTLSEWORKS' title='Best Coworking Spaces' />
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur temporibus obcaecati voluptate sint dolorem quos blanditiis enim repellat quidem similique? Odit ducimus est iste maxime delectus inventore earum, qui animi.</p>
            <div className='button'>
              <button className='primary-btn'>
                GET STARTED NOW <i className='fa fa-long-arrow-alt-right'></i>
              </button>
              <button>
                VIEW SPACES <i className='fa fa-long-arrow-alt-right'></i>
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className='margin'></div>
    </>
  )
}

export default Hero

import { slideList } from '../../data/data'
import { Carousel } from "antd";
import "./Home.scss";
const Home = () => {
  return (
    <>
      <Carousel autoplay>
        <main className="slide-container">
          <div className='slide-wrapper'>
          {
            slideList.map((item,index)=> {
              return (
                <div className='content-box' key={index}>
                  <article className='title-box'>
                    <h1 className='title'>{item.title}</h1>
                    <button className='btn'>{item.button}</button>
                  </article>
                  <figure className='image-box'>
                    <img src={item.image}/>
                  </figure>

                </div>
              )
            })
          }
          </div>
        </main>
      </Carousel>
    </>
  );
};

export default Home;

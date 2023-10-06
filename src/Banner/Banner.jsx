

const Banner = () => {
          return (
            <div>
                    <div className="carousel w-full lg:h-[800px] md:h-[500px] h-[220px]">
                    <div
                    id="slide1"
                    className="carousel-item relative w-full"
                    style={{
                    backgroundImage: `url('https://templates.hibotheme.com/wazo/default/assets/img/project/single-project-1.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                    >
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">
                    ❮
                    </a>
                    <a href="#slide2" className="btn btn-circle">
                    ❯
                    </a>
                    </div>
                    </div>
                    <div
                    id="slide2"
                    className="carousel-item relative w-full"
                    style={{
                    backgroundImage: `url('https://templates.hibotheme.com/wazo/default/assets/img/project/project-6.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                    >
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">
                    ❮
                    </a>
                    <a href="#slide3" className="btn btn-circle">
                    ❯
                    </a>
                    </div>
                    </div>
                    <div
                    id="slide3"
                    className="carousel-item relative w-full"
                    style={{
                    backgroundImage: `url('https://templates.hibotheme.com/wazo/default/assets/img/project/single-project-1.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                    >
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">
                    ❮
                    </a>
                    <a href="#slide4" className="btn btn-circle">
                    ❯
                    </a>
                    </div>
                    </div>
                    <div
                    id="slide4"
                    className="carousel-item relative w-full"
                    style={{
                    backgroundImage: `url('https://templates.hibotheme.com/wazo/default/assets/img/project/single-project-1.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    }}
                    >
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">
                    ❮
                    </a>
                    <a href="#slide1" className="btn btn-circle">
                    ❯
                    </a>
                    </div>
                    </div>
                    </div>
                    </div>
          );
        };
        
        export default Banner;
        
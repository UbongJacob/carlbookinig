import './featured.css';

const Featured = () => {
  return (
    <div className='featured'>
      <div className='featuredItem'>
        <img
          src='https://t-cf.bstatic.com/xdata/images/city/square250/684500.webp?k=df54bcea224564a0a00497a2076d5338316a0b56692498eddb3c02c9a6cdde64&o='
          className='featuredImg'
          alt='Lagos img'
        />
        <div className='featuredTitles'>
          <h2>Lagos</h2>
          <h3>123 Properties</h3>
        </div>
      </div>

      <div className='featuredItem'>
        <img
          src='https://t-cf.bstatic.com/xdata/images/region/square250/60888.webp?k=8ea3a13375e605b6923d7080f90fb120c3184d54aed180303902450b2edb30d2&o='
          className='featuredImg'
          alt='Abuja img'
        />
        <div className='featuredTitles'>
          <h2>Abuja</h2>
          <h3>321 Properties</h3>
        </div>
      </div>

      <div className='featuredItem'>
        <img
          src='https://t-cf.bstatic.com/xdata/images/city/square250/822312.webp?k=f0e5aa24884bf61ddc08284c59807fa7d3a66b72fbdcec15488faf45824143b6&o='
          className='featuredImg'
          alt='Lekki img'
        />
        <div className='featuredTitles'>
          <h2>Lekki</h2>
          <h3>12 Properties</h3>
        </div>
      </div>
    </div>
  );
};

export default Featured;

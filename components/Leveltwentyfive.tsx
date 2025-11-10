import { useState } from 'react';
import Level25Card from './Level25Card';
import Modal from './Modal';

const Leveltwentyfive = () => {
  const [getImg, setImg] = useState('');
  const [closeModalValue,closeModal] = useState('hide')
  return (
    <>
    <div className="level25">
      <div>
        <h2>LEVEL 25 — The 6 Symbols of Our Rise</h2>
        <h5>Style 005 | 12:07.25</h5>


        <p>
          <strong>LEVEL 25</strong> is a creative and cultural movement
          developed under <strong>U&A Klodin</strong> — a pioneering Ghanaian
          streetwear brand. It represents a milestone in U&A’s journey,
          celebrating growth, heritage, and self-expression through fashion,
          music, and art.
          <br />
          The number “25” signifies the year 2025, marking a new chapter in the
          brand’s evolution and global expansion.
        </p>
      </div>

      <div>
        <div>
          {[
            '/level1.jpg',
            '/level2.jpg',
            '/level3.jpg',
            '/level4.jpg',
            '/level5.jpg',
            '/level6.jpg',
   
          ].map((v, k) => {
            return <Level25Card key={k} img={v} onClick={() =>{
              closeModal('show')
              setImg(v)
            } } />;
          })}
        </div>
        <div
          style={{
            backgroundImage: 'url("/una.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'top',
          }}
        ></div>
      </div>
    </div>

    <Modal image={getImg} actionFn={closeModal} value={closeModalValue} />

</>
  );
};

export default Leveltwentyfive;

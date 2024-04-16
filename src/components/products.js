import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarRegular } from '@fortawesome/free-regular-svg-icons';

const Products = () => {
  return (
    <div>
      <div style={{ margin: 'auto', width: '80%' }}>
        <div style={{ textAlign: 'center' }}>
          <h2>Hot Releases</h2>
          <div style={{ borderBottom: '2px solid #eee', marginBottom: '20px' }}></div>
        </div>
        <div className='row'>

        <div className='col-md-4' >
          <div style={{ width: '20%', marginBottom: '20px' }}>
            <div style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
              <img src="/OIP (12).jfif" alt="Product 1" style={{ width: '100%' }} />
              <h4>Product Name</h4>
              <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarRegular} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <button type="button" className='btn btn-dark'>Add to cart</button>
                <button type="button" className='btn btn-dark'>Buy now</button>
                <span>&#8377; 199</span>
              </div>
            </div>
          </div>
          {/* Repeat the above div for more products */}
        </div>
        <div  className='col-md-4'>
          <div style={{ width: '20%', marginBottom: '20px' }}>
            <div style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
              <img src="/OIP (12).jfif" alt="Product 1" style={{ width: '100%' }} />
              <h4>Product Name</h4>
              <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarRegular} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <button type="button" className='btn btn-dark'>Add to cart</button>
                <button type="button" className='btn btn-dark'>Buy now</button>
                <span>&#8377; 199</span>
              </div>
            </div>
          </div>
          {/* Repeat the above div for more products */}
        </div>
        <div  className='col-md-4'>
          <div style={{ width: '20%', marginBottom: '20px' }}>
            <div style={{ border: '1px solid #ccc', padding: '10px', textAlign: 'center' }}>
              <img src="/OIP (12).jfif" alt="Product 1" style={{ width: '100%' }} />
              <h4>Product Name</h4>
              <div>
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStar} />
                <FontAwesomeIcon icon={faStarRegular} />
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '10px' }}>
                <button type="button" className='btn btn-dark'>Add to cart</button>
                <button type="button" className='btn btn-dark'>Buy now</button>
                <span>&#8377; 199</span>
              </div>
            </div>
          </div>
          {/* Repeat the above div for more products */}
        </div>
        </div>
      </div>
    </div>
  );
}

export default Products;

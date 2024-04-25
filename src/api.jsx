import data from './db.json'
function Ret(){
    const products = data;
    return (
        <div>
          <h1>Products:</h1>
          <div className="products-container">
            <div className="category">
              <h2>Men</h2>
              <div className="product-list">
                {products[0].men.map(product => (
                  <div key={product.id} className="product">
                    <img src={product.imageUrl} alt={product.name} />
                    <div className="product-details">
                      <h3>{product.name}</h3>
                      <p>Price: {product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
  
            {/* <div className="category">
              <h2>Women</h2>
              <div className="product-list">
                {products[0].women.map(product => (
                  <div key={product.id} className="product">
                    <img src={product.imageUrl} alt={product.name} />
                    <div className="product-details">
                      <h3>{product.name}</h3>
                      <p>Price: {product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
  
            {/* <div className="category">
              <h2>Kids</h2>
              <div className="product-list">
                {products[0].kids.map(product => (
                  <div key={product.id} className="product">
                    <img src= {product.imageUrl} alt={product.name} />
                    <div className="product-details">
                      <h3>{product.name}</h3>
                      <p>Price: {product.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}
          </div>
        </div>
      );
    } 
export default Ret
export function Databinding()
{

    var data = [
        {Name: "Samsung TV", Price: 45000.55},
        {Name: "Mobile", Price:12000.44}
    ];
    var langs = [
        { title: "HTML", description: "It is a markup language" },
        { title: "CSS", description: "It configures styles for HTML" },
        { title: "Javascript", description: "It is lightweight JIT compiled programming language." }
    ];


    var products = [
        {
            title : "Apple iPhone 15 (Black, 128 GB)",
            price : 66999,
            image : "iphone_15pro.jpg",
            rating: {rate:4.6, ratings:17998, reviews:1223},
            offers: [
                 "Bank Offer10% off on Axis Bank Credit Card Txns, up to ₹750 on orders of ₹5,000 and aboveT&C",
                 "Bank Offer10% off on Axis Bank Credit Card EMI Txns, up to ₹1,000 on orders of ₹5,000 and aboveT&C",
                 "Bank OfferGet ₹25* instant discount for the 1st Flipkart Order using Flipkart UPIT&C",
                 "Special PriceGet extra ₹10901 off (price inclusive of cashback/coupon)T&C"
            ]
        },
        {
            title : "Apple iPhone 15 (Green, 128 GB)",
            price : 68999,
            image : "iphone_15pro.jpg",
            rating: {rate:4.7, ratings:11998, reviews:1523},
            offers: [
                 "Bank Offer10% off on Axis Bank Credit Card Txns, up to ₹750 on orders of ₹5,000 and aboveT&C",
                 "Bank Offer10% off on Axis Bank Credit Card EMI Txns, up to ₹1,000 on orders of ₹5,000 and aboveT&C",
                 "Bank OfferGet ₹25* instant discount for the 1st Flipkart Order using Flipkart UPIT&C",
                 "Special PriceGet extra ₹10901 off (price inclusive of cashback/coupon)T&C"
            ]
        }
    ]

    var datas = [
        {Category: 'Electronics', Products: ["TV", "Mobile", "Watch"]},
        {Category: 'Footwear', Products: ["Sneakers", "Casuals"]}
   ]
  
   var categories = ["Electronics", "Footwear", "Fashion", "Kids", "Women Fashion"];

    return(
        <div>
            <div className="container-fluid">
            <h2>Data Binding</h2>
            <table className="table table-hover ">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map(product=> <tr key={product.Name}> <td>{product.Name}</td> <td>{product.Price}</td> </tr>)
                    }
                </tbody>
            </table>
        </div>
         <div className="container-fluid">
         {
             products.map(product=>
                 <div className="row my-4" key={product.title}>
                 <div className="col-3">
                     <img width="100%" src={product.image} />
                 </div>
                 <div className="col-6
                 ">
                     <div className="h4">{product.title}</div>
                     <div className="mt-2">
                         <span className="badge bg-success text-white"> {product.rating.rate} <span className="bi bi-star-fill"></span> </span>
                         <span className="fw-bold text-secondary"> {product.rating.ratings.toLocaleString()} Ratings & {product.rating.reviews.toLocaleString()} </span>
                     </div>
                     <div className="mt-2">
                         <div className="h1"> {product.price.toLocaleString('en-in', {style:'currency', currency:'INR'})} </div>
                         <div> 10% Off <strike>79999</strike> </div>
                     </div>
                     <div className="mt-4">
                     <ul className="list-unstyled">
                         {
                             product.offers.map(offer => <li key={offer} className="bi bi-tag-fill text-success my-3"> <span className="text-secondary">{offer}</span> </li>)
                         }
                     </ul>
                     </div>
                 </div>
                 </div>
                 
                 )
         }
     </div>



     <div className="container-fluid">
            <section className="d-flex">
                {
                    products.map(product =>
                         <div key={product.title} className="card w-25 p-2 m-2">
                            <img src={product.image} className="card-img-top" height="250" />
                            <div className="card-header">
                                <div>{product.title}</div>
                            </div>
                            <div className="card-body">
                                <dl>
                                    <dt>Price</dt>
                                    <dd className="h4">{product.price.toLocaleString()}</dd>
                                    <dt>Rating</dt>
                                    <dd> {product.rating.rate} <span className="bi bi-star-fill text-success"></span> </dd>
                                </dl>
                                <div>
                                    <a href="#" className="link-success"> offers </a>
                                </div>
                            </div>
                            <div className="card-footer">
                                <button className="btn btn-success bi bi-cart4 w-100"> Add to Cart </button>
                            </div>
                         </div>
                        
                        )
                }
            </section>
        </div>

        <div className="container-fluid">
            <ol>
                { datas.map(item =>
                         <li key={item.Category}>
                            {item.Category}
                            <ul>
                                {
                                    item.Products.map(product=> <li key={product}>{product}</li>)
                                }
                            </ul>
                         </li>
                        )
                }
                
            </ol>


        </div>
        <div className="container-fluid">
           <h2>Data Binding</h2>
           <select>
              <option>Select a Product</option>
              {
                datas.map(item=>
                     <optgroup label={item.Category} key={item.Category}>
                        {
                            item.Products.map(product=><option>{product}</option>)
                        }
                     </optgroup>
                    )
              }
           </select>
        </div>
        <div className="container-fluid ">
           <h2>Data Binding</h2>
           {
              langs.map(topic=>
                 <details key={topic.title}>
                      <summary>{topic.title}</summary>
                      <p className="ms-4">{topic.description}</p>
                 </details>
                )
           }
        </div>
        <div className="container-fluid">
           <h2>Data Binding</h2>
           <ul className="list-box list-unstyled">
              {
                categories.map(category=> <li key={category} className="form-switch"><input className="form-check-input" type="checkbox"/> {category}</li>)
              }
           </ul>
        </div>
        
        </div>
        
    )
}
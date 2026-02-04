import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Layout from '../../components/Layout/Layout'
import ProductCard from '../../components/Product/ProductCard'
import Loader from '../../components/Loader/Loader'
import { productUrl } from '../../Api/endPoints'
import classes from './Result.module.css'

function Result() {
  const [results, setResults] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { categoryName } = useParams();

  useEffect(() => {
    setIsLoading(true);
    axios.get(`${productUrl}/products/category/${categoryName}`)
      .then((res) => {
        setResults(res.data);
        setIsLoading(false);
        document.title = `Amazon.com : ${categoryName}`;
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [categoryName]);

  return (
    <Layout>
      <section>
        <div className={classes.results_info}>
          <p>Results</p>
          <span>for "{categoryName}"</span>
        </div>
        {isLoading ? (
          <Loader />
        ) : (
          <div className={classes.products_container}>
            {results?.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                renderDesc={false}
                renderAdd={true}
              />
            ))}
          </div>
        )}
      </section>
    </Layout>
  )
}

export default Result

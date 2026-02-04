import React from 'react'
import Layout from '../../components/Layout/Layout'
import Carousel from '../../components/Carousel/CarouselEffect'
import Category from '../../components/Category/Category'
import Product from '../../components/Product/Product'

function Landing() {
  React.useEffect(() => {
    document.title = "Amazon.com. Spend less. Smile more.";
  }, []);

  return (
    <Layout>
      <Carousel />
      <Category />
      <Product />
    </Layout>
  )
}

export default Landing

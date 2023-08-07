import React from 'react';
import { portfolio } from '../../data';
import PortfolioItem from '../../components/PortfolioItem';
import "./portfolio.css";
import { motion, useScroll } from "framer-motion";

const Portfolio = () => {
  const { scrollYProgress } = useScroll();
  return (
    <section className="portfolio section">
      <motion.div
        className="progressBar"
        style={{ scaleX: scrollYProgress }}
      />
      <h2 className="section__title">
        My <span>Portofolio</span>
      </h2>
      <div className="portfolio__container container grid">
        {
          portfolio.map((item) => {
            return <PortfolioItem key={item.id} {...item} />
          })
        }
      </div>
    </section>
  )
}

export default Portfolio
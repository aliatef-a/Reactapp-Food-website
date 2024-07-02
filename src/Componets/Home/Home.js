import React, { useState } from "react";
import "./home.css";
import img from '../../imges/1.jpg';
import img3 from '../../imges/2.png'
import Data from "../../Data";


function Home() {

  const Products = Data

  return (
    <>
      <section className="numbers">
        <div className="container">
          <div className="row">
            <div className="col-md-3 col-sm-3">
              <h2>1287+</h2>
              <h6>SAVINGS</h6>
            </div>
            <div className="col-md-3 col-sm-3">
              <h2>5786+</h2>
              <h6>PHOTOS</h6>
            </div>
            <div className="col-md-3 col-sm-3">
              <h2>1440+</h2>
              <h6>ROCKETS</h6>
            </div>
            <div className="col-md-3 col-sm-3">
              <h2>7110+</h2>
              <h6>GLOBES</h6>
            </div>
          </div>
        </div>
      </section>

      <section className="pride" id="pride">
        <div className="container">
          <div className="row ">
            <div className="col-md-6 col-sm-12 image">
              <img src={img} />
            </div>

            <div className="title col-md-6 col-sm-12">
              <h2>
                We pride ourselves on making real food from the best
                ingredients.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
              <a href="#">Learn More</a>
            </div>
          </div>
        </div>
      </section>

      <section className="ingerdients">
        <div className="container">
          <div className="row">
            <div className="col-md-6 title">
              <h2>We make everything by hand with the best possible ingredients.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus.Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
              <ul>
                <li>Etiam sed dolor ac diam volutpat.</li>
                <li>Erat volutpat aliquet imperdiet.</li>
                <li>purus a odio finibus bibendum.</li>
              </ul>
              <a>Learn More</a>
            </div>
            <div className="col-md-6 image ">
              <img src={img3} />
            </div>
          </div>
        </div>
      </section>

      <section className="paralex">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>When a man's stomach is full it makes no
                difference whether he is rich or poor.</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio
                finibus bibendum in sit amet leo. Mauris feugiat erat tellus.

              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="blog" id="Explor">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>Explore Our Foods</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et purus a odio finibus bibendum in sit amet leo. Mauris feugiat erat tellus. Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.</p>
            </div>
          </div>
          <div className="row">
            {Products.map((prod) => {
              return (
                <div className="col-md-4">
                  <img src={prod.img} />
                  <div className="productText">
                    <h3>{prod.title}</h3>
                    <h4>{prod.time}</h4>
                    <h1>{prod.price}</h1>
                  </div>
                  <button>Order Now</button>
                </div>
              )
            })}

          </div>
        </div>
      </section>

      <section className="Questions" id="qts">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h1>Frequently Asked Questions</h1>
            </div>
            <div className="col-md-6">
              <h2>~ Is Foodera Bread really baked fresh each day?</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div>
            <div className="col-md-6">
              <h2>~ Do you bake breads containing animal fats or products?</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div>
            <div className="col-md-6">
              <h2>~ Can I order your products online?</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div>
            <div className="col-md-6">
              <h2>~ When are you opening a shop near me?</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="food">
        <div className="overflow"></div>
        <div className="container">
          <div className="row">
            <div className="col-md-6 w-75 col-sm-12">
              <h1>
              Baked fresh daily by bakers with passion.</h1>
            </div>
            <div className="col-md-6 w-25">
              <button>Learn more</button>
            </div>
          </div>
        </div>

      </section>      
    </>
  );
}

export default Home;

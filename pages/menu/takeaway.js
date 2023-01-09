import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Parallax } from "react-parallax";
import Link from "next/link";

export default function Takeaway() {
  return (
    <Layout title="Takeaway">
      <div
        alt="background image showing takeaway food"
        className="bg-center bg-cover w-full h-full duration-500 bg-fixed"
        style={{ backgroundImage: `url("/fishBackground.jpeg")` }}
      >
        <div className="w-screen h-full ">
          <div className="w-full h-[15.5rem] md:h-[19rem] relative transition duration-500 flex justify-center items-center bg-black/40 flex-col">
            <div className="title p-5 -mt-5 ">
              <h1 className="text-4xl md:text-7xl font-bold">Takeaway</h1>
              <p className="text-m">Menu</p>
            </div>

            <div className="hidden resp:flex flex-row resp:gap-8 -mb-12 mt-5 text-sm font-bold px-4">
              <ul>
                <li>
                  <Link href="#coldstarters_t">Cold Starters</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="#hotstarters_t">Hot Starters</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="#friedfish_t">Fried Fish</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="#grilledfish_t">Grilled Fish</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="#chipsandsides_t">Chips & Sides</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="#sausages_and_deep_fries_t">
                    Sausages & Deep Fries
                  </Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="#extras_t">Extras</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="#colddrinks_t">Cold Drinks</Link>
                </li>
              </ul>

              <ul>
                <li>
                  <Link href="/menu/restaurant">Restaurant</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Menu Section */}
          <div className="flex justify-center mt-4 h-full text-left">
            <div id="coldstarters_t" className="min-w py-8 bg-teal-700 w-11/12 xl:10/12 2xl:w-9/12 rounded-xl mb-4">
              <h2
                className="flex justify-center text-5xl font-bold"
              >
                Cold Starters
              </h2>

              <div className="cold-starters-items">
                <div className="grid grid-cols-1 2xl:grid-cols-2 h-full mt-5 text-2xl">
                  {/* Left Side Menu */}
                  <div className="left-side">
                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Hummus</span>
                          <span>£3.50</span>
                        </p>
                      </div>
                      <p className="md:pr-16 text-sm mt-1">
                        Crushed Chickpeas, Blended with Tahini, Lemon Juice,
                        Garlic.
                      </p>
                    </div>

                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Tarama</span> 
                          <span>£3.50</span>
                        </p>
                      </div>
                      <p className="md:pr-16 text-sm mt-1">
                        Creamy, Pale Pink Whipped Cod Roe, Fish Roe Paste.
                      </p>
                    </div>

                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Cacik</span>
                          <span>£3.50</span>
                        </p>
                      </div>
                      <p className="pr-16 text-sm mt-1">
                        Cucumber & Hint of Garlic in a Creamy Yogurt Sauce.
                      </p>
                    </div>

                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Kisir</span>
                          <span>£3.90</span>
                        </p>
                      </div>
                      <p className="md:pr-16 text-sm mt-1">
                        Crushed Wheat Celery, Crushed Hazelnut, Tomato Sauce,
                        Parsley, Peppers, Mint & Herbs.
                      </p>
                    </div>

                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Patlican Sosulu</span>
                          <span>£4.30</span>
                        </p>
                      </div>
                      <p className="md:pr-16 text-sm mt-1">
                        Chopped Aubergine with a Stuffing Prepared from Onions,
                        Green Peppers, Tomatoes, Parsley & a Hint of Garlic.
                      </p>
                    </div>
                  </div>

                  <div className="left-[50.5%] bg-white  hidden h-[24.5rem] z-[2] w-1 rounded-full 2xl:block absolute"></div>

                  {/* Right Side Menu */}
                  <div className="right-side">
                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Spinach Tarator</span>
                          <span>£4.50</span>
                        </p>
                      </div>
                      <p className="md:pr-16 text-sm mt-1">
                        Fresh Spinach with Creamy Yogurt & Hint of Garlic.
                      </p>
                    </div>

                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Prawn Cocktail</span>
                          <span>£5.90</span>
                        </p>
                      </div>
                      <p className="md:pr-16 text-sm mt-1">
                        Atlantic Prawns in a Classic Marie Rose Sauce.
                      </p>
                    </div>

                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Avacado Prawn Salad</span>
                          <span>£6.90</span>
                        </p>
                      </div>
                      <p className="md:pr-16 text-sm mt-1">
                        Atlantic Prawns topped with Avacado & Shredded Cos
                        Lettuce.
                      </p>
                    </div>

                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between" id="hotstarters_t">
                          <span>Mixed Meze</span>
                          <span>£6.90</span>
                        </p>
                      </div>
                      <p className="md:pr-16 text-sm mt-1">
                        A Selection of Cold Starters in a Single Plate.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <h2
                className="flex justify-center text-5xl font-bold mt-5"
              >
                Hot Starters
              </h2>
              <div className="hot-starters-items">
                <div className="grid grid-cols-1 2xl:grid-cols-2 h-full mt-5 text-2xl">
                  {/* Left Side Menu */}
                  <div className="left-side">
                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Cod Roe</span>
                          <span>£3.00</span>
                        </p>
                      </div>
                      <p className="md:pr-16 text-sm mt-1">
                        Cod Roe is Fried in Batter/Matzo Meal.
                      </p>
                    </div>

                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Fish Cake</span>
                          <span>£3.00</span>
                        </p>
                      </div>
                      <p className="md:pr-16 text-sm mt-1">Fried Fish Cake.</p>
                    </div>

                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Falafel</span>
                          <span>£4.90</span>
                        </p>
                      </div>
                      <p className="md:pr-16 text-sm mt-1">
                        Shallow Fried Chickpeas, Parsley, Hummus & Cos Lettuce.
                      </p>
                    </div>
                  </div>
                  <div className="left-[50.5%] bg-white hidden 2xl:block absolute h-[13rem] z-[2] w-1 rounded-full"></div>

                  {/* Right Side Menu */}
                  <div className="right-side">
                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Imam Bayildi</span>
                          <span>£5.00</span>
                        </p>
                      </div>
                      <p className="pr-16 text-sm mt-1">
                        Aubergine Stuffed with Onions, Tomato & Green Peppers.
                      </p>
                    </div>

                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Calamari</span>
                          <span>£6.00</span>
                        </p>
                      </div>
                      <p className="pr-16 text-sm mt-1">
                        Freshly Fried Squids.
                      </p>
                    </div>

                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between"  id="friedfish_t">
                          <span>Grilled Halloumi</span>
                          <span>£6.00</span>
                        </p>
                      </div>
                      <p className="pr-16 text-sm mt-1">
                        Grilled Halloumi & Cos Lettuce.
                      </p>
                    </div>
                  </div>
                </div>

                <h2
                 
                  className="flex justify-center text-5xl font-bold mt-5"
                >
                  Fried Fish
                </h2>
                <p className="flex justify-center text-sm mt-1">
                  (Chips are not included and it is an additional purchase)
                </p>

                <div className="main-course-items">
                  <div className="grid grid-cols-1 2xl:grid-cols-2 h-full mt-5 text-2xl">
                    {/* Left Side Menu */}
                    <div className="left-side">
                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Cod (Regular/Large)</span>
                            <span>£9.30/£10.70</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          Cod Fried in Batter/Matzo Meal.
                        </p>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Cod Goujons (Regular/Large)</span>
                            <span>£9.30/£13.80</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          Cod Fried in Batter/Matzo Meal.
                        </p>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Scampi (Regular/Large)</span>
                            <span>£9.30/£12.80</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          Scampi Fried - Regular 10 Pieces, Large 15 Pieces
                        </p>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Haddock (Regular/Large)</span>
                            <span>£9.50/£11.00</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          Haddock Fried in Batter/Matzo Meal.
                        </p>
                      </div>
                    </div>

                    <div className="left-[50.5%] bg-white hidden 2xl:block absolute h-[17.5rem] z-[2] w-1 rounded-full"></div>

                    {/* Right Side Menu */}
                    <div className="right-side">
                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Plaice (Regular/Large)</span>
                            <span>£9.50/£11.00</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          Plaice Fried in Batter/Matzo Meal.
                        </p>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Salmon</span>
                            <span>£11.50</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          Salmon Fried in Batter/Matzo Meal.
                        </p>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Skate</span>
                            <span>£12.70</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          Skate Fried in Batter/Matzo Meal.
                        </p>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between" id="grilledfish_t">
                            <span>Halibut Steak</span>
                            <span>£16.80</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          Halibut Steak Fried in Batter/Matzo Meal.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <h2
                  className="flex justify-center text-5xl font-bold mt-5"
                >
                  Grilled Fish
                </h2>
                <p className="flex justify-center text-sm mt-1">
                  (Complimentary Salad Given, Chips are not included and it is
                  an additional purchase)
                </p>

                <div className="main-course-items">
                  <div className="grid grid-cols-1 2xl:grid-cols-2 h-full mt-5 text-2xl">
                    {/* Left Side Menu */}
                    <div className="left-side">
                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Cod (Regular/Large)</span>
                            <span>£11.90/£13.40</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          Charcoal Grilled Cod.
                        </p>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Haddock (Regular/Large)</span>
                            <span>£12.30/£13.80</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          Charcoal Grilled Haddock.
                        </p>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Plaice (Regular/Large)</span>
                            <span>£12.30/£13.80</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          Charcoal Grilled Plaice.
                        </p>
                      </div>
                    </div>

                    <div className="left-[50.5%] bg-white hidden 2xl:block absolute h-[13rem] z-[2] w-1 rounded-full"></div>

                    {/* Right Side Menu */}
                    <div className="right-side">
                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Salmon</span>
                            <span>£14.80</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          Charcoal Grilled Salmon.
                        </p>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Halibut</span>
                            <span>£15.80</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          Charcoal Grilled Halibut.
                        </p>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between" id="chipsandsides_t">
                            <span>Sea Bass</span>
                            <span>£15.90</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          Charcoal Grilled Sea Bass.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2 
                  className="flex justify-center text-5xl font-bold mt-5"
                >
                  Chips & Sides
                </h2>

                <div className="chips-and-sides">
                  <div className="grid grid-cols-1 2xl:grid-cols-2 h-full mt-5 text-2xl">
                    {/* Left Side Menu */}
                    <div className="left-side">
                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Regular/Large Chips</span>
                            <span>£3.00/£4.00</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Jacket Potato</span>
                            <span>£4.00</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Beef & Onion Pie</span>
                            <span>£4.00</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Chicken & Mushroom Pie</span>
                            <span>£4.00</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Steak & Kidney Pie</span>
                            <span>£4.00</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="left-[50.5%] bg-white  hidden h-[15rem] z-[2] w-1 rounded-full 2xl:block absolute"></div>

                    {/* Right Side Menu */}
                    <div className="right-side">
                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>New Potatoes</span>
                            <span>£4.50</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Jacket & Beans</span>
                            <span>£5.00</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Jacket & Cheese</span>
                            <span>£5.00</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Jacket & Coleslaw</span>
                            <span>£5.00</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between" id="sausages_and_deep_fries_t">
                            <span>Jacket & Salad</span>
                            <span>£5.00</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2
                  className="flex justify-center text-5xl font-bold mt-5"
                >
                  Sausages & Deep Fries
                </h2>

                <div className="sausages-deep-fries">
                  <div className="grid grid-cols-1 2xl:grid-cols-2 h-full mt-5 text-2xl">
                    {/* Left Side Menu */}
                    <div className="left-side">
                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Jumbo Sausage</span>
                            <span>£2.20</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Jumbo Saveloy</span>
                            <span>£2.20</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Sausage & Batter</span>
                            <span>£2.40</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="left-[50.5%] bg-white  hidden h-[8.7rem] z-[2] w-1 rounded-full 2xl:block absolute"></div>

                    {/* Right Side Menu */}
                    <div className="right-side">
                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Veg Spring Roll</span>
                            <span>£2.40</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>10 Onion Rings</span>
                            <span>£4.00</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between" id="extras_t">
                            <span>10 Chicken Nuggets</span>
                            <span>£6.50</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2
                  className="flex justify-center text-5xl font-bold mt-5"
                >
                  Extras
                </h2>

                <div className="extras">
                  <div className="grid grid-cols-1 2xl:grid-cols-2 h-full mt-5 text-2xl">
                    {/* Left Side Menu */}
                    <div className="left-side">
                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Tartar Sauce Sachet (10ml)</span>
                            <span>£0.20</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Ketchup Sauce Sachet (10ml)</span>
                            <span>£0.20</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Mayonnaise Sauce Sachet (10ml)</span>
                            <span>£0.20</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Pickled Gherkin/Onion</span>
                            <span>£1.00</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Pickled Onion</span>
                            <span>£1.00</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Mushy Peas</span>
                            <span>£1.80</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Curry Sauce</span>
                            <span>£1.80</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Baked Beans</span>
                            <span>£1.90</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Garden Peas</span>
                            <span>£1.90</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="left-[50.5%] bg-white  hidden h-[27.5rem] z-[2] w-1 rounded-full 2xl:block absolute"></div>

                    {/* Right Side Menu */}
                    <div className="right-side">
                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Big Tub Tartar Sauce</span>
                            <span>£2.40</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Big Tub of Chilli Sauce</span>
                            <span>£2.40</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Coleslaw</span>
                            <span>£2.50</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Spinach</span>
                            <span>£3.40</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Broccoli</span>
                            <span>£3.40</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Cauliflower</span>
                            <span>£3.40</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Broccoli</span>
                            <span>£3.40</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Mixed Salad</span>
                            <span>£3.50</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between" id="colddrinks_t">
                            <span>Chopped Salad</span>
                            <span>£4.50</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2
                  className="flex justify-center text-5xl font-bold mt-5"
                >
                  Cold Drinks
                </h2>

                <div className="cold-drinks-items">
                  <div className="grid grid-cols-1 2xl:grid-cols-2 h-full mt-5 text-2xl">
                    {/* Left Side Menu */}
                    <div className="left-side">
                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>Coke</span>
                            <span>£1.30</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>Coke Zero/Diet Coke</span>
                            <span>£1.30</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>Fanto Orange</span>
                            <span>£1.30</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="left-[50.5%] bg-white  hidden h-[8.8rem] z-[2] w-1 rounded-full 2xl:block absolute"></div>

                    {/* Right Side Menu */}
                    <div className="right-side">
                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>7up/7up Zero</span>
                            <span>£1.30</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>Shandy Bass</span>
                            <span>£1.50</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>Perrier Water</span>
                            <span>£1.80</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Parallax } from "react-parallax";
import Link from "next/link";

export default function Restaurant() {
  return (
    <Layout title="Restaurant">
      <div
        alt="background image showing restaurant food"
        className="bg-center bg-cover w-full h-full duration-500 bg-fixed"
        style={{ backgroundImage: `url("/fishBackground2.jpeg")` }}
      >
        <div className="w-screen h-full ">
          <div className="w-full h-[15.5rem] md:h-[19rem] relative transition duration-500 flex justify-center items-center bg-black/40 flex-col">
            <div className="title p-5 group">
              <h1 className="text-4xl md:text-7xl font-bold">Restaurant</h1>
              <p className="text-m">Menu</p>
            </div>

            <div className="hidden resp:flex flex-row resp:gap-8 -mb-12 mt-5 text-sm font-bold px-4">
              <ul>
                <li>
                  <Link href="#coldstarters">Cold Starters</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="#hotstarters">Hot Starters</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="#maincourse">Main Course</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="#vegetarian">Vegetarian</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="#extras">Extras</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="#colddrinks">Cold Drinks</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="#hotdrinks">Hot Drinks</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="#desserts">Desserts</Link>
                </li>
              </ul>
              <ul>
                <li>
                  <Link href="/menu/takeaway">Takeaway</Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Menu Section */}
          <div className="flex justify-center mt-4 h-full text-left">
            <div className="min-w py-8 bg-teal-700 w-12/12 sm:w-11/12 xl:10/12 2xl:w-9/12 rounded-xl mb-4" id="coldstarters">
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
                          <span>Melon</span>
                          <span>£3.95</span>
                        </p>
                      </div>
                      <p className="md:pr-16 text-sm mt-1">Sliced Melon</p>
                    </div>

                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Patlican Sosulu</span>
                          <span>£4.45</span>
                        </p>
                      </div>
                      <p className="md:pr-16 text-sm mt-1">
                        Chopped Aubergine with a Stuffing Prepared from Onions,
                        Green Peppers, Tomatoes, Parsley & a Hint of Garlic.
                      </p>
                    </div>

                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Hummus</span>
                          <span>£4.45</span>
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
                          <span>£4.45</span>
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
                          <span>£4.45</span>
                        </p>
                      </div>
                      <p className="pr-16 text-sm mt-1">
                        Cucumber & Hint of Garlic in a Creamy Yogurt Sauce.
                      </p>
                    </div>
                  </div>

                  <div className="left-[50.5%] bg-white  hidden h-[23.2rem] z-[2] w-1 rounded-full 2xl:block absolute"></div>

                  {/* Right Side Menu */}
                  <div className="right-side">
                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Spinach Tarator</span>
                          <span>£4.45</span>
                        </p>
                      </div>
                      <p className="md:pr-16 text-sm mt-1">
                        Fresh Spinach with Creamy Yogurt & Hint of Garlic.
                      </p>
                    </div>

                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Kisir</span>
                          <span>£4.45</span>
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
                          <span>Prawn Cocktail</span>
                          <span>£6.45</span>
                        </p>
                      </div>
                      <p className="md:pr-16 text-sm mt-1">
                        Atlantic Prawns in a Classic Marie Rose Sauce.
                      </p>
                    </div>

                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Mixed Meze</span>
                          <span>£7.45</span>
                        </p>
                      </div>
                      <p className="md:pr-16 text-sm mt-1">
                        A Selection of Cold Starters in a Single Plate.
                      </p>
                    </div>

                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between" id="hotstarters">
                          <span>Avacado Prawn Salad</span>
                          <span>£7.50</span>
                        </p>
                      </div>
                      <p className="md:pr-16 text-sm mt-1">
                        Atlantic Prawns topped with Avacado & Shredded Cos
                        Lettuce.
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
                          <span>Cod Roe / Fish Cake</span>
                          <span>£3.90</span>
                        </p>
                      </div>
                      <p className="md:pr-16 text-sm mt-1">
                        Cod Roe is Fried in Batter/Matzo Meal or Fried Fish
                        Cake.
                      </p>
                    </div>

                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Lentil Soup</span>
                          <span>£4.45</span>
                        </p>
                      </div>
                      <p className="md:pr-16 text-sm mt-1">
                        Red Lentils, Organic Seasonal Vegatables, Fresh Herbs &
                        Spices.
                      </p>
                    </div>

                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Fish Soup</span>
                          <span>£4.45</span>
                        </p>
                      </div>
                      <p className="md:pr-16 text-sm mt-1">
                        Cod, Salmon & Halibut.
                      </p>
                    </div>

                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Tomato Soup</span>
                          <span>£4.45</span>
                        </p>
                      </div>
                      <p className="md:pr-16 text-sm mt-1">
                        Chopped Tomato, Organic Seasonal Vegatables, Fresh Herbs
                        & Spices.
                      </p>
                    </div>
                  </div>

                  <div className="left-[50.5%] bg-white hidden 2xl:block absolute h-[17.4rem] z-[2] w-1 rounded-full"></div>

                  {/* Right Side Menu */}
                  <div className="right-side">
                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Imam Bayildi</span>
                          <span>£4.90</span>
                        </p>
                      </div>
                      <p className="pr-16 text-sm mt-1">
                        Aubergine Stuffed with Onions, Tomato & Green Peppers.
                      </p>
                    </div>

                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Falafel</span>
                          <span>£5.90</span>
                        </p>
                      </div>
                      <p className="md:pr-16 text-sm mt-1">
                        Shallow Fried Chickpeas, Parsley, Hummus & Cos Lettuce.
                      </p>
                    </div>

                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between">
                          <span>Calamari</span>
                          <span>£5.90</span>
                        </p>
                      </div>
                      <p className="pr-16 text-sm mt-1">
                        Freshly Fried Squids.
                      </p>
                    </div>

                    <div className="flex flex-col px-4 mb-4 ">
                      <div className="flex justify-between ">
                        <p className="menu w-full flex justify-between" id="maincourse">
                          <span>Grilled Halloumi</span>
                          <span>£5.90</span>
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
                  Main Course
                </h2>
                <p className="flex justify-center text-sm mt-1">
                  (With Complimentary Salad)
                </p>

                <div className="main-course-items">
                  <div className="grid grid-cols-1 2xl:grid-cols-2 h-full mt-5 text-2xl">
                    {/* Left Side Menu */}
                    <div className="left-side">
                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Cod Goujons</span>
                            <span>£12.50</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          8 Cod Bites Fried in Batter/Matzo Meal. Served with
                          Chips or Jacket Potato or New Potato.
                        </p>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Cod</span>
                            <span>£13.50</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          Cod Fried in Batter/Matzo Meal or Grilled (+£1).
                          Served with Chips or Jacket Potato or New Potato.
                        </p>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Scampi</span>
                            <span>£13.70</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          10 Pieces of Fried Breaded Scampi. Served with Chips
                          or Jacket Potato or New Potato.
                        </p>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Haddock</span>
                            <span>£14.20</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          Haddock Fried in Batter/Matzo Meal or Grilled (+£1).
                          Served with Chips or Jacket Potato or New Potato.
                        </p>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Plaice Fillet</span>
                            <span>£14.20</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          Plaice Fried in Batter/Matzo Meal or Grilled (+£1).
                          Served with Chips or Jacket Potato or New Potato.
                        </p>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Salmon Fillet</span>
                            <span>£14.20</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          Salmon Fried in Batter/Matzo Meal or Grilled (+£1).
                          Served with Chips or Jacket Potato or New Potato.
                        </p>
                      </div>
                    </div>

                    <div className="left-[50.5%] bg-white hidden 2xl:block absolute h-[34rem] z-[2] w-1 rounded-full"></div>

                    {/* Right Side Menu */}
                    <div className="right-side">
                      <div className="flex flex-col px-4 mb-4">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Sea Bass</span>
                            <span>£17.90</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          Charcoal Grilled Sea Bass from the Mediterranean Sea.
                          Served with Chips or Jacket Potato or New Potato.
                        </p>
                      </div>
                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Skate</span>
                            <span>£17.80</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          Skate Fried in Batter/Matzo Meal or Grilled (+£1).
                          Served with Chips or Jacket Potato or New Potato.
                        </p>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Halibut Steak</span>
                            <span>£19.90</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          Halibut Steak Fried in Batter/Matzo Meal or Grilled
                          (+£1). Served with Chips or Jacket Potato or New
                          Potato.
                        </p>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Plaice on the Bone</span>
                            <span>Price Varies</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          Whole Plaice Fried in Batter/Matzo Meal or Grilled
                          (+£1). Served with Chips or Jacket Potato or New
                          Potato.
                        </p>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between" id="vegetarian">
                            <span>Sea Bass Baked in Sea Salt</span>
                            <span>£25.50</span>
                          </p>
                        </div>
                        <p className="pr-16 text-sm mt-1">
                          Sea Bass Baked Delicately in Sea Salt, Tableside
                          Service. Served with Chips or Jacket Potato or New
                          Potato.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <h2
                  className="flex justify-center text-4xl sm:text-5xl font-bold mt-5"
                >
                  Vegetarian Mains
                </h2>

                <div className="vegetarian-mains-items">
                  <div className="grid grid-cols-1 2xl:grid-cols-2 h-full mt-5 text-2xl">
                    {/* Left Side Menu */}
                    <div className="left-side">
                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Falafel</span>
                            <span>£13.90</span>
                          </p>
                        </div>
                        <p className="md:pr-16 text-sm mt-1">
                          Lightly Fried Chickpeas, Parsley, Onions, Garlic &
                          Coriander Patties, Served with Hummus, Chips & Salad.
                        </p>
                      </div>
                    </div>

                    <div className="left-[50.5%] bg-white  hidden h-[4.8rem] z-[2] w-1 rounded-full 2xl:block absolute"></div>

                    {/* Right Side Menu */}
                    <div className="right-side">
                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between" id="extras">
                            <span>Mousakka</span>
                            <span>£14.50</span>
                          </p>
                        </div>
                        <p className="md:pr-16 text-sm mt-1">
                          Sliced Vegatables with Potatoes, Tomato Sauce,
                          Marinates with Cheese.
                        </p>
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
                            <span>Pickled Onion / Gherkin</span>
                            <span>£1.80</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Pickled Onion</span>
                            <span>£1.80</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Baked Beans</span>
                            <span>£2.10</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Mushy Peas</span>
                            <span>£2.30</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Garden Peas</span>
                            <span>£2.30</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Coleslaw</span>
                            <span>£2.30</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Broccoli</span>
                            <span>£2.80</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="left-[50.5%] bg-white  hidden h-[21.1rem] z-[2] w-1 rounded-full 2xl:block absolute"></div>

                    {/* Right Side Menu */}
                    <div className="right-side">
                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Cauliflower</span>
                            <span>£2.80</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Spinach</span>
                            <span>£2.80</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Jacket Potato</span>
                            <span>£3.30</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>New Potato</span>
                            <span>£3.30</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Onion Rings</span>
                            <span>£3.80</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Mixed Salad</span>
                            <span>£3.80</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between" id="colddrinks">
                            <span>Chopped Salad</span>
                            <span>£3.80</span>
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
                            <span>£2.50</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>Coke Zero/Diet Coke</span>
                            <span>£2.50</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>Fanto Orange</span>
                            <span>£2.50</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>7up</span>
                            <span>£2.50</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>Lilt</span>
                            <span>£2.50</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>Shandy Bass</span>
                            <span>£2.50</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="left-[50.5%] bg-white  hidden h-[18rem] z-[2] w-1 rounded-full 2xl:block absolute"></div>

                    {/* Right Side Menu */}
                    <div className="right-side">
                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>Lilt</span>
                            <span>£2.50</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>Apple Juice/ Orange Juice</span>
                            <span>£3.20</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>Tomato Juice/Cranberry Juice</span>
                            <span>£3.20</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>Tonic Water</span>
                            <span>£3.20</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>Still Water (Small/Large)</span>
                            <span>£2.50/£4.50</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between" id="hotdrinks">
                            <span>Sparkling Water (Small/Large)</span>
                            <span>£2.50/£4.50</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2
                  className="flex justify-center text-4xl sm:text-5xl font-bold mt-5"
                >
                  Hot Drinks
                </h2>

                <div className="vegetarian-mains-items">
                  <div className="grid grid-cols-1 2xl:grid-cols-2 h-full mt-5 text-2xl">
                    {/* Left Side Menu */}
                    <div className="left-side">
                      <div className="flex flex-col px-4 mb-4">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>Tea</span>
                            <span>£2.20</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>Apple Tea</span>
                            <span>£2.30</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>Lemon Tea</span>
                            <span>£2.30</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>Fresh Mint Tea</span>
                            <span>£2.30</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>Espresso (Single/Double)</span>
                            <span>£2.20/£2.40</span>
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="left-[50.5%] bg-white  hidden h-[14.8rem] z-[2] w-1 rounded-full 2xl:block absolute"></div>

                    {/* Right Side Menu */}
                    <div className="right-side">
                      <div className="flex flex-col px-4 mb-4">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>White Coffee</span>
                            <span>£2.40</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>Black/Decaf Coffee</span>
                            <span>£2.40</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>Cappuccino</span>
                            <span>£2.50</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between">
                            <span>Coffe Latte</span>
                            <span>£2.50</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex flex-col px-4 mb-4">
                        <div className="flex justify-between">
                          <p className="menu w-full flex justify-between" id="desserts">
                            <span>Hot Chocolate</span>
                            <span>£2.50</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <h2
                  className="flex justify-center text-4xl sm:text-5xl font-bold mt-5"
                >
                  Desserts
                </h2>

                <div className="vegetarian-mains-items">
                  <div className="grid grid-cols-1 2xl:grid-cols-2 h-full mt-5 text-2xl">
                    {/* Left Side Menu */}
                    <div className="left-side">
                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Rice Pudding</span>
                            <span>£5.40</span>
                          </p>
                        </div>
                        <p className="md:pr-16 text-sm mt-1">
                          A Turkish Favourite, Short-grain Rice, Milk, Sugar,
                          and a Variety of Flavorings such as Vanilla
                        </p>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Cream Caramel</span>
                            <span>£5.40</span>
                          </p>
                        </div>
                        <p className="md:pr-16 text-sm mt-1">
                          A rich, creamy dessert made with eggs, milk, and
                          sugar. It has a smooth, silky texture and a sweet,
                          caramel flavor.
                        </p>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Ice Cream</span>
                            <span>£5.40</span>
                          </p>
                        </div>
                        <p className="md:pr-16 text-sm mt-1">
                          Vanilla, Chocolate
                        </p>
                      </div>
                    </div>

                    <div className="left-[50.5%] bg-white  hidden h-[16.6rem] z-[2] w-1 rounded-full 2xl:block absolute"></div>

                    {/* Right Side Menu */}
                    <div className="right-side">
                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Cheesecake</span>
                            <span>£5.50</span>
                          </p>
                        </div>
                        <p className="md:pr-16 text-sm mt-1">
                          Cheesecake is a rich, creamy dessert made with a
                          mixture of cream cheese, sugar, and eggs, often
                          flavored with vanilla
                        </p>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Baklava</span>
                            <span>£5.80</span>
                          </p>
                        </div>
                        <p className="md:pr-16 text-sm mt-1">
                          A Sweet, Flaky Pastry made with layers of phyllo dough
                          and filled with chopped nuts and sweetened with honey
                        </p>
                      </div>

                      <div className="flex flex-col px-4 mb-4 ">
                        <div className="flex justify-between ">
                          <p className="menu w-full flex justify-between">
                            <span>Sticky Toffee Pudding</span>
                            <span>£5.80</span>
                          </p>
                        </div>
                        <p className="md:pr-16 text-sm mt-1">
                          A Rich, Moist Cake Made with Dates and Topped with a
                          Sticky Toffee Sauce.
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
    </Layout>
  );
}

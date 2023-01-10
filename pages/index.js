import React from "react";
import Layout from "../components/Layout";
import Hero from "../components/Hero";

export default function Home() {
  return (
    <>
      <Layout
        description="Experience the best Fish and Chips in Finchley Central at Olympus. We only use the freshest, highest quality fish and cook it to perfection in our signature batter. In addition to our delicious fish and chips, we also offer a variety of sides to round out your meal. Come visit us and savor the taste of our freshly made Fish and Chips!"
        keywords="Fish and Chips Turkish Restaurant take away takeaway takeout Grilled Fish Fried Fish Finchley Ballards Lane Cod Haddock Plaice"
      >
        <Hero />
      </Layout>
    </>
  );
}
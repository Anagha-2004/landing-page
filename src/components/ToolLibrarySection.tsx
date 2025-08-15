import React from "react";
import "./ToolLibrarySection.css";

const tools = [
  { name: "Hammer", img: "https://plus.unsplash.com/premium_photo-1676901918792-f6e04df8b7b4?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGFtbWVyfGVufDB8fDB8fHww" },
  { name: "Screwdriver", img: "https://cdn11.bigcommerce.com/s-k5143b1jn4/images/stencil/1280x1280/products/447/1040/6-piece-screwdriver-set__22289.1713351135.jpg?c=1" },
  { name: "Wrench", img: "https://www.harborfreight.com/media/catalog/product/cache/95ddc68b3b409c753b895e31eaf85ef8/9/5/95552_W3.jpg" },
  { name: "Pliers", img: "https://m.media-amazon.com/images/I/71HX3j9tzGL.jpg" },
];

export default function ToolLibrarySection() {
  return (
    <section id="tools" className="tool-library-section">
      <h2>Tool Library</h2>
      <div className="tool-grid">
        {tools.map((item, index) => (
          <div key={index} className="tool-card">
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

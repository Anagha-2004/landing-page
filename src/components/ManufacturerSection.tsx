import React from "react";
import "./ManufacturerSection.css";

const manufacturers = [
  { name: "Motor", img: "https://media.istockphoto.com/id/1398787159/photo/cross-section-of-industrial-electric-motor-electric-motor-parts-and-structure-isolated-on.jpg?s=612x612&w=0&k=20&c=C82gPJndwIwiut9zsIismuJppsSolMJ5tKvmUcRRoYY=" },
  { name: "Gear", img: "https://sparepartwala.in/wp-content/uploads/2024/02/20240208_163503_copy_700x800.jpg" },
  { name: "Circuit Board", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS21QSykxBG0F_SZqrdlvC0fOIwxfl8gAcU6A&s" },
  { name: "Tool Set", img: "https://www.soldermall.com/uploads/product/pic/zoom/46-in-1-pcs-tool-kit--screwdriver-and-socket-set-multi-purpose-combination-tool--2310.png" },
];

export default function ManufacturerSection() {
  return (
    <section id="manufacture" className="manufacturer-section">
      <h2>Manufacture</h2>
      <div className="manufacturer-grid">
        {manufacturers.map((item, index) => (
          <div key={index} className="manufacturer-card">
            <img src={item.img} alt={item.name} />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

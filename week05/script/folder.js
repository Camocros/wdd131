const products = [
  { name: "Widget 3000" },
  { name: "Super Drill" },
  { name: "Hydro Vacuum" },
  { name: "Magic Blender" },
  { name: "Smart Lamp" }
];

const select = document.querySelector("#productName");

products.forEach(product => {
  const opt = document.createElement("option");
  opt.value = product.name;
  opt.textContent = product.name;
  select.appendChild(opt);
});
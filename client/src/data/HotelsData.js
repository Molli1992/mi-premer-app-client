const DataHoteles = [
    { id: "0", name: "Hotel Ibera Buenos Airas", city: "Buenos Aires", stars: "5", img: ["https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/habitacion-hotel-2764541.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/13/1b/06/24/piscina-cubierta-climatizada.jpg"], price: "250 usd" },
    { id: "1", name: "Hotel Ibera Catamarca", city: "Catamarca", stars: "4", img: ["https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/habitacion-hotel-2764541.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/13/1b/06/24/piscina-cubierta-climatizada.jpg"], price: "180 usd" },
    { id: "2", name: "Hotel Ibera Chaco", city: "Chaco", stars: "3", img: ["https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/habitacion-hotel-2764541.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/13/1b/06/24/piscina-cubierta-climatizada.jpg"], price: "75 usd" },
    { id: "3", name: "Hotel Ibera Chubut", city: "Chubut", stars: "5", img: ["https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/habitacion-hotel-2764541.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/13/1b/06/24/piscina-cubierta-climatizada.jpg"], price: "250 usd" },
    { id: "4", name: "Hotel Ibera Córdoba", city: "Córdoba", stars: "4", img: ["https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/habitacion-hotel-2764541.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/13/1b/06/24/piscina-cubierta-climatizada.jpg"], price: "180 usd" },
    { id: "5", name: "Hotel Ibera Corrientes", city: "Corrientes", stars: "3", img: ["https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/habitacion-hotel-2764541.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/13/1b/06/24/piscina-cubierta-climatizada.jpg"], price: "75 usd" },
    { id: "6", name: "Hotel Ibera Entre Ríos", city: "Entre Ríos", stars: "5", img: ["https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/habitacion-hotel-2764541.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/13/1b/06/24/piscina-cubierta-climatizada.jpg"], price: "250 usd" },
    { id: "7", name: "Hotel Ibera Formosa", city: "Formosa", stars: "4", img: ["https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/habitacion-hotel-2764541.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/13/1b/06/24/piscina-cubierta-climatizada.jpg"], price: "180 usd" },
    { id: "8", name: "Hotel Ibera Jujuy", city: "Jujuy", stars: "3", img: ["https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/habitacion-hotel-2764541.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/13/1b/06/24/piscina-cubierta-climatizada.jpg"], price: "75 usd" },
    { id: "9", name: "Hotel Ibera La Pampa", city: "La Pampa", stars: "5", img: ["https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/habitacion-hotel-2764541.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/13/1b/06/24/piscina-cubierta-climatizada.jpg"], price: "250 usd" },
    { id: "10", name: "Hotel Ibera La Rioja", city: "La Rioja", stars: "4", img: ["https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/habitacion-hotel-2764541.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/13/1b/06/24/piscina-cubierta-climatizada.jpg"], price: "180 usd" },
    { id: "11", name: "Hotel Ibera Mendoza", city: "Mendoza", stars: "3", img: ["https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/habitacion-hotel-2764541.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/13/1b/06/24/piscina-cubierta-climatizada.jpg"], price: "75 usd" },
    { id: "12", name: "Hotel Ibera Misiones", city: "Misiones", stars: "5", img: ["https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/habitacion-hotel-2764541.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/13/1b/06/24/piscina-cubierta-climatizada.jpg"], price: "250 usd" },
    { id: "13", name: "Hotel Ibera Neuquén", city: "Neuquén", stars: "4", img: ["https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/habitacion-hotel-2764541.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/13/1b/06/24/piscina-cubierta-climatizada.jpg"], price: "180 usd" },
    { id: "14", name: "Hotel Ibera Río Negro", city: "Río Negro", stars: "3", img: ["https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/habitacion-hotel-2764541.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/13/1b/06/24/piscina-cubierta-climatizada.jpg"], price: "150 usd" },
    { id: "15", name: "Hotel Ibera Salta", city: "Salta", stars: "5", img: ["https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/habitacion-hotel-2764541.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/13/1b/06/24/piscina-cubierta-climatizada.jpg"], price: "75 usd" },
    { id: "16", name: "Hotel Ibera San Juan", city: "San Juan", stars: "4", img: ["https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/habitacion-hotel-2764541.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/13/1b/06/24/piscina-cubierta-climatizada.jpg"], price: "250 usd" },
    { id: "17", name: "Hotel Ibera San Luis", city: "San Luis", stars: "3", img: ["https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/habitacion-hotel-2764541.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/13/1b/06/24/piscina-cubierta-climatizada.jpg"], price: "180 usd" },
    { id: "18", name: "Hotel Ibera Santa Cruz", city: "Santa Cruz", stars: "5", img: ["https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/habitacion-hotel-2764541.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/13/1b/06/24/piscina-cubierta-climatizada.jpg"], price: "75 usd" },
    { id: "19", name: "Hotel Ibera Santa Fe", city: "Santa Fe", stars: "4", img: ["https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/habitacion-hotel-2764541.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/13/1b/06/24/piscina-cubierta-climatizada.jpg"], price: "250 usd" },
    { id: "20", name: "Hotel Ibera Santiago del Estero", city: "Santiago del Estero", stars: "3", img: ["https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/habitacion-hotel-2764541.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/13/1b/06/24/piscina-cubierta-climatizada.jpg"], price: "180 usd" },
    { id: "21", name: "Hotel Ibera Tierra del Fuego", city: "Tierra del Fuego", stars: "5", img: ["https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/habitacion-hotel-2764541.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/13/1b/06/24/piscina-cubierta-climatizada.jpg"], price: "75 usd" },
    { id: "22", name: "Hotel Ibera Tucumán", city: "Tucumán", stars: "4", img: ["https://emprendeconhuevos.com/wp-content/uploads/2019/08/portada2.jpg", "https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/media/image/2022/07/habitacion-hotel-2764541.jpg", "https://media-cdn.tripadvisor.com/media/photo-s/13/1b/06/24/piscina-cubierta-climatizada.jpg"], price: "250 usd" }
];


export default DataHoteles;
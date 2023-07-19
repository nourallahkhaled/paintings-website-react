import React, { useState, useEffect } from "react";
import StoreItem from "./StoreItem";
import axios from "axios";
import SearchBar from "./SearchBar";
import SearchCat from "./SearchCat";
import '../CSS/store.css'
import NavBars from "./NavBars";

const Store = () => {
  const [storeItems, setStoreItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectQuery, setSelectQuery] = useState("");

  useEffect(() => {
    const fetchStoreItems = async () => {
      const response = await axios.get("http://localhost:8000/products/");
      setStoreItems(response.data);
    };

    fetchStoreItems();
  }, []);

  let filteredStoreItems = storeItems;

  if (searchQuery) {
    const regex = new RegExp(`^${searchQuery}`, "i");

    filteredStoreItems = filteredStoreItems.filter(
      item => regex.test(item.name)
    );
  }

  if (selectQuery) {
    filteredStoreItems = filteredStoreItems.filter(
      item => item.category === parseInt(selectQuery)
    );
  }

  const handleSearch = query => {
    setSearchQuery(query);
  };

  const handleSearchCat = query => {
    setSelectQuery(query);
  };

  return (
    <div>
      <NavBars></NavBars>
      {/* //////////////////////////////////image */}
      <div className="card card2 mb-3" style={{ maxWidth: "80%" }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src="https://i.pinimg.com/564x/50/fe/43/50fe437aae33001a07beb4adee2b3241.jpg" className="rounded-start" alt="..." style={{ height: "300px" }} />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              {/* <h5 className="card-title">Card title</h5> */}
              <p className="card-text">“
                The sound of the sea, the curve of a horizon, wind in leaves, the cry of a bird leave a manifold impression in us. And suddenly, without our wishing it at all, one of these memories spills from us and finds expression in musical language… I want to sing my interior landscape with the simple artlessness of a child. „
              </p>
              <p className="card-text"><small className="text-muted">- Claude Debussy</small></p>
            </div>
          </div>
        </div>
      </div>

      {/* ///////////////////////////////cart */}
      <h1 className="p-4 mt-5 text-center store-title" style={{ color: "#E57C23" }}>New Collection</h1>
      <SearchBar onSearch={handleSearch} className="search-bar-container" />
      <SearchCat onSearch={handleSearchCat} className="search-cat-container" />
      {filteredStoreItems.length === 0 && (
        <p className="text-center">No products found.</p>
      )}
      <div className="d-flex flex-wrap justify-content-center" >
        {filteredStoreItems.map((output) => (
          <div key={output.id} style={{ marginRight: "3%" }}>
            <StoreItem
              id={output.id}
              productName={output.name}
              productDescription={output.description}
              productPrice={output.price}
              productSale={output.promotion}
              image={output.image}
              category={output.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Store;

// import React, { useState, useEffect } from "react";
// import StoreItem from "./StoreItem";
// import axios from "axios";
// import SearchBar from "./SearchBar";

// const Store = () => {
//   const [storeItems, setStoreItems] = useState([]);
//   const [searchQuery, setSearchQuery] = useState("");

//   useEffect(() => {
//     const fetchStoreItems = async () => {
//       const response = await axios.get("http://localhost:8000/products/");
//       setStoreItems(response.data);
//     };

//     fetchStoreItems();
//   }, []);

//   const handleSearch = query => {
//     setSearchQuery(query);
//   };

//   let filteredStoreItems = storeItems;

//   if (searchQuery) {
//     const regex = new RegExp(`^${searchQuery}`, "i");

//     filteredStoreItems = storeItems.filter(
//       item =>
//         regex.test(item.name) ||
//         regex.test(item.description)
//     );
//   }

//   return (
//     <div>
//       <SearchBar onSearch={handleSearch} />
//       <h1 className="p-4 mt-3 text-center store-title">New Collection</h1>
//       {filteredStoreItems.length === 0 && (
//         <p className="text-center">No products found for "{searchQuery}".</p>
//       )}
//       <div>
//         {filteredStoreItems.map((output) => (
//           <div key={output.id}>
//             <StoreItem
//               id={output.id}
//               productName={output.name}
//               productDescription={output.description}
//               productPrice={output.price}
//               productSale={output.promotion}
//               image={output.image}
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Store;
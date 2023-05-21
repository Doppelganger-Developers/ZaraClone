"use client"
import { useEffect, useState } from 'react';
import axios from 'axios';
import "./page.css"
interface Item {
  productid: number;
  productname: string;
  productdescription: string;
  productprice: number;
  productimg: string;
}

const Search: React.FC = () => {
  const [items, setItems] = useState<Item[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredItems, setFilteredItems] = useState<Item[]>([]);
  const [selectedItem, setSelectedItem] = useState<Item | null>(null);

  function search() {
    axios.get(`http://localhost:5000/api/p/products/`)
      .then((res) => {
        setItems(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    search();
  }, []);

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    const filtered = items.filter((item) =>
      item.productname.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredItems(filtered);
    setSelectedItem(null);
  };

  const handleClick = (item: Item) => {
    setSelectedItem(item);
  };

  return (
    <div>
      <input
        className="searchinput"
        placeholder="searchByTypeOfQuote"
        value={searchTerm}
        onChange={(event) => handleSearch(event.target.value)}
      />
      <button onClick={() => handleSearch(searchTerm)}>Search</button>

      {selectedItem ? (
        <div>
          <img className='selectedimg' src={selectedItem.productimg} alt="" />
          <div className='selectedparent'>
          <div className='selectedname'>{selectedItem.productname}</div>
          <div className='selectedprice'>{selectedItem.productprice}</div>
          </div>
        </div>
      ) : (
        <div>
          {filteredItems.map((item) => (
            <div key={item.productid} className="parent" onClick={() => handleClick(item)}>
              <div className="item-container">
                <img className="prodimg" src={item.productimg} alt="" />
                <div className="details-container">
                  <div className="prodname">{item.productname}</div>
                  <div className="prodprice">{item.productprice} TND</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Search;
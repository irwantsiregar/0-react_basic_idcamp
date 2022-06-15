import SearchBar from "./SearchBar";
import ProductTable from "./ProductTable";

function FilterableProductTable() {
  return (
    <div className="container">
      <SearchBar />
      <ProductTable />
    </div>
  );
}

export default FilterableProductTable;
var FilterableTable = React.createClass({
  render: function() {
    return (
      <div>
        <SearchBar />
        <ProductTable />
      </div>
    )
  }
})

var SearchBar = React.createClass({
  render: function() {
    return (
      <div>
        Search Bar
      </div>
    )
  }
})

var ProductTable = React.createClass({
  render: function() {
    return (
      <div>
        <CategoryRow />
        <ProductRow />
      </div>
    )
  }
})

var ProductRow = React.createClass({
  render: function() {
    return (
      <div>
        Product Row
      </div>
    )
  }
})

var CategoryRow = React.createClass({
  render: function() {
    return (
      <div>
        Category Row
      </div>
    )
  }
})

var PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

ReactDOM.render(<FilterableTable products={PRODUCTS} />, document.getElementById('container'))

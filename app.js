var FilterableTable = React.createClass({
  getInitialState: function() {
    return {
      filterText: '',
      inStockOnly: false
    };
  },

  render: function() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    )
  }
})

var SearchBar = React.createClass({
  render: function() {
    return (
      <form>
        <input type="text" placeholder="Search..." value={this.props.filterText} /><br />
        <input type="checkbox" checked={this.props.inStockOnly}/>
        <span> Only show products in stock</span>
      </form>
    )
  }
})

var ProductTable = React.createClass({
  render: function() {
    var rows = []
    var lastCategory = null
    this.props.products.forEach(function(product) {
      if ((product.name.indexOf(this.props.filterText) === -1) || (this.props.inStockOnly && !product.stocked))
        return

      if (product.category !== lastCategory) {
        rows.push(<CategoryRow category={product.category} key={product.category} />)
        lastCategory = product.category
      }

      rows.push(<ProductRow product={product} key={product.name} />)
    }.bind(this))

    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
})

var ProductRow = React.createClass({
  render: function() {
    var name = this.props.product.stocked ? this.props.product.name :
      <span style={{color: "red"}}>{this.props.product.name}</span>

    return (
      <tr>
        <td>{name}</td>
        <td>{this.props.product.price}</td>
      </tr>
    )
  }
})

var CategoryRow = React.createClass({
  render: function() {
    return (
      <tr><th colSpan="2">{this.props.category}</th></tr>
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

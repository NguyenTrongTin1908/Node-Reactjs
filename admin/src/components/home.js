import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as homeActions from "../actions/home.action";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sum: 1000,
    };
  }
  tinh(count) {
    return (count / this.state.sum) * 100 + "%";
  }

  handleEdit = (id) => {};

  handleDelete = (id) => {
    alert("Đã xóa sản phẩm");
    this.props.homeActions.deleteProduct(id);
    // this.props.homeActions.getTopProduct();
    console.log("PROPS LA ");
  };

  handlePlus = () => {};
  render() {
    return (
      <div>
        <section id="main-content">
          <section className="wrapper">
            <div className="row">
              <div className="col-lg-12">
                <h3 className="page-header">
                  <i className="fa fa-laptop" /> Dashboard
                </h3>
                <ol className="breadcrumb">
                  <li>
                    <i className="fa fa-home" />
                    <a href="index.html">Home</a>
                  </li>
                  <li>
                    <i className="fa fa-laptop" />
                    Dashboard
                  </li>
                </ol>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="info-box blue-bg">
                  <i className="fa fa-cloud-download" />
                  <div className="count">6.674</div>
                  <div className="title">Download</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="info-box brown-bg">
                  <i className="fa fa-shopping-cart" />
                  <div className="count">7.538</div>
                  <div className="title">Purchased</div>
                </div>
              </div>
              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="info-box dark-bg">
                  <i className="fa fa-thumbs-o-up" />
                  <div className="count">4.362</div>
                  <div className="title">Order</div>
                </div>
              </div>

              <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
                <div className="info-box green-bg">
                  <i className="fa fa-cubes" />
                  <div className="count">1.426</div>
                  <div className="title">Stock</div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-9 col-md-12">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h2>
                      <i className="fa fa-flag-o red" />
                      <strong>
                        Digital sales number(percent percentage of 1000
                        products)
                      </strong>
                    </h2>
                    <div className="panel-actions">
                      <a href="index.html#" className="btn-setting">
                        <i className="fa fa-rotate-right" />
                      </a>
                      <a href="index.html#" className="btn-minimize">
                        <i className="fa fa-chevron-up" />
                      </a>
                      <a href="index.html#" className="btn-close">
                        <i className="fa fa-times" />
                      </a>
                    </div>
                  </div>
                  <div className="panel-body">
                    <table className="table bootstrap-datatable countries">
                      <thead>
                        <tr>
                          <th />
                          <th>Tên Sản Phẩm</th>
                          <th>Giá Tiền</th>
                          <th>Mã sản phẩm</th>
                          <th>Thêm</th>
                          <th>Xóa</th>
                          <th>Sửa</th>
                        </tr>
                      </thead>
                      <tbody>
                        {this.props.top_product.map((element, index) => {
                          const file = `../file/public/images/${element.maloaisp}/${element.fileanh}`;
                          return (
                            <tr>
                              <td>
                                <div className="home-image">
                                  <img
                                    src={`/images/${element.maloaisp}/${element.fileanh}`}
                                    alt=""
                                  />
                                </div>
                              </td>
                              <td>{element.tensp}</td>
                              <td>{element.gia}</td>
                              <td>{element.maloaisp}</td>
                              <td>
                                <span
                                  className="glyphicon glyphicon-plus"
                                  onClick={() => this.handlePlus()}
                                ></span>
                              </td>
                              <td>
                                <span
                                  className="fa fa-times"
                                  onClick={() => this.handleDelete(element._id)}
                                ></span>
                              </td>

                              <td>
                                <span
                                  className="glyphicon glyphicon-pencil"
                                  onClick={() => this.handleEdit(element._id)}
                                ></span>{" "}
                              </td>

                              {/* <td>
                                <div className="progress thin">
                                  <div
                                    className="progress-bar progress-bar-danger"
                                    role="progressbar"
                                    aria-valuenow="80"
                                    aria-valuemin="0"
                                    aria-valuemax="100"
                                    style={{ width: this.tinh(element.count) }}
                                  />
                                </div>
                                <span className="sr-only">73%</span>
                              </td> */}
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>

            <br />
          </section>
        </section>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  top_product: state.homeReducers.home.top_product,
  // islogin: state.userReducers.user.islogin
});

const mapDispatchToProps = (dispatch) => {
  return {
    homeActions: bindActionCreators(homeActions, dispatch),
    // userActions: bindActionCreators(userActions, dispatch),
  };
};
// HomeContainer;

export default connect(mapStateToProps, mapDispatchToProps)(Home);

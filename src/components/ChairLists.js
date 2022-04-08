import React, { Component } from "react";
import { connect } from "react-redux";
import data from "../data/danhSachGhe.json";
import { ADD_CHAIR } from "../redux/constant";

class ChairLists extends Component {
  render() {
    const { bookChair, chonGhe } = this.props;
    return (
      <div className="w-full flex flex-col items-center justify-center ">
        {data.map((row) => {
          return (
            <div
              className="w-full flex align-center lg:justify-start justify-center"
              key={row.danhSachGhe[0].soGhe}
            >
              <div className="firstChar">{row.hang}</div>
              {row.danhSachGhe.map((item) => {
                return /[A-Za-z]/gm.test(item.soGhe) ? (
                  <button
                    key={item.soGhe}
                    className={
                      item.daDat
                        ? "ghe gheDuocChon"
                        : bookChair &&
                          bookChair.find((soGhe) => soGhe.soGhe === item.soGhe)
                        ? "ghe gheDangChon"
                        : "ghe"
                    }
                    onClick={
                      item.daDat
                        ? null
                        : () =>
                            chonGhe({
                              soGhe: item.soGhe,
                              gia: item.gia,
                            })
                    }
                  >
                    {item.soGhe}
                  </button>
                ) : (
                  <div key={item.soGhe} className="rowNumber">
                    {item.soGhe}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    bookChair: rootReducer.bookingReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    chonGhe: (payload) => dispatch({ type: ADD_CHAIR, payload }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ChairLists);

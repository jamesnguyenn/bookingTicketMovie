import React, { Component } from "react";
import { connect } from "react-redux";
import { REMOVE_CHAIR } from "../redux/constant";

class BillLists extends Component {
  render() {
    const { booking, removeChair } = this.props;

    return (
      <div className="lg:w-full h-full my-5  max-w-[100%]">
        <div className="w-full rounded overflow-hidden border border-solid border-slate-100 ">
          <table className="  lg:w-full border-collapse table-fixed w-full text-sm">
            <thead className="text-xl font-bold">
              <tr>
                <th className="border-b border-solid border-slate-100 font-medium px-4 py-2 text-left">
                  Số Ghế
                </th>
                <th className="border-b border-l border-r border-solid border-slate-100 font-medium px-4 py-2 text-left">
                  Giá
                </th>
                <th className="border-b border-l border-solid border-slate-100 font-medium px-4 py-2 text-left"></th>
              </tr>
            </thead>
            <tbody className="text-[#ffc107] ">
              {booking.map((item) => {
                return (
                  <tr
                    className=" border-b border-r border-solid border-slate-100"
                    key={item.soGhe}
                  >
                    <td className="font-medium px-4 py-2 text-left ">
                      {item.soGhe}
                    </td>
                    <td className="border-l border-r border-solid border-slate-100 font-medium px-4 py-2 text-left">
                      {item.gia.toLocaleString()}
                    </td>
                    <td className="font-medium px-4 py-2 text-left ">
                      <button
                        className="bg-white px-4 py-2 rounded text-black font-bold lg:text-sm text-[10px] "
                        onClick={() => removeChair({ soGhe: item.soGhe })}
                      >
                        Cancel
                      </button>
                    </td>
                  </tr>
                );
              })}
              <tr className="border-b border-r border-solid border-slate-100">
                <td className="font-medium px-4 py-2 text-left ">Tổng tiền</td>
                <td className="border-l border-r border-solid border-slate-100 font-medium px-4 py-2 text-left">
                  {(booking.length > 0
                    ? booking.reduce((total, { gia }) => {
                        return (total += gia);
                      }, 0)
                    : 0
                  ).toLocaleString()}
                </td>
                <td className="font-medium px-4 py-2 text-left ">
                  <button
                    className={`py-3 px-2 bg-[orange] text-black font-bold rounded transition-all ease-in-out duration-700 lg:text-sm text-[10px]  hover:bg-white hover:text-black ${
                      booking.length > 0 ? "" : "pointer-events-none"
                    }`}
                  >
                    Thanh Toán
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    booking: rootReducer.bookingReducer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeChair: (payload) => {
      dispatch({ type: REMOVE_CHAIR, payload });
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BillLists);

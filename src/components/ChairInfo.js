import React, { Component } from "react";

class ChairInfo extends Component {
  render() {
    return (
      <div className="w-full flex flex-col justify-center align-center gap-[30px] ">
        <h2 className="text-[2rem] text-white text-center uppercase">
          Danh sách ghế bạn chọn
        </h2>
        <div className="flex items-center justify-start gap-5">
          <span className="ghe gheDuocChon" />
          <span className="text-[20px] uppercase font-bold">Ghế đã đặt</span>
        </div>
        <div className="flex items-center justity-start gap-5">
          <span className="ghe gheDangChon" />
          <span className="text-[20px] uppercase font-bold">Ghế đang đặt</span>
        </div>
        <div className="flex items-center justity-start gap-5">
          <span className="ghe" />
          <span className="text-[20px] uppercase font-bold">Ghế chưa đặt</span>
        </div>
      </div>
    );
  }
}

export default ChairInfo;

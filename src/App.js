import "./App.css";
import React, { Component } from "react";
import ChairLists from "./components/ChairLists";
import ChairInfo from "./components/ChairInfo";
import BillLists from "./components/BillLists";

export default class App extends Component {
  render() {
    return (
      <div className="w-full lg:h-[100vh] relative text-white px-2 py-5 flex gap-[20px] lg:flex-row flex-col items-start justify-center">
        <div className="absolute w-full h-full inset-0 bg-black bg-opacity-60 overlay z-[-1]" />
        {/* Đặt vé */}
        <div className="lg:w-[60%] lag:h-full w-[100%] h-[auto] flex flex-col justify-center items-center gap-[10px] z-[10]">
          <h1 className="w-full text-center text-[3.5rem] font-bold text-[#ffc107] uppercase">
            Đặt vé xem phim
          </h1>
          <div className="screen" />
          {/* Danh sách ghế */}
          <ChairLists />
        </div>
        {/* Thông tin đặt vé xem phim */}
        <div className="lg:w-[40%] lg:h-full w-full h-[auto] flex flex-col justify-center items-center lg:gap-[40px] gap:[20px] z-[10] px-5 ">
          {/* Thông tin hiển thị ghế */}
          <ChairInfo />
          {/* Thông tin hóa đơn */}
          <BillLists />
        </div>
      </div>
    );
  }
}

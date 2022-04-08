import { ADD_CHAIR, REMOVE_CHAIR } from "./constant";

export default function bookingReducer(state = [], action) {
  const { type, payload } = action;
  switch (type) {
    case ADD_CHAIR:
      const currentChairIndex = state.findIndex(
        (item) => item.soGhe === payload.soGhe
      );
      if (currentChairIndex !== -1) {
        const newChairList = [...state];
        newChairList.splice(currentChairIndex, 1);
        console.log("remove");
        return newChairList;
      } else {
        return [...state, payload];
      }
    case REMOVE_CHAIR:
      const chairIndex = state.findIndex(
        (item) => item.soGhe === payload.soGhe
      );
      const newChairList = [...state];
      newChairList.splice(chairIndex, 1);
      return newChairList;

    default:
      return state;
  }
}

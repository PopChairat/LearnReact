//#Step4: สร้าง Reducer ที่จะไว้ Operate กับ State
//ต้อง return เป็น State ใหม่เท่านั้น ห้ามยุ่งกับ State เดิม
const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      return state.concat([action.data]); //New state by return NewArr
    default:
      return state;
  }
};
export default postReducer;

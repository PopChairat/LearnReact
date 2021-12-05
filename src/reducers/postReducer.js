//#Step4: สร้าง Reducer ที่จะไว้ Operate กับ State
//ต้อง return เป็น State ใหม่เท่านั้น ห้ามยุ่งกับ State เดิม
const postReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_POST":
      return state.concat([action.data]); //New state by return NewArr
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.id);
    case "EDIT_POST":
      return state.map((post) =>
        post.id === action.id ? { ...post, editing: !post.editing } : post
      );
    case "UPDATE_POST":
      return state.map((post) => {
        if (post.id === action.id) {
          return {
            ...post,
            title: action.data.newTitle,
            message: action.data.newMessage,
            editing: !post.editing,
          };
        } else {
          return post;
        }
      });
    default:
      return state;
  }
};
export default postReducer;

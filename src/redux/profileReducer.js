let initialState = {
  newPostText: "",
  posts: [
    {
      id: 1,
      date: "11.01.2024",
      img: "https://t4.ftcdn.net/jpg/03/86/82/73/360_F_386827376_uWOOhKGk6A4UVL5imUBt20Bh8cmODqzx.jpg",
      text: "Lorem ipsum dolor sit amet",
      likeCount: 100,
    },
    {
      id: 2,
      date: "12.01.2024",
      img: "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
      text: "Lorem ipsum dolor sit amet consectetur adipiscing elit, sed",
      likeCount: 12,
    },
    {
      id: 3,
      date: "01.02.2024",
      img: "https://t4.ftcdn.net/jpg/04/39/69/99/360_F_439699926_GkaQTcxPchsvvtdrZ98cFQh1a8HQICwP.jpg",
      text: "ullamcorper. Cras pulvinar mattis nunc sed blandit. Non quam lacus suspendisse faucibus interdum. Ornare arcu odio ut sem nulla. Accumsan tortor posuere ac ut consequat semper viverra nam libero. Ac tortor vitae purus",
      likeCount: 235,
    },
  ],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD-POST": {
      let newState = { ...state };
      newState.posts = [...state.posts];
      let newPost = {
        id: newState.posts.length + 1,
        date: "27.02.2024",
        img: "https://png.pngtree.com/thumb_back/fh260/background/20200714/pngtree-modern-double-color-futuristic-neon-background-image_351866.jpg",
        text: state.newPostText,
        likeCount: 0,
      };
      newState.posts.push(newPost);
      newState.newPostText = "";
      return newState;
    }
    case "UPDATE-NEW-POST-TEXT": {
      let newState = { ...state };
      newState.newPostText = action.newText;
      return newState;
    }
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: "ADD-POST" });
export const updateNewPostTextActionCreator = (text) => ({
  type: "UPDATE-NEW-POST-TEXT",
  newText: text,
});

export default profileReducer;

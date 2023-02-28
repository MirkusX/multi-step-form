export const initialState = {
  plan: "",
  extra: [],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "plan":
      return { ...state, plan: (state.plan = action.payload) };
    case "extra":
      return { ...state, extra: (state.extra = action.payload) };
  }
};

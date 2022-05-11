function reducer(state, { type, payload }) {
  switch (type) {
    case "SEARCH_FILTER":
      return { ...state, searchQuery: payload };
    case "CATEGORY_FILTER":
      return { ...state, category: payload };
    case "RESET_TO_DEFAULT":
      return { ...state, searchQuery: "", category: "All" };
    default:
      throw new Error(`No case defined for Filter reducer.`);
  }
}

export { reducer };

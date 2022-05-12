function reducer(state, { type, payload }) {
  switch (type) {
    case "UPDATE":
      return { ...state, videos: payload };
    default:
      throw new Error(`This type:${type} is not supported for Likes Context.`);
  }
}

export { reducer };

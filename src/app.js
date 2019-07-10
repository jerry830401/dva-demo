export const dva = {
  config: {
    onError(err, dispatch) {
      err.preventDefault();
      console.error(err.message);
      if (err.message === "get out") {
        dispatch({ type: 'global/logout' })
      }
    },
  },
};

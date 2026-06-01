export const getWatchlist = () => {
  return JSON.parse(localStorage.getItem("watchlist") || "[]");
};

export const addToWatchlist = (movie) => {
  const current = getWatchlist();
  const exists = current.find((m) => m.id === movie.id);
  if (!exists) {
    localStorage.setItem("watchlist", JSON.stringify([...current, movie]));
  }
};

export const removeFromWatchlist = (id) => {
  const updated = getWatchlist().filter((m) => m.id !== id);
  localStorage.setItem("watchlist", JSON.stringify(updated));
};

export const isInWatchlist = (id) => {
  return getWatchlist().some((m) => m.id === id);
};

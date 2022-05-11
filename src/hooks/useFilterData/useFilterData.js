import { useFilter } from "context";

function useFilterData() {
  const { filterState: state } = useFilter();

  function findSearchedVideo(data, query) {
    const queryVideos = []
      .concat(data)
      .filter((video) =>
        video.title.toLowerCase().startsWith(query.toLowerCase())
      );
    if (queryVideos.length === 0 && (query === "" || query === " ")) {
      return data;
    }
    return queryVideos;
  }

  function findCategorizedVideos(data, creatorName) {
    return [].concat(data).filter((video) => video.creatorName === creatorName);
  }

  function filterData(data) {
    let array = [].concat(data);
    const { searchQuery, category } = state;
    if (category !== "All") {
      array = findCategorizedVideos(array, category);
    }
    if (searchQuery) {
      array = findSearchedVideo(array, searchQuery);
    }
    return array;
  }

  return { filterData };
}

export { useFilterData };

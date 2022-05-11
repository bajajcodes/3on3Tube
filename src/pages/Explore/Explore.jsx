import { categories } from "data";
import { SupremeContainer, Chips, VideoCardList } from "components";
import { useAxios, useFilterData } from "hooks";
import { useEffect, useState } from "react";
import { useFilter } from "context";
import { useLocation } from "react-router-dom";

function Explore() {
  const [source, setSource] = useState({
    videos: [],
    filteredVideos: [],
  });
  const { filterData } = useFilterData();
  const {
    response: videosResponse,
    error: videosError,
    loading: videosLoading,
    requestData,
  } = useAxios();
  const { filterState, filterDispatch } = useFilter();
  const location = useLocation();

  function applyFiltersForVideos(videos) {
    const filteredVideos = filterData(videos);
    setSource((p) => ({ ...p, filteredVideos: filteredVideos }));
  }

  useEffect(async () => {
    await requestData({
      method: "get",
      url: "/api/videos",
    });
  }, []);

  useEffect(async () => {
    if (!videosLoading) {
      if (videosError === "") {
        const videos = videosResponse.videos;
        setSource((p) => ({ ...p, videos }));
        applyFiltersForVideos(videos);
      } else {
        console.error({ videosError });
      }
    }
  }, [videosLoading]);

  useEffect(() => {
    if (source.videos.length !== 0) {
      applyFiltersForVideos(source.videos);
    }
  }, [filterState]);

  useEffect(() => {
    return () => filterDispatch({ type: "RESET_TO_DEFAULT" });
  }, [location.pathname]);

  return (
    <SupremeContainer
      type="explore"
      headerComponent={<Chips chips={categories} />}
      bodyComponent={
        <VideoCardList
          videos={source.filteredVideos}
          videosLoading={videosLoading}
        />
      }
    />
  );
}

export { Explore };

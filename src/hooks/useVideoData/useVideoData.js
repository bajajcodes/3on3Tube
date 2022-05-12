import { useAxios } from "hooks";
import { getValue } from "utils";
import { useEffect, useState } from "react";

function useVideoData() {
  const { response, error, loading, requestData } = useAxios();
  const [data, setData] = useState([]);

  function getData(endpoint, bypassError = false) {
    const token = getValue("token") ?? false;
    if (!token && !bypassError) {
      throw new Error("Token does not exist, login first.");
    }
    requestData({
      url: `/api/user/${endpoint}`,
      method: "get",
      headers: {
        authorization: token,
      },
    });
  }

  function postData(endpoint, data) {
    const token = getValue("token") ?? false;
    if (!token) {
      throw new Error("Token does not exist, login first.");
    }
    requestData({
      url: `/api/user/${endpoint}`,
      method: "post",
      data: { ...data },
      headers: {
        authorization: token,
      },
    });
  }

  function deleteData(endpoint, data) {
    const token = getValue("token") ?? false;
    if (!token) {
      throw new Error("Token does not exist, login first.");
    }
    requestData({
      url: `/api/user/${endpoint}`,
      method: "delete",
      data: { data },
      headers: {
        authorization: token,
      },
    });
  }

  useEffect(() => {
    if (!loading && error === "") {
      setData(response);
    } else if (!loading) {
      console.error({ error, response });
    }
  }, [loading]);

  return { data, getData, postData, deleteData };
}

export { useVideoData };

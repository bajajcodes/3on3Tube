import { useState } from "react";
import axios from "axios";

function useAxios() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function requestData(axiosParams) {
    try {
      // const { url, method, body = null, headers = null } = axiosParams;
      // const response = await axios[method](url, headers, body);
      const response = await axios.request(axiosParams);
      setResponse(response.data);
    } catch (error) {
      console.error({ error });
      console.error(error.toJSON());
      console.error(error.response.data);
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return { response, error, loading, requestData };
}

export { useAxios };

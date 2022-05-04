import { useState } from "react";
import axios from "axios";

function useAxios() {
  const [response, setResponse] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  async function requestData(axiosParams) {
    const { method, url, body } = axiosParams;
    try {
      const response = await axios[method](url, body);
      setResponse(response.data);
    } catch (error) {
      console.error({ error });
      setError(error);
    } finally {
      setLoading(false);
    }
  }

  return { response, error, loading, requestData };
}

export { useAxios };

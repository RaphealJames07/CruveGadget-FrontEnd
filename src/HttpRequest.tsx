import { useState } from 'react';

interface HttpRequestProps {
  responseData: any;
  error: string | null;
  makeGetRequest: (endpoint: string) => Promise<void>;
  makePostRequest: (endpoint: string, data: any) => Promise<void>;
  makePutRequest: (endpoint: string, data: any) => Promise<void>;
  makeDeleteRequest: (endpoint: string) => Promise<void>;
}

const HttpRequest: () => HttpRequestProps = () => {
  const [responseData, setResponseData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const makeHttpRequest = async (method: string, endpoint: string, data: any | null = null) => {
    try {
      const url = `http://localhost:3000/${endpoint}`;
      const headers = {
        'Content-Type': 'application/json',
        // You may need to add additional headers based on your server requirements
      };

      const options: RequestInit = {
        method,
        headers,
        body: data ? JSON.stringify(data) : undefined,
      };

      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      setResponseData(result);
      setError(null);

    } catch (error) {
      setResponseData(null);
      setError(error.message);
    }
  };

  return {
    responseData,
    error,
    makeGetRequest: async (endpoint: string) => await makeHttpRequest('GET', endpoint),
    makePostRequest: async (endpoint: string, data: any) => await makeHttpRequest('POST', endpoint, data),
    makePutRequest: async (endpoint: string, data: any) => await makeHttpRequest('PUT', endpoint, data),
    makeDeleteRequest: async (endpoint: string) => await makeHttpRequest('DELETE', endpoint),
  };
};

export default HttpRequest;

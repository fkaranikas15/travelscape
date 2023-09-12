import { useEffect, useState } from "react";

export const useCountry = function (name, showed) {
  const [country, setCountry] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(
    function () {
      async function fetchCountry() {
        try {
          setIsLoading(true);
          setError("");
          if (!showed) return;

          const res = await fetch(
            `https://restcountries.com/v3.1/name/${name}`
          );

          if (!res.ok) throw new Error("Something went wrong with fetching");

          const data = await res.json();

          setCountry(data);
        } catch (err) {
          setError(err);
        } finally {
          setIsLoading(false);
        }
      }
      fetchCountry();
    },
    [name, showed]
  );

  return { country, isLoading, error };
};

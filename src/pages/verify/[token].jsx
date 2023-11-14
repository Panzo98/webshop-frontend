import { useRouter } from "next/router";
import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Verify() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const token = router.query.token;
  const sendVerifyToken = async () => {
    if (router.isReady) {
      try {
        await axios.get(`${process.env.API_URL}/users/verify/${token}`);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }
  };

  useEffect(() => {
    sendVerifyToken();
    if (!loading && !error) {
      const redirectTimeout = setTimeout(() => {
        router.push("/");
      }, 500);

      return () => clearTimeout(redirectTimeout);
    }
  }, [loading, error, router.isReady]);

  return (
    <div className="grow items-center justify-center flex">
      {loading ? (
        <span>We're verifying Your account..</span>
      ) : error ? (
        <span>Something went wrong {":("}</span>
      ) : (
        <span>Successfully verified!</span>
      )}
    </div>
  );
}

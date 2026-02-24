import axios from "axios";
import { useQuery } from "@tanstack/react-query";
import axiosInstance from "../API/axiosInstance";

import React from "react";

export default function useCategories() {
  const getCategories = async () => {
    const response = await axiosInstance.get("/Categories");
    return response.data;
  };
  const query = useQuery({
    queryKey: ["categories","en"],
    queryFn: getCategories,
    staleTime: 1000 * 60 * 5,
  });

  return query;
}

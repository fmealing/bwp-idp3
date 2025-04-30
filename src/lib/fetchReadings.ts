import { supabase } from "./supabase";

export const fetchReadings = async () => {
  const { data, error } = await supabase.from("readings").select("*");

  if (error) {
    console.error("Error fetching readings:", error);
    return [];
  }
  return data;
};

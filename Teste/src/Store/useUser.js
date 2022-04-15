import { useContext } from "react";
import { UserContext } from "./Provider";

export default function useUser() {
  const context = useContext(UserContext);
  return context;
}
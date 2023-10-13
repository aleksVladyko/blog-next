import AuthUser from "@/components/AuthUser";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "LogIn | Hi gues",
  description: "page authorisation"
};
const page = () => {
  
   return (
    <AuthUser/>
  );
};
export default page;
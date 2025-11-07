import Loading from "@/components/Loading";
import { Button } from "@/components/ui/button";
import useFetch from "@/hooks/useFetch";
import { useState } from "react";
import { useParams } from "react-router-dom";

interface Question {
  id: number;
  word: string;
  questions: string;
}

interface Data {
  id: number;
  name: string;
  questions: Question[];
}
const keyboard: string[] = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];



export default GameField;

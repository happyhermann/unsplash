import axios from "axios";
import React, { useEffect, useState } from "react";

const ACCESS_KEY = "CbuSOiu8nhicErzCuY4IkeqzuaxkT4RUSMCXhLKsiFo";
const RANDOM_PHOTO_URL = `https://api.unsplash.com/photos/random?client_id=${ACCESS_KEY}&count=30`;

// random image Interface

const [img, setImg] = useState("");
const [res, setRes] = useState([]);

export interface IGetRandomResult {}

const getRandom = async () => {
  const response = await fetch(RANDOM_PHOTO_URL);
  const responseJson = await response.json();
  const result = responseJson.results;
  console.log(result);
  setRes(result);
};

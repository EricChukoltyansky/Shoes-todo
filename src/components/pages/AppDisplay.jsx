import React, { useState, useEffect } from "react";
import ShoeCard from "../ShoeCard/ShoeCard";
import ShoeList from "../ShoeList/ShoeList";
import "./AppDisplay.css";

function AppDisplay() {
    
  return (
    <>
      <ShoeList />
      <ShoeCard />
    </>
  );
}


export default AppDisplay;

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/EricChukoltyansky/Shoes-todo.git
// git push -u origin main

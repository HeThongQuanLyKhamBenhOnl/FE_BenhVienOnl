import React, { useState } from "react";
import AppRouter from "./routes/AppRouter";
import ChatApp from "./ChatApp";

function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      <AppRouter />
    </div>
  );
}
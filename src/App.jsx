// src/App.jsx
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import MaintenancePage from "./components/MaintenancePage";
import Splash from "./pages/Splash";
import Home from "./pages/home";
import Content from "./pages/content";
import Quiz from "./pages/quiz";
import Game from "./pages/game";
import TimeChallenge from "./pages/game/TimeChallenge";
import CodePractice from "./pages/game/codePractice";
import CodeTimer from "./pages/game/CodeTimer";
import Binary from "./pages/game/Binary";
import Major from "./pages/major";
import Other from "./pages/other";
import QuizPlay from "./pages/quizPlay";

import CodeRunDemo from "./pages/game/CodeRunDemo";

export default function App() {
  const MAINTENANCE = import.meta.env.VITE_MAINTENANCE === "true";
  if (MAINTENANCE) return <MaintenancePage />;

  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />
      <Route path="/content" element={<Content />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/quiz/play" element={<QuizPlay />} />
      <Route path="/game" element={<Game />} />
      <Route path="/game/time" element={<TimeChallenge />} />
      <Route path="/game/code-practice" element={<CodePractice />} />
      <Route path="/game/code-timer" element={<CodeTimer />} />
      <Route path="/game/binary" element={<Binary />} />
      <Route path="/major" element={<Major />} />
      <Route path="/other" element={<Other />} />
      <Route path="*" element={<Navigate to="/home" replace />} />

      <Route path="/game/code-run-demo" element={<CodeRunDemo />} />
    </Routes>
  );
}

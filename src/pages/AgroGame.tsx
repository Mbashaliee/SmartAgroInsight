import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import DashboardLayout from "@/components/DashboardLayout";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Trophy, RotateCcw, Home, Lock, Star } from "lucide-react";

// Leveled questions structure
const gameLevels = [
  {
    level: 1,
    title: "Soil & Crops",
    questions: [
      { question: "Which soil is best for rice?", options: ["Sandy", "Clay", "Rocky"], answer: "Clay" },
      { question: "Which soil is best for groundnut?", options: ["Clay", "Sandy", "Stony"], answer: "Sandy" },
      { question: "Maize grows better in:", options: ["Sunlight", "Flooded water", "Cold place"], answer: "Sunlight" },
      { question: "Which soil type holds water the most?", options: ["Sandy", "Clay", "Rocky"], answer: "Clay" },
      { question: "Which soil drains water quickly?", options: ["Sandy", "Clay", "Rocky"], answer: "Sandy" },
      { question: "What crop grows in loamy soil?", options: ["Banana", "Ice", "Cactus"], answer: "Banana" },
      { question: "Which soil is not good for crops?", options: ["Rocky", "Clay", "Sandy"], answer: "Rocky" },
      { question: "Which crop grows better in fertile soil?", options: ["Maize", "Stone", "Desert grass"], answer: "Maize" },
      { question: "Which soil is black and rich?", options: ["Sandy", "Black cotton", "Clay"], answer: "Black cotton" },
      { question: "Which soil needs more fertilizer?", options: ["Sandy", "Clay", "Black"], answer: "Sandy" },
    ]
  },
  {
    level: 2,
    title: "Weather & Seasons",
    questions: [
      { question: "Which crop grows well in heavy rain?", options: ["Rice", "Groundnut", "Maize"], answer: "Rice" },
      { question: "Which crop grows well in dry season?", options: ["Groundnut", "Rice", "Banana"], answer: "Groundnut" },
      { question: "Which crop grows in cold weather?", options: ["Cabbage", "Rice", "Groundnut"], answer: "Cabbage" },
      { question: "Too much rain can spoil:", options: ["Groundnut", "Rice", "Maize"], answer: "Groundnut" },
      { question: "Too much sun can spoil:", options: ["Banana", "Maize", "Groundnut"], answer: "Banana" },
      { question: "If there is less rain, which crop is better?", options: ["Maize", "Rice", "Banana"], answer: "Maize" },
      { question: "Best crop for flood area?", options: ["Rice", "Groundnut", "Maize"], answer: "Rice" },
      { question: "Harmattan season is better for:", options: ["Potato", "Maize", "Banana"], answer: "Potato" },
      { question: "Rainy season is best for:", options: ["Rice", "Groundnut", "Cactus"], answer: "Rice" },
      { question: "Dry season irrigation farming suits:", options: ["Maize", "Rice", "Cucumber"], answer: "Maize" },
    ]
  },
  {
    level: 3,
    title: "AI Assistant Challenges",
    questions: [
      { question: "AI says: Maize. Why good?", options: ["Needs sunlight", "Needs ice", "Needs swamp"], answer: "Needs sunlight" },
      { question: "AI says: Rice. Why good?", options: ["Grows in water", "Grows in desert", "Needs little water"], answer: "Grows in water" },
      { question: "AI says: Groundnut. Why good?", options: ["Grows in sandy soil", "Needs flood", "Needs swamp"], answer: "Grows in sandy soil" },
      { question: "AI says: Banana. Why good?", options: ["Needs much rain", "Grows in desert", "Needs no water"], answer: "Needs much rain" },
      { question: "AI says: Tomato. Why good?", options: ["Needs good fertilizer", "Grows in desert", "Needs no care"], answer: "Needs good fertilizer" },
      { question: "AI says: Millet. Why good?", options: ["Survives drought", "Needs swamp", "Needs flood"], answer: "Survives drought" },
      { question: "AI says: Yam. Why good?", options: ["Grows in loamy soil", "Needs swamp", "Needs sand only"], answer: "Grows in loamy soil" },
      { question: "AI says: Cabbage. Why good?", options: ["Grows in cool weather", "Needs desert", "Needs swamp"], answer: "Grows in cool weather" },
      { question: "AI says: Sugarcane. Why good?", options: ["Needs much water", "Needs desert", "Needs no sun"], answer: "Needs much water" },
      { question: "AI says: Cassava. Why good?", options: ["Grows in poor soil", "Grows in ice", "Needs swamp"], answer: "Grows in poor soil" },
    ]
  },
  {
    level: 4,
    title: "Pests & Diseases",
    questions: [
      { question: "Weevils attack which crop?", options: ["Maize", "Groundnut", "Banana"], answer: "Maize" },
      { question: "Rice pest affects:", options: ["Rice", "Potato", "Groundnut"], answer: "Rice" },
      { question: "Termites affect which crop most?", options: ["Groundnut", "Rice", "Banana"], answer: "Groundnut" },
      { question: "Birds attack which crop most?", options: ["Maize", "Yam", "Groundnut"], answer: "Maize" },
      { question: "Black pod disease affects:", options: ["Cocoa", "Maize", "Rice"], answer: "Cocoa" },
      { question: "Cassava mosaic disease affects:", options: ["Cassava", "Banana", "Rice"], answer: "Cassava" },
      { question: "Stem borer insect attacks:", options: ["Maize", "Yam", "Cabbage"], answer: "Maize" },
      { question: "Nematodes attack roots of:", options: ["Potato", "Maize", "Groundnut"], answer: "Potato" },
      { question: "Armyworm attacks:", options: ["Maize", "Rice", "Groundnut"], answer: "Maize" },
      { question: "Leaf blight disease affects:", options: ["Maize", "Potato", "Banana"], answer: "Maize" },
    ]
  },
  {
    level: 5,
    title: "Complex Scenarios",
    questions: [
      { question: "Sandy soil + little rain = ?", options: ["Groundnut", "Rice", "Banana"], answer: "Groundnut" },
      { question: "Clay soil + heavy rain = ?", options: ["Rice", "Groundnut", "Maize"], answer: "Rice" },
      { question: "Loamy soil + sun = ?", options: ["Maize", "Cactus", "Groundnut"], answer: "Maize" },
      { question: "Poor soil + drought = ?", options: ["Millet", "Rice", "Banana"], answer: "Millet" },
      { question: "Irrigation water available = ?", options: ["Tomato", "Potato", "Cactus"], answer: "Tomato" },
      { question: "Flood area farming = ?", options: ["Rice", "Groundnut", "Maize"], answer: "Rice" },
      { question: "Sandy soil + irrigation = ?", options: ["Groundnut", "Rice", "Banana"], answer: "Groundnut" },
      { question: "Highland + cold = ?", options: ["Cabbage", "Maize", "Groundnut"], answer: "Cabbage" },
      { question: "Lowland + waterlogged = ?", options: ["Rice", "Yam", "Maize"], answer: "Rice" },
      { question: "Fertile black soil = ?", options: ["Maize", "Groundnut", "Banana"], answer: "Maize" },
    ]
  }
];

const AgroGame = () => {
  const navigate = useNavigate();
  const [currentLevel, setCurrentLevel] = useState(0);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [levelScore, setLevelScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [levelComplete, setLevelComplete] = useState(false);
  const [showLevelSelect, setShowLevelSelect] = useState(true);
  const [completedLevels, setCompletedLevels] = useState<number[]>([]);
  const [totalPoints, setTotalPoints] = useState(0);

  useEffect(() => {
    // Load saved data from localStorage
    const savedPoints = localStorage.getItem("agroGameTotalPoints");
    const savedCompleted = localStorage.getItem("agroGameCompletedLevels");
    
    if (savedPoints) setTotalPoints(parseInt(savedPoints));
    if (savedCompleted) setCompletedLevels(JSON.parse(savedCompleted));
  }, []);

  const currentLevelData = gameLevels[currentLevel];
  const currentQuestions = currentLevelData.questions;

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return; // Prevent multiple selections

    setSelectedAnswer(answer);
    const correct = answer === currentQuestions[currentQuestion].answer;
    setIsCorrect(correct);

    const newScore = correct ? levelScore + 10 : Math.max(0, levelScore - 5);
    setLevelScore(newScore);

    // Auto move to next question after 1 second
    setTimeout(() => {
      if (currentQuestion < currentQuestions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setIsCorrect(null);
      } else {
        setLevelComplete(true);
        // Update total points
        const newTotalPoints = totalPoints + newScore;
        setTotalPoints(newTotalPoints);
        localStorage.setItem("agroGameTotalPoints", newTotalPoints.toString());
        
        // Mark level as completed
        if (!completedLevels.includes(currentLevel)) {
          const newCompleted = [...completedLevels, currentLevel];
          setCompletedLevels(newCompleted);
          localStorage.setItem("agroGameCompletedLevels", JSON.stringify(newCompleted));
        }
      }
    }, 1000);
  };

  const startLevel = (levelIndex: number) => {
    setCurrentLevel(levelIndex);
    setCurrentQuestion(0);
    setLevelScore(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
    setLevelComplete(false);
    setShowLevelSelect(false);
  };

  const backToLevelSelect = () => {
    setShowLevelSelect(true);
    setLevelComplete(false);
  };

  const totalQuestions = currentQuestions.length;
  const progressPercentage = ((currentQuestion + 1) / totalQuestions) * 100;
  const scorePercentage = (levelScore / (totalQuestions * 10)) * 100;

  // Level selection screen
  if (showLevelSelect) {
    return (
      <DashboardLayout>
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center p-4">
          <Card className="w-full max-w-4xl shadow-2xl border-2 border-primary/20">
            <CardHeader className="text-center space-y-4 bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-4xl font-bold">🌾 AgroGame</CardTitle>
              <p className="text-muted-foreground text-lg">Test your agricultural knowledge!</p>
              <div className="flex justify-center items-center gap-2 text-2xl font-bold text-primary">
                <Star className="h-6 w-6 fill-primary" />
                <span>Total Points: {totalPoints}</span>
              </div>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-4">
                {gameLevels.map((level, index) => {
                  const isLocked = index > 0 && !completedLevels.includes(index - 1);
                  const isCompleted = completedLevels.includes(index);
                  
                  return (
                    <button
                      key={index}
                      onClick={() => !isLocked && startLevel(index)}
                      disabled={isLocked}
                      className={`p-6 rounded-xl border-2 transition-all text-left relative ${
                        isLocked
                          ? "bg-muted/50 border-muted cursor-not-allowed opacity-60"
                          : isCompleted
                          ? "bg-primary/10 border-primary hover:bg-primary/20 hover:scale-105"
                          : "bg-card border-border hover:border-primary hover:scale-105"
                      }`}
                    >
                      {isLocked && (
                        <div className="absolute top-4 right-4">
                          <Lock className="h-6 w-6 text-muted-foreground" />
                        </div>
                      )}
                      {isCompleted && (
                        <div className="absolute top-4 right-4">
                          <Trophy className="h-6 w-6 text-primary fill-primary" />
                        </div>
                      )}
                      <div className="space-y-2">
                        <div className="text-sm text-muted-foreground font-medium">Level {level.level}</div>
                        <div className="text-xl font-bold">{level.title}</div>
                        <div className="text-sm text-muted-foreground">
                          {level.questions.length} Questions
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>
              
              <div className="mt-8 text-center">
                <Button onClick={() => navigate("/dashboard")} variant="outline" size="lg">
                  <Home className="mr-2 h-5 w-5" />
                  Back to Dashboard
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    );
  }

  // Level complete screen
  if (levelComplete) {
    const passed = scorePercentage >= 70;
    
    return (
      <DashboardLayout>
        <div className="min-h-[calc(100vh-200px)] flex items-center justify-center p-4">
          <Card className="w-full max-w-2xl shadow-2xl border-2 border-primary/20">
            <CardHeader className="text-center space-y-4 bg-gradient-to-r from-primary/10 to-accent/10">
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                <Trophy className="h-10 w-10 text-white" />
              </div>
              <CardTitle className="text-3xl font-bold">
                {passed ? "🎉 Level Complete!" : "🌱 Keep Learning!"}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8 space-y-6 text-center">
              <div className="space-y-4">
                <div className="text-6xl font-bold text-primary">{levelScore}</div>
                <p className="text-xl text-muted-foreground">
                  Level Score: {scorePercentage.toFixed(0)}%
                </p>
                <div className="flex justify-center items-center gap-2 text-2xl font-bold text-primary">
                  <Star className="h-6 w-6 fill-primary" />
                  <span>Total Points: {totalPoints}</span>
                </div>
              </div>

              <div className="p-6 bg-muted/50 rounded-lg">
                <p className="text-lg font-medium">
                  {passed
                    ? "🎉 Excellent work! You're a Smart Farmer!"
                    : "🌱 Keep Learning and Try Again!"}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button onClick={() => startLevel(currentLevel)} size="lg" className="gap-2">
                  <RotateCcw className="h-5 w-5" />
                  Retry Level
                </Button>
                <Button onClick={backToLevelSelect} variant="outline" size="lg" className="gap-2">
                  <Trophy className="h-5 w-5" />
                  Level Select
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </DashboardLayout>
    );
  }

  // Game screen
  return (
    <DashboardLayout>
      <div className="min-h-[calc(100vh-200px)] flex items-center justify-center p-4">
        <Card className="w-full max-w-3xl shadow-2xl border-2 border-primary/20">
          <CardHeader className="space-y-4 bg-gradient-to-r from-primary/10 to-accent/10">
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-2xl">
                  Level {currentLevelData.level}: {currentLevelData.title}
                </CardTitle>
                <p className="text-sm text-muted-foreground mt-1">
                  Question {currentQuestion + 1} of {totalQuestions}
                </p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold text-primary">{levelScore}</div>
                <p className="text-xs text-muted-foreground">Level Score</p>
              </div>
            </div>
            <Progress value={progressPercentage} className="h-3" />
          </CardHeader>

          <CardContent className="p-8 space-y-8">
            <div className="text-center space-y-6">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground leading-relaxed">
                {currentQuestions[currentQuestion].question}
              </h2>

              <div className="grid gap-4 mt-8">
                {currentQuestions[currentQuestion].options.map((option, index) => {
                  let buttonClass = "p-6 text-lg font-medium rounded-xl border-2 transition-all hover:scale-105";
                  
                  if (selectedAnswer === option) {
                    buttonClass += isCorrect
                      ? " bg-primary/20 border-primary text-primary"
                      : " bg-destructive/20 border-destructive text-destructive";
                  } else if (selectedAnswer && option === currentQuestions[currentQuestion].answer) {
                    buttonClass += " bg-primary/20 border-primary text-primary";
                  } else {
                    buttonClass += " bg-card border-border hover:border-primary hover:bg-primary/5";
                  }

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswer(option)}
                      disabled={selectedAnswer !== null}
                      className={buttonClass}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>

              {selectedAnswer && (
                <div className={`p-4 rounded-lg text-lg font-medium ${
                  isCorrect ? "bg-primary/10 text-primary" : "bg-destructive/10 text-destructive"
                }`}>
                  {isCorrect ? "✅ Correct! +10 points" : "❌ Wrong! -5 points"}
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </DashboardLayout>
  );
};

export default AgroGame;

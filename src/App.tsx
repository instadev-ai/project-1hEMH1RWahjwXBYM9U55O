import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import NavBar from "./components/ui/NavBar"
import Hero from "./components/ui/Hero"

const queryClient = new QueryClient()

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="min-h-screen bg-background">
          <NavBar />
          <Routes>
            <Route path="/" element={<Hero />} />
          </Routes>
        </div>
      </Router>
    </QueryClientProvider>
  )
}

export default App
import React, { useEffect, useState } from "react";
import "./App.css"; // Keep this for styles
import Header from "./Header.tsx";
import CollegeBasketballTeams from "./CollegeBasketballTeams.json";

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

const TeamCard: React.FC<Team> = ({ school, name, city, state }) => {
  return (
    <div className="border p-4 m-2 rounded-lg shadow-lg bg-white">
      <h2 className="text-lg font-bold">{school}</h2>
      <p className="text-gray-600">Mascot: {name}</p>
      <p className="text-gray-600">
        Location: {city}, {state}
      </p>
    </div>
  );
};

const App: React.FC = () => {
  const [teams, setTeams] = useState<Team[]>([]);

  useEffect(() => {
    if (CollegeBasketballTeams.teams) {
      setTeams(CollegeBasketballTeams.teams);
    }
  }, []);

  return (
    <div>
      <Header />
      <div className="grid grid-cols-3 gap-4 p-4">
        {teams.map((team, index) => (
          <TeamCard
            key={index}
            school={team.school}
            name={team.name}
            city={team.city}
            state={team.state}
          />
        ))}
      </div>
    </div>
  );
};

export default App;

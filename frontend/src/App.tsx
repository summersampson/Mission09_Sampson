import React, { useEffect, useState } from "react";
import "./App.css"; // Keep this for styles
import CollegeBasketballTeams from "./CollegeBasketballTeams.json";

interface Team {
  school: string;
  name: string;
  city: string;
  state: string;
}

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white py-10 text-center text-6xl font-extrabold w-full">
      Colleges in NCAA Basketball:
    </header>
  );
};

const TeamCard: React.FC<Team> = ({ school, name, city, state }) => {
  return (
    <div className="border p-6 m-4 rounded-lg shadow-lg bg-white text-center w-full max-w-xs mx-auto">
      <h2 className="text-2xl font-bold break-words">{school}</h2>
      <p className="text-gray-600 text-lg">Mascot: {name}</p>
      <p className="text-gray-600 text-lg">
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
    <div className="w-full px-10">
      <Header />
      <section className="text-center py-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
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
      </section>
    </div>
  );
};

export default App;

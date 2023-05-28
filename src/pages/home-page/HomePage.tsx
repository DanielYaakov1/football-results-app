import { useCallback, useEffect, useState } from 'react';
import GameCard from '../../components/game-card';
import { useHttp } from '../../hooks/useHttp';
import { Root, Match } from '../../interfaces/interface';
import Sorting from '../../components/Sorting';

export const HomePage = () => {
  const url = '';
  const { data, isLoading, error } = useHttp<Root>(url, {
    headers: {
      'X-Auth-Token': process.env.FOOTBALL_DATA_API_KEY,
    },
  });
  const [filteredMatch, setFilteredMatch] = useState<Match[]>(
    data?.matches || []
  );
  const [selectedStatus, setSelectedStatus] = useState<string>('All');
  const statusOptions = ['All', 'SCHEDULED', 'FINISHED'];

  const handleStatusChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedStatus(event.target.value);
  };

  const sortedGameStatus = useCallback(() => {
    if (data) {
      let filteredGames = data.matches;
      if (selectedStatus !== 'All') {
        filteredGames = filteredGames.filter((game) =>
          game.status.includes(selectedStatus)
        );
      }
      setFilteredMatch(filteredGames);
    }
  }, [data, selectedStatus]);

  useEffect(() => {
    sortedGameStatus();
  }, [sortedGameStatus]);

  return (
    <div>
      <Sorting
        value={selectedStatus}
        options={statusOptions}
        handleChange={handleStatusChange}
        label='Sorting by Status:'
      />
      <GameCard data={filteredMatch} isLoading={isLoading} error={error} />
    </div>
  );
};

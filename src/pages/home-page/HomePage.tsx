import GameCard from '../../components/game-card';
import { useHttp } from '../../hooks/useHttp';
import { Root } from '../../interfaces/interface';

export const HomePage = () => {
  const url = '';
  const { data, isLoading, error } = useHttp<Root>(url, {
    headers: {
      'X-Auth-Token': process.env.FOOTBALL_DATA_API_KEY,
    },
  });

  return (
    <div>
      <h1>HOME PAGE</h1>
      <GameCard data={data} isLoading={isLoading} error={error} />
    </div>
  );
};

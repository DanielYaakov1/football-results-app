import { AxiosError } from 'axios';
import { useCallback } from 'react';
import { Match, Root } from '../../interfaces/interface';
import useStyles from './useStyles';
import { formatDate } from '../../utils/date';

interface IGameCard {
  error: AxiosError<any> | null;
  isLoading: boolean;
  data: Root | null;
}

export const GameCard = ({ error, isLoading, data }: IGameCard) => {
  const classes = useStyles();

  const truncatedText = useCallback((text: string, maxLength: number) => {
    return text.length > maxLength ? `${text.slice(0, maxLength)}...` : text;
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error:{error.message}</div>;
  }

  return (
    <div className={classes.gameCardContainer}>
      <h1 className={classes.gameCardHeading}>scheduled Games</h1>
      {data?.matches.map((game: Match) => (
        <div key={game.id} className={classes.card}>
          <div>
            <h2 className={classes.cardTitle}>
              <img
                src={`https://crests.football-data.org/${game.homeTeam.id}.svg`}
                alt={game.homeTeam.name}
                className='team-crest'
              />
              {` ${truncatedText(game.homeTeam.name, 15)} `} vs
              {` ${truncatedText(game.awayTeam.name, 15)} `}
              <img
                src={`https://crests.football-data.org/${game.awayTeam.id}.svg`}
                alt={game.awayTeam.name}
                className='team-crest'
              />
            </h2>
            {game.score.fullTime.homeTeam !== null
              ? `${game.score.fullTime.homeTeam}-${game.score.fullTime.awayTeam}`
              : 'Not played yet'}
          </div>
          <p className={classes.cardText}>Date: {formatDate(game.utcDate)}</p>
          <p className={`${classes.cardText} ${classes.cardTextBold}`}>
            Status: {game.status}
          </p>
        </div>
      ))}
    </div>
  );
};

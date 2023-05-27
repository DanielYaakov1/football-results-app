import { AxiosError } from 'axios';
import { Match } from '../../interfaces/interface';
import useStyles from './useStyles';
import { formatDate } from '../../utils/date';
import { truncatedText } from '../../utils/text';

interface IGameCard {
  error: AxiosError<unknown> | null;
  isLoading: boolean;
  data: Match[] | null;
}

export const GameCard = ({ error, isLoading, data }: IGameCard) => {
  const classes = useStyles();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error:{error.message}</div>;
  }

  return (
    <div className={classes.gameCardContainer}>
      {data?.map((game: Match) => (
        <div key={game.id} className={classes.card}>
          <div>
            <h2 className={classes.cardTitle}>
              <div className={classes.teamInfo}>
                <img
                  src={`https://crests.football-data.org/${game.homeTeam.id}.svg`}
                  alt={game.homeTeam.name}
                  className={classes.teamCrest}
                />
                <span>{truncatedText(game.homeTeam.name, 15)}</span>
              </div>
            </h2>
            VS
            <h2 className={classes.cardTitle}>
              <div className={classes.teamInfo}>
                <img
                  src={`https://crests.football-data.org/${game.awayTeam.id}.svg`}
                  alt={game.awayTeam.name}
                  className={classes.teamCrest}
                />
                <span>{truncatedText(game.awayTeam.name, 15)}</span>
              </div>
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

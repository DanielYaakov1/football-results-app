import { AxiosError } from 'axios';
import { Match } from '../../interfaces/interface';
import useStyles from './useStyles';
import { formatDate } from '../../utils/date';
import { truncatedText } from '../../utils/text';
import RESOURCES from '../../shared/constants/resources';
import DataGrid from '../data-grid/DataGrid';

interface IGameCard {
  error: AxiosError<unknown> | null;
  isLoading: boolean;
  data: Match[] | null;
}

export const GameCard = ({ error, isLoading, data }: IGameCard) => {
  const classes = useStyles();

  if (isLoading) {
    return <div>{RESOURCES.LOADING_TEXT}</div>;
  }

  if (error) {
    return (
      <div>
        {RESOURCES.ERROR_TEXT}
        {error.message}
      </div>
    );
  }

  return (
    <DataGrid>
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
            {RESOURCES.MATCH_GAME_TEAM_AGAINST_TEAM_TEXT}
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
              : RESOURCES.MATCH_GAME_NOT_PLAYED_TEXT}
          </div>
          <p className={classes.cardText}>
            {RESOURCES.MATCH_GAME_DATE_TEXT}
            {formatDate(game.utcDate)}
          </p>
          <p className={`${classes.cardText} ${classes.cardTextBold}`}>
            {RESOURCES.MATCH_GAME_STATUS_TEXT}
            {game.status}
          </p>
        </div>
      ))}
    </DataGrid>
  );
};

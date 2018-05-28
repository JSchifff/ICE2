export class Fixture {
  public goalDiff: number;
  constructor(
    public id: number,
    public competitionId: number,
    public date: string,
    public matchday: number,
    public homeTeamName: string,
    public homeTeamId: number,
    public awayTeamName: string,
    public awayTeamId: number,
    public result: {
      goalsHomeTeam: number,
      goalsAwayTeam: number
    }
  )
  { }

}

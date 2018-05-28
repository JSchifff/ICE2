export class Standing {
  constructor(
    public rank: number,
    public team: string,
    public teamId: number,
    public playedGames: number,
    public crestURI: string,
    public points: number,
    public goals: number,
    public goalsAgainst: number,
    public goalDifference: number
  ) {}
}

export class Competition {
  constructor(
	public id: number,
	public caption: string,
	public league: string,
	public year: string,
	public numberOfTeams: number,
	public numberOfGames: number,
	public lasUpdated: string
	)
	{}
}
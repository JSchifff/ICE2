export class Player {
  constructor(
	public count: number,
	public players: {
		id: number,
		name: string,
		position: string,
		jerseyNumber: number,
		dateOfBirth: string,
		nationality: string,
		contractUntil: string,
		marketValue: string
		}
	)
	{}
}
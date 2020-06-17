class LiveGames {
  [x: string]: any;

  constructor() {
    this.games = [];
  }

  addGame(pin: any, hostId: any, gameLive: any, gameData: any) {
    const gamePlay = { pin, hostId, gameLive, gameData };
    this.games.push(gamePlay);
    return gamePlay;
  }

  removeGame(hostId) {
    const game = this.getGame(hostId);

    if (game) {
      this.games = this.games.filter(game => game.hostId !== hostId);
    }
    return game;
  }

  getGame(hostId) {
    return this.games.filter(game => game.hostId === hostId)[0];
  }
}

export default LiveGames;

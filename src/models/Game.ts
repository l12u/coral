import type { Player } from "./Player";

/**
 * Represents the state a game could be in.
 *
 * @enum {string}
 */
export enum GameState {
    /**
     * The game is waiting for players to start.
     * In this state new players may still join.
     */
    Lobby = "lobby",

    /**
     * The game is running.
     * In this state joining ain't generally possible.
     */
    Running = "running",
}

/**
 * Represents a running game instance of a Board.
 */
export interface Game {
    /**
     * Timestamp at which the game was created.
     */
    createdAt: number;

    /**
     * Additional data set by the board service.
     */
    gameData: {};

    /**
     * ID of the game.
     */
    id: string;

    /**
     * The players in the game.
     */
    players: Player[];

    /**
     * State the game is.
     */
    state: GameState;

    /**
     * The type of board game.
     */
    type: string;

    /**
     * Timestamp at which the game was last updated.
     */
    updatedAt: number;
}
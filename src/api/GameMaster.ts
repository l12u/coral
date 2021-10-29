import axios from "axios";

import type { Board, Game, GameState, Player } from "../models";

/**
 * Adds a player to a running game.
 *
 * @param gameId ID of the game.
 * @param player Player to add.
 */
export async function addPlayer(gameId: string, player: Player): Promise<void> {
    await axios.post(`/games/${gameId}/players`, player);
}

/**
 * Creates a new instance of a game.
 *
 * @param param0 The game to create.
 * @returns ID of the game.
 */
export async function createGame({ gameData, players, type }: Game): Promise<Pick<Game, "id">> {
    const { data } = await axios.post<Pick<Game, "id">>("/games", { gameData, players, type });
    return data;
}

/**
 * Deletes a running game.
 *
 * @param id ID of the game.
 */
export async function deleteGame(id: string): Promise<void> {
    await axios.delete(`/games${id}`);
}

/**
 * Returns the registered board for a board game type.
 *
 * @param type The type of board game.
 * @returns The board if its exists.
 */
export async function getBoard(type: string): Promise<Board> {
    const { data } = await axios.get<Board>(`/boards${type}`);
    return data;
}

/**
 * Returns all registered boards.
 *
 * @returns An array of boards.
 */
export async function getBoards(): Promise<Board[]> {
    const { data } = await axios.get<Board[]>("/boards");
    return data;
}

/**
 * Returns all running games.
 *
 * @returns An array of games.
 */
export async function getGames(): Promise<Game[]> {
    const { data } = await axios.get<Game[]>(`/games`);
    return data;
}

/**
 * Returns a game by its ID.
 *
 * @param id ID of the game.
 * @returns The running game if it exists.
 */
export async function getGame(id: string): Promise<Game> {
    const { data } = await axios.get<Game>(`/game/${id}`);
    return data;
}

/**
 * Removes a player from a running game.
 *
 * @param gameId ID of the game.
 * @param playerId ID of the player.
 */
export async function removePlayer(gameId: string, playerId: string): Promise<void> {
    await axios.delete(`/games/${gameId}/players/${playerId}`);
}

/**
 * Updates the state of a running game.
 *
 * @param gameId ID of the game.
 * @param state The new state of the game.
 */
export async function updateGameState(gameId: string, state: GameState): Promise<void> {
    await axios.put(`/games/${gameId}/state`, state);
}

/**
 * Updates a player in a running game.
 *
 * @param gameId ID of the game.
 * @param player The player to update.
 */
export async function updatePlayer(gameId: string, player: Player): Promise<void> {
    await axios.put(`/games/${gameId}/players/${player.id}`, player);
}
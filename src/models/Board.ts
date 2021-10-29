/**
 * Represents a board game instance known to the GameMaster service.
 */
export interface Board {
    /**
     * ID of the board game instance.
     */
    id: string;

    /**
     * URL of the game instance.
     */
    url: string;

    /**
     * The type of board game.
     */
    type: string;
}
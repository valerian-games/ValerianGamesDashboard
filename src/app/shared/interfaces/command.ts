export interface Command {
    command: String | null,
    createdBy: String | null,
    description: String | null,
    games: Array<String> | null,
    public: Boolean | null,
    createdAt: Date | null
}

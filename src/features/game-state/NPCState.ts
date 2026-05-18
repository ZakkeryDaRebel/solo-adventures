export interface NPCState {
  name: string;
  alive: boolean;
  met: boolean;
  friendLevel: number; //Goes from -10 to 10
  conversations: Record<string, string[]>; //Node -> array of all conversations
}

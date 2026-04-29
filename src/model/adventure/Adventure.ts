import type { NodeType } from "../node/NodeType";

export interface Adventure {
  meta: {
    id: string;
    title: string;
    description: string;
    startNode: string;
  };
  story: Record<string, NodeType>;
}

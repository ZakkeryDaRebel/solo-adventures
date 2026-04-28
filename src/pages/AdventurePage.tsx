import { useParams, useNavigate } from "react-router-dom";
import { adventures } from "../model/adventure/adventureLoader";
import StoryNode from "../components/StoryNode";
import FightPage from "./FightPage";
import type { NodeType } from "../model/node/NodeType";
import type { StoryNodeType } from "../model/node/StoryNodeType";
import type { FightNodeType } from "../model/node/FightNodeType";

export default function AdventurePage() {
  const { adventureId, nodeId } = useParams();
  const navigate = useNavigate();

  const adventure = adventures[adventureId as string];

  const node = adventure.story[
    nodeId === undefined ? adventure.meta.startNode : nodeId
  ] as NodeType;

  function goTo(nextNode: string) {
    if (nextNode === "home-page") navigate("/");
    else navigate(`/adventure/${adventureId}/${nextNode}`);
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white p-10">
      {node.type === "story" && (
        <StoryNode node={node as StoryNodeType} goTo={goTo} />
      )}
      {node.type === "fight" && (
        <FightPage node={node as FightNodeType} goTo={goTo} />
      )}
    </div>
  );
}

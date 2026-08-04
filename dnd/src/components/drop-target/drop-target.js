import React from "react";

export default function DropTarget(props) {
  const { puzzleElement, handleDrop, dropTargetIndex, handleDrag } = props;
  const isEmpty = !puzzleElement.elementSrc;

  return (
    <li
      onDragOver={(e) => e.preventDefault()}
      onDrop={isEmpty ? (e) => handleDrop(e, dropTargetIndex) : null}
      className="listItem"
    >
      {puzzleElement.elementSrc && (
        <img
          draggable
          onDrag={(e) => handleDrag(e, puzzleElement)}
          src={`./${puzzleElement.elementSrc}`}
        />
      )}
    </li>
  );
}

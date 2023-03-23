import React, { useState } from "react";
import "./Tree.css";

const isObject = (value) => typeof value === "object" && value !== null && !Array.isArray(value);

const isArray = (value) => Array.isArray(value);

const TreeNode = ({ label, data, onUpdate, nodeId }) => {
  const [collapsed, setCollapsed] = useState(true);
  const [editing, setEditing] = useState(false);
  const [nodeLabel, setNodeLabel] = useState(label);

  const toggleCollapse = () => setCollapsed(!collapsed);
  const handleEdit = () => setEditing(true);
  const handleBlur = () => {
    setEditing(false);
    onUpdate(nodeId, nodeLabel);
  };

  const handleChange = (e) => {
    setNodeLabel(e.target.value);
  };

  const renderChildren = () => {
    if (isObject(data)) {
      return Object.keys(data).map((key, index) => (
        <TreeNode
          key={index}
          nodeId={`${nodeId}-${index}`}
          label={key}
          data={data[key]}
          onUpdate={onUpdate}
        />
      ));
    } else if (isArray(data)) {
      return data.map((item, index) => (
        <TreeNode
          key={index}
          nodeId={`${nodeId}-${index}`}
          label={`${nodeLabel}[${index}]`}
          data={item}
          onUpdate={onUpdate}
        />
      ));
    } else {
      return null;
    }
  };

  return (
    <div className="tree-node">
      <div className="tree-label">
        {editing ? (
          <input
            type="text"
            value={nodeLabel}
            onChange={handleChange}
            onBlur={handleBlur}
            autoFocus
          />
        ) : (
          <>
            {(isObject(data) || isArray(data)) && (
              <span onClick={toggleCollapse}>
                {collapsed ? "[+]" : "[-]"}
              </span>
            )}{" "}
            <span onDoubleClick={handleEdit}>{nodeLabel}</span>
          </>
        )}
      </div>
      {!collapsed && <div className="tree-children">{renderChildren()}</div>}
    </div>
  );
};

const Tree = ({ data, onUpdate }) => {
  return (
    <div className="tree">
      {Object.keys(data).map((key, index) => (
        <TreeNode
          key={index}
          nodeId={`root-${index}`}
          label={key}
          data={data[key]}
          onUpdate={onUpdate}
        />
      ))}
    </div>
  );
};

export default Tree;

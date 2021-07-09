import React from "react";
import { Dropdown } from "react-bootstrap";

function DepartmentDropdown({
  departments,
  setSelectedDepartment,
  onSetDepartmentId,
}) {
  return (
    <Dropdown.Menu>
      <Dropdown.Item
        onClick={() => onSetDepartmentId("")}
        key={-1}
        onSelect={() => setSelectedDepartment(null)}
      >
        --All--
      </Dropdown.Item>

      {departments && Object.keys(departments).length > 0 &&
        departments.content.map((item, key) => {
          return (
            <Dropdown.Item
              onClick={() => onSetDepartmentId(item.id)}
              key={key}
              onSelect={() => setSelectedDepartment(item.label)}
            >
              {item.label}
            </Dropdown.Item>
          );
        })}
    </Dropdown.Menu>
  );
}

export default DepartmentDropdown;

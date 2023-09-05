import React from "react";
import styled from "styled-components";

export const Button = styled.button`
  display: flex;
  padding: 10px 18px;
  color: white;
  border-radius: 5px;
  background: #000;
  min-width: 220px;
  border: none;
  font-size: 16px;
  border: 1px solid transparent;
  cursor: pointer;
  transition: 0.4s background ease-in;
  &:hover {
    background-color: white;
    border: 1px solid black;
    color: #000;
    transition: 0.3s background ease-in;
  }
`;
export const OutlineButton = styled(Button)`
  border: 1px solid black;
  background-color: white;
  color: black;
  &:hover {
    background-color: black;
    border: 1px solid transparent;
    color: white;
  }
`;

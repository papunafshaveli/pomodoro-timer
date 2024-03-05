import styled from "styled-components";

export const AppContainer = styled.div`
  min-width: 375px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 50px;

  padding: 50px 0;

  margin-top: 100px;
`;

export const TimeTitle = styled.h3`
  font-size: 1.8rem;
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.4rem;
`;

export const Time = styled.div`
  display: flex;
  gap: 2px;

  font-size: 3.4rem;
`;

export const Buttons = styled.div`
  display: flex;
  gap: 20px;

  button {
    font-size: 1.6rem;

    width: 100px;
    padding: 10px;

    border: none;
    border-radius: 8px;
  }
`;

export const SelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;

  select {
    border: 1px solid #999;
    font-size: 18px;
    color: #1c87c9;
    background-color: #eee;
    border-radius: 5px;
    box-shadow: 4px 4px #ccc;
  }
`;
import styled from "styled-components";

export const SkillSection = styled.section`
  margin-left: 270px;
  padding: 40px;
  min-height: 100vh;
  background: var(--bg-color);
  color: var(--text-color);

  @media (max-width: 900px) {
    margin-left: 0;
    padding: 90px 20px 20px;
  }
`;

export const Wrapper = styled.div`
  max-width: 1000px;
  display: flex;
  flex-direction: column;
  gap: 30px;

  h2 {
    font-size: 36px;
    font-weight: 700;
  }

  .skills-layout {
    display: flex;
    gap: 60px;

    @media (max-width: 900px) {
      flex-direction: column;
    }
  }

  .left,
  .right {
    flex: 1;
  }

  .accordion {
    margin-bottom: 20px;
  }

  .accordion button {
    width: 100%;
    padding: 14px 18px;
    background: var(--card-bg);
    border: 1px solid #e5e7eb;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 600;
    color: var(--primary);
    cursor: pointer;
  }

  .accordion ul {
    margin-top: 10px;
    padding: 16px;
    background: var(--card-bg);
    border: 1px solid #e5e7eb;
    border-radius: 10px;
  }

  .accordion li {
    list-style: none;
    margin-bottom: 18px;
  }

  .skill-top {
    display: flex;
    justify-content: space-between;
    font-size: 15px;
    margin-bottom: 6px;
  }

  .percent {
    color: var(--primary);
    font-weight: 600;
  }

  .progress {
    width: 100%;
    height: 8px;
    background: #e5e7eb;
    border-radius: 10px;
    overflow: hidden;
  }

  .progress-fill {
    height: 100%;
    background: var(--primary);
    border-radius: 10px;
    transition: width 0.6s ease;
  }
`;

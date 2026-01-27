import styled from "styled-components";

export const ContactSection = styled.section`
  margin-left: 270px;
  padding: 40px;
  min-height: 100vh;
  background: var(--bg-color);
  color: var(--text-color);
  transition: all 0.3s ease;
  display: flex;

  @media (max-width: 1200px) { padding: 30px; }
  @media (max-width: 992px) { padding: 25px; }
  @media (max-width: 900px) { margin-left: 0; padding: 90px 20px 20px; }
  @media (max-width: 480px) { padding: 85px 15px 15px; }
`;

export const Wrapper = styled.div`
  display: flex;
  gap: 40px;
  align-items: center;

  @media (max-width: 900px) { flex-direction: column; }

  h2 {
    font-size: 36px;
    font-weight: 700;
    color: var(--text-color);

    @media (max-width: 480px) { font-size: 26px; }
  }

  .side {
    flex: 1;
    background: var(--card-bg);
    padding: 30px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    transition: all 0.3s ease;

    @media (max-width: 480px) { padding: 20px; }
  }

  /* INFO */
  .box_main {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .start {
    font-size: 26px;
    color: var(--primary);
  }

  h4 {
    font-size: 18px;
    margin: 0;
    color: var(--text-color);
  }

  p {
    font-size: 14px;
    color: var(--text-color);
    opacity: 0.7;
  }

  /* FORM */
  input,
  textarea {
    border-radius: 10px;
    padding: 10px 14px;
    border: 1px solid #e5e7eb;
    font-size: 14px;
    outline: none;
    background: var(--card-bg);
    color: var(--text-color);
    transition: all 0.3s ease;

    &:focus {
      border-color: var(--primary);
    }
  }

  textarea { resize: none; }

  button {
    margin-top: 10px;
    padding: 12px;
    border-radius: 12px;
    border: none;
    background: var(--primary);
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;

    &:hover {
      opacity: 0.9;
      transform: translateY(-2px);
    }
  }
`;

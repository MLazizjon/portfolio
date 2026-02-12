import styled from "styled-components";

export const PortfolioSection = styled.section`
  margin-left: 270px;
  padding: 40px;
  min-height: 100vh;
  background: var(--bg-color);
  color: var(--text-color);
  transition: all 0.3s ease;

  @media (max-width: 1200px) { padding: 30px; }
  @media (max-width: 992px) { padding: 25px; }
  @media (max-width: 900px) { margin-left: 0; padding: 90px 20px 20px; }
  @media (max-width: 480px) { padding: 85px 15px 15px; }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;

  h2 {
    font-size: 36px;
    font-weight: 700;
    color: var(--text-color);

    @media (max-width: 768px) { font-size: 30px; }
    @media (max-width: 480px) { font-size: 26px; }
  }

  .boxs {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;

    @media (max-width: 992px) { grid-template-columns: 1fr; }
  }

  .box {
    background: var(--card-bg);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease;

    &:hover { transform: translateY(-6px); }

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
    }
  }

  .info {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 12px;

    h3 {
      font-size: 20px;
      font-weight: 600;
      margin: 0;
      color: var(--text-color);
    }

    p {
      font-size: 14px;
      color: var(--text-color);
      opacity: 0.7;
    }

    a {
      margin-top: 7px;
      width: fit-content;
      padding: 8px 18px;
      background: var(--primary);
      color: #ffffff;
      border-radius: 10px;
      font-size: 14px;
      font-weight: 500;
      transition: all 0.3s ease;
      text-decoration: none;

      &:hover {
        transform: translateY(-2px);
        opacity: 0.9;
      }
    }
  }
`;



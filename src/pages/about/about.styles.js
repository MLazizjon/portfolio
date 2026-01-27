import styled from "styled-components";

export const AboutSection = styled.section`
  margin-left: 270px; /* Sidebar bor holat */
  padding: 40px;
  min-height: 100vh;
  background: var(--bg-color);
  color: var(--text-color);
  transition: all 0.3s ease;

  /* Laptop */
  @media (max-width: 1200px) {
    padding: 30px;
  }

  /* Tablet */
  @media (max-width: 992px) {
    padding: 25px;
  }

  /* Mobile (sidebar yo‘q + menu icon joyi) */
  @media (max-width: 900px) {
    margin-left: 0;
    padding: 90px 20px 20px; /* Menu icon yuqorida joylashadi */
  }

  /* Small mobile */
  @media (max-width: 480px) {
    padding: 85px 15px 15px;
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
    color: var(--text-color);

    @media (max-width: 768px) {
      font-size: 30px;
    }

    @media (max-width: 480px) {
      font-size: 26px;
    }
  }

  h3 {
    font-size: 22px;
    margin-bottom: 15px;
    color: var(--primary);

    @media (max-width: 480px) {
      font-size: 20px;
    }
  }

  .about-text {
    max-width: 750px;
    line-height: 1.7;
    color: var(--gray);

    @media (max-width: 480px) {
      font-size: 14px;
    }
  }

  .part {
    display: flex;
    align-items: center;
    gap: 60px;
    margin-top: 10px;

    @media (max-width: 900px) {
      flex-direction: column;
      gap: 40px;
    }
  }

  /* LEFT */
  .left {
    flex: 1;
    line-height: 20px;

    p {
      padding: 12px 0;
      border-bottom: 1px solid var(--border-color);
      color: var(--text-color-secondary);
      font-size: 15px;

      span{
        color: var(--gray)
      }

      @media (max-width: 480px) {
        font-size: 14px;
      }
    }

    strong {
      min-width: 130px;
      display: inline-block;
      color: var(--text-color);

      @media (max-width: 480px) {
        min-width: 110px;
      }
    }
  }

  /* RIGHT */
  .right {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 14px;
  }

  .skill-card {
    display: flex;
    align-items: center;
    gap: 14px;
    padding: 14px 16px;
    border: 1px solid var(--primary);
    border-radius: 12px;
    font-size: 15px;
    color: var( --primary);
    transition: all 0.3s ease;

    .icon{
      color: white;
    }
    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
    }

    @media (max-width: 480px) {
      padding: 12px 14px;
      font-size: 14px;
    }
  }

  .skill-card svg {
    font-size: 20px;
    color: var(--primary);

    @media (max-width: 480px) {
      font-size: 18px;
    }
  }
`;

import styled from "styled-components";

export const HomeSection = styled.section`
  margin-left: 270px; /* sidebar bor holat */
  padding: 40px;
  min-height: 100vh;
  transition: all 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;

  /* DARK/LIGHT */
  background-color: var(--bg-color);

  /* ====== 1200px dan kichik ====== */
  @media (max-width: 1200px) {
    padding: 30px;
  }

  /* ====== Tablet ====== */
  @media (max-width: 992px) {
    padding: 25px;
  }

  /* ====== Mobile (sidebar yo‘qoladi deb hisoblaymiz) ====== */
  @media (max-width: 768px) {
    margin-left: 0;
    padding: 20px;
  }

  /* ====== Small mobile ====== */
  @media (max-width: 480px) {
    padding: 15px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  text-align: center;

  img {
    width: 200px;
    height: 250px;
    border-radius: 50%;
    object-fit: cover;
    border: 8px solid var(--primary);
    transition: all 0.3s ease;

    /* Tablet */
    @media (max-width: 768px) {
      width: 170px;
      height: 170px;
    }

    /* Mobile */
    @media (max-width: 480px) {
      width: 140px;
      height: 140px;
      border-width: 6px;
    }
  }

  .name {
    display: flex;
    flex-direction: column;
    gap: 6px;

    h2 {
      font-size: 26px;
      color: var(--text-color);
      transition: all 0.3s ease;

      @media (max-width: 768px) {
        font-size: 22px;
      }

      @media (max-width: 480px) {
        font-size: 20px;
      }
    }

    p {
      color: var(--text-color);
      opacity: 0.7;
      font-size: 16px;
      transition: all 0.3s ease;

      @media (max-width: 480px) {
        font-size: 14px;
      }
    }
  }

  .icons {
    display: flex;
    gap: 20px;

    .icon {
      font-size: 26px;
      color: var(--primary);
      cursor: pointer;
      transition: transform 0.3s ease, color 0.3s ease;

      &:hover {
        transform: scale(1.15);
      }

      @media (max-width: 480px) {
        font-size: 22px;
      }
    }
  }
`;

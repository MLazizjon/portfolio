import styled from "styled-components";

/* ================= SIDEBAR ================= */
export const SidebarSection = styled.aside`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 270px;
  background: var(--card-bg);
  color: var(--text-color);
  box-shadow: 4px 0 12px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
  z-index: 1000;

  /* 1300px dan past */
  @media (max-width: 1300px) {
    width: 240px;
  }

  /* 900px dan past → sidebar yashirin */
  @media (max-width: 900px) {
    width: 260px;
    transform: translateX(-100%);
  }

  /* open class bo‘lsa chiqadi */
  &.open {
    transform: translateX(0);
  }
`;

/* ================= WRAPPER ================= */
export const Wrapper = styled.div`
  height: 100%;
  padding: 28px 24px;
  display: flex;
  flex-direction: column;
  gap: 60px;

  /* LOGO / NAME */
  h1 {
    font-size: 28px;
    font-weight: 500;
    margin: 0;
    letter-spacing: 0.5px;
    color: var(--text-color);
  }

  .menu_start {
    display: flex;
    flex-direction: column;
    gap: 18px;

    .menu {
      display: flex;
      align-items: center;
      gap: 16px;
      padding: 12px 18px;
      border-radius: 10px;
      cursor: pointer;
      transition: all 0.25s ease;
      user-select: none;
      color: var(--text-color);

      &:hover {
        background: rgba(59, 130, 246, 0.1); /* primary bilan mos */
        transform: translateX(4px);
      }

      &.active {
        background: rgba(59, 130, 246, 0.2);
      }

      span {
        font-size: 22px;
        display: flex;
        align-items: center;
        color: var(--text-color);
      }

      h2 {
        font-size: 17px;
        font-weight: 500;
        margin: 0;
      }
    }
  }

  /* 1100px dan past */
  @media (max-width: 1100px) {
    gap: 50px;
    .menu h2 { font-size: 16px; }
  }

  /* 600px dan past */
  @media (max-width: 600px) {
    padding: 24px 20px;
    h1 { font-size: 24px; }
    .menu h2 { font-size: 15px; }
  }

  /* 350px gacha */
  @media (max-width: 350px) {
    padding: 20px 16px;
    h1 { font-size: 22px; }
    .menu { padding: 10px 14px; }
  }
`;

/* ================= MENU ICON ================= */
export const MenuIcon = styled.div`
  position: fixed;
  top: 22px;
  left: 22px;
  font-size: 30px;
  cursor: pointer;
  z-index: 1100;
  color: var(--text-color);
  background: var(--card-bg);
  border-radius: 10px;
  padding: 6px 8px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
  transition: all 0.3s ease;

  &:hover { transform: scale(1.05); }

  display: none;

  /* 900px dan past → icon chiqadi */
  @media (max-width: 900px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

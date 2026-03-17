export function GlobalStyles() {
  return (
    <style>{`
      html {
        scroll-behavior: smooth;
      }

      * {
        box-sizing: border-box;
      }

      body {
        background: #050508;
        font-family: Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow-x: hidden;
      }

      @keyframes pulse-ring {
        0%, 100% {
          opacity: 1;
          transform: scale(1);
        }
        50% {
          opacity: 0.4;
          transform: scale(1.35);
        }
      }

      @keyframes pulse-dot {
        0%, 100% { opacity: 1; }
        50% { opacity: 0.5; }
      }

      @keyframes modal-slide-up {
        from {
          opacity: 0;
          transform: translateY(32px) scale(0.98);
        }
        to {
          opacity: 1;
          transform: translateY(0) scale(1);
        }
      }

      @keyframes fade-in-backdrop {
        from { opacity: 0; }
        to { opacity: 1; }
      }

      ::-webkit-scrollbar {
        width: 5px;
        height: 5px;
      }
      ::-webkit-scrollbar-track {
        background: #050508;
      }
      ::-webkit-scrollbar-thumb {
        background: rgba(255,255,255,0.1);
        border-radius: 999px;
      }
      ::-webkit-scrollbar-thumb:hover {
        background: rgba(0,232,122,0.3);
      }

      ::placeholder {
        color: #40406a;
      }

      select option {
        background: #0d0d1a;
        color: #fff;
      }
    `}</style>
  );
}

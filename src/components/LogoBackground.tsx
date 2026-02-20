import Image from "next/image";

const logos = [
  // Top area — dense
  { top: "1%", left: "5%", size: 80, rotate: -15, depth: 1.2 },
  { top: "2%", left: "30%", size: 70, rotate: 20, depth: 0.8 },
  { top: "3%", left: "55%", size: 75, rotate: -25, depth: 1.5 },
  { top: "1%", left: "78%", size: 68, rotate: 35, depth: 0.6 },
  { top: "5%", left: "18%", size: 72, rotate: -40, depth: 1.0 },
  { top: "6%", left: "45%", size: 65, rotate: 12, depth: 1.3 },
  { top: "4%", left: "88%", size: 70, rotate: -18, depth: 0.7 },
  { top: "8%", left: "65%", size: 75, rotate: 28, depth: 1.1 },
  { top: "10%", left: "10%", size: 68, rotate: -32, depth: 0.9 },
  { top: "9%", left: "38%", size: 72, rotate: 45, depth: 1.4 },
  { top: "12%", left: "72%", size: 65, rotate: -10, depth: 0.5 },
  { top: "11%", left: "92%", size: 60, rotate: 22, depth: 1.2 },
  { top: "15%", left: "22%", size: 70, rotate: -38, depth: 0.8 },
  { top: "14%", left: "52%", size: 68, rotate: 15, depth: 1.0 },
  { top: "17%", left: "82%", size: 62, rotate: -28, depth: 1.3 },
  { top: "18%", left: "5%", size: 65, rotate: 40, depth: 0.6 },
  { top: "20%", left: "35%", size: 70, rotate: -20, depth: 1.1 },
  { top: "22%", left: "62%", size: 66, rotate: 30, depth: 0.9 },
  { top: "24%", left: "15%", size: 68, rotate: -45, depth: 1.4 },
  { top: "26%", left: "48%", size: 64, rotate: 18, depth: 0.7 },
  { top: "28%", left: "78%", size: 70, rotate: -12, depth: 1.2 },
  // Mid area
  { top: "32%", left: "25%", size: 65, rotate: 35, depth: 0.8 },
  { top: "35%", left: "55%", size: 60, rotate: -22, depth: 1.0 },
  { top: "38%", left: "8%", size: 68, rotate: 42, depth: 1.3 },
  { top: "40%", left: "70%", size: 62, rotate: -30, depth: 0.6 },
  { top: "45%", left: "40%", size: 60, rotate: 15, depth: 1.1 },
  { top: "48%", left: "85%", size: 65, rotate: -35, depth: 0.9 },
  // Lower area — dense
  { top: "52%", left: "20%", size: 62, rotate: 25, depth: 1.4 },
  { top: "53%", left: "55%", size: 58, rotate: -18, depth: 0.7 },
  { top: "55%", left: "75%", size: 60, rotate: 32, depth: 1.2 },
  { top: "57%", left: "38%", size: 65, rotate: -12, depth: 0.8 },
  { top: "60%", left: "10%", size: 60, rotate: 38, depth: 1.0 },
  { top: "62%", left: "65%", size: 55, rotate: -28, depth: 1.3 },
  { top: "63%", left: "45%", size: 58, rotate: 15, depth: 0.6 },
  { top: "66%", left: "28%", size: 62, rotate: -35, depth: 1.1 },
  { top: "68%", left: "80%", size: 55, rotate: 22, depth: 0.9 },
  { top: "70%", left: "50%", size: 58, rotate: -20, depth: 1.4 },
  { top: "72%", left: "15%", size: 55, rotate: 40, depth: 0.7 },
  { top: "74%", left: "68%", size: 52, rotate: -15, depth: 1.2 },
  { top: "76%", left: "35%", size: 56, rotate: 28, depth: 0.8 },
  { top: "78%", left: "55%", size: 50, rotate: -32, depth: 1.0 },
  { top: "80%", left: "22%", size: 54, rotate: 18, depth: 1.3 },
  { top: "82%", left: "72%", size: 50, rotate: -25, depth: 0.6 },
  { top: "84%", left: "42%", size: 52, rotate: 35, depth: 1.1 },
  { top: "86%", left: "60%", size: 48, rotate: -10, depth: 0.9 },
  { top: "88%", left: "30%", size: 50, rotate: 22, depth: 1.4 },
  { top: "90%", left: "50%", size: 48, rotate: -18, depth: 0.7 },
];

// Mobile logos — bigger, dense, fills the screen
const mobileLogos = [
  { top: "1%", left: "2%", size: 52, rotate: -15, depth: 1.0 },
  { top: "2%", left: "50%", size: 46, rotate: 35, depth: 1.1 },
  { top: "3%", left: "70%", size: 48, rotate: 25, depth: 0.8 },
  { top: "7%", left: "20%", size: 50, rotate: -30, depth: 1.2 },
  { top: "9%", left: "82%", size: 46, rotate: 18, depth: 0.6 },
  { top: "12%", left: "40%", size: 48, rotate: -42, depth: 0.9 },
  { top: "14%", left: "8%", size: 54, rotate: 40, depth: 1.1 },
  { top: "16%", left: "65%", size: 48, rotate: -20, depth: 0.9 },
  { top: "20%", left: "30%", size: 50, rotate: 15, depth: 1.0 },
  { top: "22%", left: "78%", size: 44, rotate: 32, depth: 0.7 },
  { top: "25%", left: "5%", size: 50, rotate: -38, depth: 1.3 },
  { top: "27%", left: "52%", size: 46, rotate: 15, depth: 1.0 },
  { top: "30%", left: "85%", size: 52, rotate: -12, depth: 0.8 },
  { top: "32%", left: "18%", size: 48, rotate: 28, depth: 1.2 },
  { top: "35%", left: "62%", size: 44, rotate: -35, depth: 0.6 },
  { top: "38%", left: "40%", size: 50, rotate: 22, depth: 1.1 },
  { top: "40%", left: "2%", size: 46, rotate: -18, depth: 0.9 },
  { top: "43%", left: "75%", size: 52, rotate: 35, depth: 0.7 },
  { top: "46%", left: "28%", size: 48, rotate: -25, depth: 1.3 },
  { top: "49%", left: "55%", size: 44, rotate: 12, depth: 1.0 },
  { top: "52%", left: "8%", size: 50, rotate: -40, depth: 0.8 },
  { top: "54%", left: "82%", size: 46, rotate: 20, depth: 1.2 },
  { top: "57%", left: "42%", size: 52, rotate: -15, depth: 0.6 },
  { top: "60%", left: "15%", size: 48, rotate: 30, depth: 1.1 },
  { top: "63%", left: "68%", size: 44, rotate: -22, depth: 0.9 },
  { top: "66%", left: "35%", size: 50, rotate: 38, depth: 0.7 },
  { top: "68%", left: "85%", size: 46, rotate: -10, depth: 1.3 },
  { top: "71%", left: "5%", size: 52, rotate: 25, depth: 1.0 },
  { top: "74%", left: "55%", size: 48, rotate: -32, depth: 0.8 },
  { top: "77%", left: "25%", size: 44, rotate: 18, depth: 1.2 },
  { top: "80%", left: "72%", size: 50, rotate: -28, depth: 0.6 },
  { top: "83%", left: "45%", size: 46, rotate: 42, depth: 1.1 },
  { top: "86%", left: "10%", size: 52, rotate: -15, depth: 0.9 },
  { top: "88%", left: "65%", size: 48, rotate: 20, depth: 0.7 },
  { top: "91%", left: "38%", size: 44, rotate: -35, depth: 1.3 },
  { top: "94%", left: "80%", size: 50, rotate: 12, depth: 1.0 },
];

interface LogoBackgroundProps {
  animate?: boolean;
  mouseX?: number;
  mouseY?: number;
  mobile?: boolean;
}

export default function LogoBackground({ animate = false, mouseX = 0.5, mouseY = 0.5, mobile = false }: LogoBackgroundProps) {
  const items = mobile ? mobileLogos : logos;
  const offsetX = (mouseX - 0.5) * 2;
  const offsetY = (mouseY - 0.5) * 2;

  return (
    <div className={`absolute inset-0 overflow-hidden transition-transform duration-[1.5s] ease-out ${
      animate ? "translate-y-0" : "translate-y-full"
    }`}>
      {items.map((logo, i) => {
        const moveX = offsetX * logo.depth * 20;
        const moveY = offsetY * logo.depth * 12;
        return (
          <div
            key={i}
            className="absolute opacity-[0.35] transition-transform duration-200 ease-out"
            style={{
              top: logo.top,
              left: logo.left,
              width: logo.size,
              height: logo.size,
              transform: `translate(${moveX}px, ${moveY}px) rotate(${logo.rotate}deg)`,
            }}
          >
            <Image
              src="/hype-logo.png"
              alt=""
              width={logo.size}
              height={logo.size}
              className="h-full w-full object-contain"
              aria-hidden="true"
            />
          </div>
        );
      })}
    </div>
  );
}

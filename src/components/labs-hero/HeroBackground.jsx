export default function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <svg
        className="absolute -right-[8%] -top-[5%] h-[70%] w-[55%]"
        viewBox="0 0 700 800"
        fill="none"
      >
        <path
          d="M520 60C680 100 720 280 660 440C600 600 440 720 300 760C160 800 40 680 30 500C20 320 100 140 260 60C420 -20 360 20 520 60Z"
          fill="#A8E6A1"
        />
        <path
          d="M580 180C640 260 620 380 560 470C500 560 400 600 320 580C240 560 180 460 200 350C220 240 310 160 420 150C530 140 520 100 580 180Z"
          fill="#81C784"
          opacity="0.55"
        />
      </svg>

      <svg
        className="absolute -bottom-[15%] -left-[10%] h-[55%] w-[50%]"
        viewBox="0 0 650 700"
        fill="none"
      >
        <path
          d="M80 420C20 520 40 640 140 680C240 720 380 680 480 600C580 520 640 380 600 260C560 140 440 60 320 80C200 100 140 320 80 420Z"
          fill="#64B5F6"
        />
        <path
          d="M160 480C120 540 140 600 200 620C260 640 340 600 400 540C460 480 480 400 450 340C420 280 350 250 290 270C230 290 200 420 160 480Z"
          fill="#42A5F5"
          opacity="0.5"
        />
      </svg>
    </div>
  )
}

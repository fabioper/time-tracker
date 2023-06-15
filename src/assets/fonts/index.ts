import localFont from "next/font/local"

export const inter = localFont({
  src: [
    {
      path: "./Inter-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "./Inter-Bold.ttf",
      weight: "600",
      style: "normal",
    },
  ],
  variable: "--inter",
})

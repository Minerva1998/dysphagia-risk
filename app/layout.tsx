export const metadata = {
  title: "吞咽障碍风险评估",
  description: "后颅窝肿瘤术后吞咽障碍风险评分工具",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh">
      <body>{children}</body>
    </html>
  );
}

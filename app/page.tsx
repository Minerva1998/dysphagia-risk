'use client';
import { useState } from "react";

export default function Page() {
  const [age, setAge] = useState(60);
  const [gender, setGender] = useState("male");
  const [bmi, setBmi] = useState(22);
  const [preOpCough, setPreOpCough] = useState(false);
  const [surgeryTime, setSurgeryTime] = useState(180);
  const [tracheotomy, setTracheotomy] = useState(false);
  const [brainstemInvolved, setBrainstemInvolved] = useState(false);
  const [riskScore, setRiskScore] = useState(null);

  const calculateRisk = () => {
    let score = 0;
    if (age >= 65) score += 1;
    if (gender === "male") score += 1;
    if (bmi < 18.5 || bmi >= 28) score += 1;
    if (preOpCough) score += 2;
    if (surgeryTime >= 300) score += 1;
    if (tracheotomy) score += 2;
    if (brainstemInvolved) score += 2;

    let riskLevel = "低风险";
    if (score >= 4 && score <= 6) riskLevel = "中风险";
    if (score > 6) riskLevel = "高风险";

    setRiskScore(`评分：${score}，风险等级：${riskLevel}`);
  };

  return (
    <main className="max-w-xl mx-auto p-6 space-y-6">
      <h1 className="text-2xl font-bold">后颅窝肿瘤术后吞咽障碍风险评估</h1>
      <div className="space-y-4">
        <div>
          <label>年龄（岁）</label>
          <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} />
        </div>
        <div>
          <label>性别</label>
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="male">男</option>
            <option value="female">女</option>
          </select>
        </div>
        <div>
          <label>BMI</label>
          <input type="number" value={bmi} onChange={(e) => setBmi(Number(e.target.value))} />
        </div>
        <div>
          <label>术前是否呛咳</label>
          <input type="checkbox" checked={preOpCough} onChange={(e) => setPreOpCough(e.target.checked)} />
        </div>
        <div>
          <label>手术时间（分钟）</label>
          <input type="number" value={surgeryTime} onChange={(e) => setSurgeryTime(Number(e.target.value))} />
        </div>
        <div>
          <label>是否气管切开</label>
          <input type="checkbox" checked={tracheotomy} onChange={(e) => setTracheotomy(e.target.checked)} />
        </div>
        <div>
          <label>肿瘤是否靠近延髓/脑干</label>
          <input type="checkbox" checked={brainstemInvolved} onChange={(e) => setBrainstemInvolved(e.target.checked)} />
        </div>
        <button onClick={calculateRisk}>评估风险</button>
        {riskScore && <div className="font-semibold">{riskScore}</div>}
      </div>
    </main>
  );
}

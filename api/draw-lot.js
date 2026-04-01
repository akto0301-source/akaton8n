const lots = require('../data/lots.json');

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST');

  try {
    const randomIndex = Math.floor(Math.random() * lots.length);
    const selectedLot = lots[randomIndex];

    res.status(200).json({
      success: true,
      lotNumber: selectedLot.id,
      title: selectedLot.title,
      poem: selectedLot.poem,
      story: selectedLot.story,
      overall: selectedLot.overall,
      love: selectedLot.love,
      career: selectedLot.career,
      wealth: selectedLot.wealth,
      health: selectedLot.health
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: "宇宙能量正在重整中，請深呼吸，稍候再讓赤兔為您抽籤喔！"
    });
  }
}

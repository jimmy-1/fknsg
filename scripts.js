// 祝福语列表（包含所有50条，带编号）
const blessings = [
    "1. 愚人节快乐",
    "2. 开心一刻愚你同乐",
    "3. 愚人整蛊笑口常开",
    "4. 整蛊无限乐翻天",
    "5. 愚人节让我看看谁是整蛊专家",
    "6. 愚人节到大家肯定想说真心话",
    "7. 祝大家今天的真心话玩笑都有肯定回答",
    "8. 保持警惕小心被愚",
    "9. 祝天下愚人大智若愚",
    "10. 谢谢你对我的信任",
    "11. 我只想把最真诚的送给你",
    "12. 愚人节请你做一天愚人",
    "13. 烦恼忧愁全忘记",
    "14. 糊涂未偿不可以",
    "15. 祝你愚人节过得精彩",
    "16. 愚人节与君同乐",
    "17. 祝生活游刃有愚",
    "18. 今天是个快乐的节日",
    "19. 愿你天天都能笑口常开",
    "20. 愚人节愿你生活如愚得水",
    "21. 能力绰绰有愚",
    "22. 财富月月有愚",
    "23. 做事不遗愚力",
    "24. 饮食愚味无穷",
    "25. 茶愚饭后谈笑风生",
    "26. 烦恼愚消云散",
    "27. 愚人节自愚自乐",
    "28. 不如愚你同乐",
    "29. 愿你收入年年有愚",
    "30. 心情天天愚快",
    "31. 财富愚日俱增",
    "32. 愚人节日开启四月的好运气",
    "33. 祝你福运满满",
    "34. 福气充满整个四月",
    "35. 借愚人节的机会好好放松",
    "36. 愚人节希望我能让你开怀大笑",
    "37. 愚人节可不许真的骗我",
    "38. 我读书多你是骗不了我的",
    "39. 愚人节当然要愉快度过啦",
    "40. 愚人节祝你永远天真",
    "41. 愚人节祝你永远拥有快乐心情",
    "42. 愚人节我可以骗你的心吗",
    "43. 有些谎言也可以很动听",
    "44. 愿你做个愚人烦恼少少",
    "45. 若被人愚微微一笑",
    "46. 祝大家的生活像花一样灿烂",
    "47. 祝你每天都有好心情",
    "48. 娱人不愚人",
    "49. 请大家放开心胸被愚乐",
    "50. 愚人节给我一个真话的机会"
];

// 去除编号的复制功能
function copyText(text) {
    const textWithoutNumber = text.replace(/^\d+\.\s*/, ''); // 去掉前面的编号
    navigator.clipboard.writeText(textWithoutNumber)
        .then(() => {
            alert('已复制到剪贴板: ' + textWithoutNumber);
        })
        .catch(err => {
            console.error('复制失败: ', err);
        });
}

// 去除编号的复制全部功能
function copyAllText() {
    const nonEmptyBlessings = blessings.filter(text => text.trim()).map(text => text.replace(/^\d+\.\s*/, '')); // 去掉编号
    const allText = nonEmptyBlessings.join('\n');
    navigator.clipboard.writeText(allText)
        .then(() => {
            alert('已将所有祝福语复制到剪贴板！');
        })
        .catch(err => {
            console.error('复制失败: ', err);
        });
}

// 动态生成祝福语和按钮
const container = document.getElementById('blessings-container');
const copyAllBtn = document.getElementById('copyAllBtn');

blessings.forEach(text => {
    if (text.trim()) { // 跳过空字符串
        const div = document.createElement('div');
        div.className = 'blessing-item';
        
        // 创建祝福语文本（带编号）
        const blessingText = document.createElement('span');
        blessingText.className = 'blessing-text';
        blessingText.textContent = text;
        
        // 创建复制按钮
        const button = document.createElement('button');
        button.textContent = '复制';
        button.onclick = () => copyText(text);
        
        // 将文本和按钮添加到div中
        div.appendChild(blessingText);
        div.appendChild(button);
        container.appendChild(div);
    }
});

// 绑定“复制全部”按钮事件
copyAllBtn.addEventListener('click', copyAllText);
